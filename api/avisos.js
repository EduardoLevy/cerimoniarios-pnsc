/* =========================================================
   /api/avisos.js
   Função serverless (Vercel, runtime Node.js).

   GET  -> pública. Lê data/avisos.json no GitHub e devolve o JSON.
   POST -> protegida por senha. Recebe { password, avisos } e grava
           o arquivo de volta no GitHub (isso conta como um commit
           automático — não precisa abrir o VS Code).

   Não usa nenhum banco de dados: o arquivo data/avisos.json no
   próprio repositório é a "fonte da verdade".

   Variáveis de ambiente necessárias (configurar no painel da Vercel,
   em Project Settings → Environment Variables):

     GITHUB_TOKEN      -> Personal Access Token do GitHub
                          (fine-grained, permissão Contents: Read and write,
                          escopo apenas neste repositório)
     GITHUB_REPO       -> "seu-usuario/nome-do-repositorio"
     GITHUB_BRANCH     -> branch que a Vercel usa para o deploy (ex: "main")
     GITHUB_FILE_PATH  -> caminho do arquivo no repo (padrão: "data/avisos.json")
     ADMIN_PASSWORD    -> a senha que você vai digitar na página /admin
   ========================================================= */

const GITHUB_API = "https://api.github.com";

function envOrThrow(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Variável de ambiente ausente: ${name}`);
  return value;
}

async function githubRequest(path, options = {}) {
  const token = envOrThrow("GITHUB_TOKEN");
  const response = await fetch(`${GITHUB_API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "cerimoniarios-pnsc-admin",
      ...(options.headers || {})
    }
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message = (data && data.message) || `Erro do GitHub (HTTP ${response.status})`;
    throw new Error(message);
  }
  return data;
}

async function readAvisosFile() {
  const repo = envOrThrow("GITHUB_REPO");
  const branch = process.env.GITHUB_BRANCH || "main";
  const filePath = process.env.GITHUB_FILE_PATH || "data/avisos.json";

  const data = await githubRequest(
    `/repos/${repo}/contents/${filePath}?ref=${encodeURIComponent(branch)}`
  );

  const content = Buffer.from(data.content, "base64").toString("utf-8");
  return { avisos: JSON.parse(content), sha: data.sha };
}

async function writeAvisosFile(avisos, sha) {
  const repo = envOrThrow("GITHUB_REPO");
  const branch = process.env.GITHUB_BRANCH || "main";
  const filePath = process.env.GITHUB_FILE_PATH || "data/avisos.json";

  const content = Buffer.from(JSON.stringify(avisos, null, 2), "utf-8").toString("base64");

  await githubRequest(`/repos/${repo}/contents/${filePath}`, {
    method: "PUT",
    body: JSON.stringify({
      message: "chore: atualiza avisos via painel admin",
      content,
      sha,
      branch
    })
  });
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");

  try {
    if (req.method === "GET") {
      const { avisos } = await readAvisosFile();
      return res.status(200).json(avisos);
    }

    if (req.method === "POST") {
      const { password, avisos } = req.body || {};
      const adminPassword = envOrThrow("ADMIN_PASSWORD");

      if (!password || password !== adminPassword) {
        return res.status(401).json({ error: "Senha incorreta." });
      }
      if (!Array.isArray(avisos)) {
        return res.status(400).json({ error: "Formato inválido: 'avisos' precisa ser uma lista." });
      }

      const { sha } = await readAvisosFile();
      await writeAvisosFile(avisos, sha);
      return res.status(200).json({ ok: true });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Método não permitido." });

  } catch (err) {
    console.error("Erro em /api/avisos:", err);
    return res.status(500).json({ error: err.message || "Erro interno." });
  }
};
