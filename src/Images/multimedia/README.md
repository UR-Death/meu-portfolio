# Pasta Multimedia

Esta pasta é destinada a armazenar imagens e vídeos para a seção Multimédia do portfólio.

## Como adicionar conteúdo:

### Vídeos:
- Coloque os arquivos de vídeo nesta pasta (formatos suportados: MP4, WebM, OGV)
- Para cada vídeo, crie uma thumbnail (imagem de pré-visualização) com o mesmo nome do vídeo mas extensão .jpg ou .png

### Fotos:
- Coloque as imagens nesta pasta (formatos suportados: JPG, PNG, WebP, GIF)

### Exemplo de estrutura:
```
multimedia/
├── video_projeto1.mp4
├── video_projeto1.jpg (thumbnail)
├── foto_projeto1.jpg
├── animacao_personagem.mp4
├── animacao_personagem.jpg (thumbnail)
└── render_produto.jpg
```

### Como usar no código:
No arquivo `PortfolioMultimedia.tsx`, atualize o array `mediaItems` com seus arquivos:

```tsx
{
  id: 1,
  title: 'Nome do Projeto',
  type: 'video', // ou 'photo'
  thumbnail: '../../Images/multimedia/nome_do_arquivo.jpg',
  url: '../../Images/multimedia/nome_do_video.mp4', // apenas para vídeos
  date: 'DD/MM/YYYY',
  description: 'Descrição do projeto',
}
```

### Nota:
Atualmente, o componente usa imagens placeholder da web. Substitua pelas suas próprias imagens locais seguindo o padrão acima.