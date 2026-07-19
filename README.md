# Cerimoniários PNSC — Portal de Formação

Site estático (HTML + CSS + JavaScript puro, sem frameworks e sem banco de dados)
para a formação dos cerimoniários da Paróquia Nossa Senhora da Conceição.

## Estrutura de arquivos

```
cerimoniarios-pnsc/
├── index.html          → estrutura da página
├── css/style.css        → identidade visual e responsividade
├── js/script.js         → conteúdo dinâmico (materiais, downloads, avisos)
└── pdfs/                → coloque aqui todos os arquivos PDF
```

## Como adicionar um novo PDF a um material existente

1. Coloque o arquivo `.pdf` dentro da pasta `pdfs/`.
2. Abra `js/script.js` e localize o array `materialsData`.
3. Ajuste o campo `pdf` do item correspondente para o nome do arquivo, por exemplo:

```js
{
  title: "Introdução ao Cerimoniário",
  description: "Conhecendo o serviço ao altar.",
  pdf: "pdfs/introducao-ao-cerimoniario.pdf"
}
```

## Como adicionar um novo cartão de material

No mesmo array `materialsData`, adicione um novo objeto ao final da lista:

```js
{
  title: "Nome da Nova Matéria",
  description: "Breve descrição do conteúdo.",
  pdf: "pdfs/nome-do-arquivo.pdf"
}
```

O cartão aparecerá automaticamente na seção "Materiais", sem necessidade de
alterar o HTML ou o CSS.

## Como adicionar um novo item em Downloads

Edite o array `downloadsData` em `js/script.js`:

```js
{
  title: "Nome do documento",
  meta: "PDF · breve contexto",
  pdf: "pdfs/nome-do-arquivo.pdf"
}
```

## Como publicar um Aviso

Edite o array `avisosData` em `js/script.js` (vazio por padrão):

```js
{
  title: "Título do aviso",
  message: "Texto do comunicado.",
  date: "2026-08-02"   // formato AAAA-MM-DD
}
```

Os avisos são ordenados automaticamente do mais recente para o mais antigo.
Enquanto a lista estiver vazia, a seção exibe um estado vazio elegante.

## Publicação

Por ser um site 100% estático, basta hospedar a pasta inteira em qualquer
serviço (GitHub Pages, Netlify, Vercel, cPanel, etc.) — não há necessidade de
servidor de banco de dados ou back-end.
