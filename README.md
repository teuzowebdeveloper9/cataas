# 🐱✨ Projeto Estilizado por Teuzowebdeveloper

![Gato Beijo](https://media.tenor.com/o_5RQarGvJ0AAAAM/kiss.gif)

## Sobre o Projeto

Este repositório foi originalmente criado pelo meu amigo Luziberto Mendes. Decidi pegar o projeto e adicionar algumas coisas legais que achei interessantes, além de tentar estilizar com a minha cara.

## Mudanças Feitas

### 1. Adição de Variáveis CSS
Adicionei variáveis CSS para facilitar a manutenção e personalização das cores do projeto:
```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --background-color: #ecf0f1;
    --text-color: #2a4968;
}
```

## 2. Estilização do Corpo
Personalizei o corpo do documento para utilizar as variáveis de cor e melhorar a legibilidade:


```css
body {
    font-family: Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    margin: 0;
    padding: 0;
}
```

## 3. Estilização do Header
Modifiquei o header para ter um fundo preto e texto branco, além de centralizar o conteúdo:


```css
header {
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px 0;
}
```

## 4. Adição de Efeitos de Transição
Adicionei efeitos de transição para a logo e imagens da galeria:


```css
.logo {
    width: 70px;
    transition: transform 0.3s ease;
}

.logo:hover {
    transform: rotate(360deg);
}

.gallery img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    transition: transform 0.3s ease;
}

.gallery img:hover {
    transform: scale(1.05);
}
```

## 5. Estilização da Galeria
Criei uma galeria de imagens utilizando grid layout:


```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
    
}

```
## 6. Responsividade
Adicionei estilos responsivos para melhorar a experiência em dispositivos móveis:


```css
@media (max-width: 600px) {
    .controls {
        flex-direction: column;
    }
}
```

## obrigado por ler até aqui 


Feito com esforço e muitos gatos 🖥️ by Teuzowebdeveloper inspired by Luziberto Mendes
