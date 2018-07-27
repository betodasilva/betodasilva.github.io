---
layout: posts
title: Estilizando imagens quebradas no seu site utilizando pseudoelementos
subtitle: Substitua a mensagem padrão de erro e melhore a experiência da sua aplicaão em poucos minutos.
thumbnail_image: /images/posts/styled-broken-image.jpeg
image: /images/posts/experiencia-digital-nomade.png
categories: [front-end]
---

Recentemente passei por uma necessidade de construir um previsualizador de imagem para upload e pensei como poderia evitar o máximo o uso de js para fazer injeção de uma tag dinâmicamente, e ao invés disso, poder só setar o atributo _src_ à medida que a imagem fosse carregada.

Lembrando de alguns artigos que havia lido há uns tempos quando estava aprendendo sobre pseudoelementos, resolvi fazer o uso desses poderosos para evitar ficar com aquele icone padrão de imagem quebrada e ao invés disso personalizar com meu próprio ícone e texto.

Em linhas práticas o que vamos precisar utilizar para conseguir tal efeito são o :before e :after e a propriedade content.

O resto é o básico feijão com arroz do css.

!["Imagem com link quebrado estilizada"](/images/posts/styled-broken-image.jpeg)

## Como fazer?

Eu criei uma classe com estilos para ficar neste formato retangular, com espaço suficiente para adicionar um texto e também um ícone ou até mesmo uma imagem de placeholder quando a imagem estivesse quebrada.

```css
.is-broken {
    position: relative;
    width: 280px;
    height: 160px;
    display: block;
    padding: 20px;
}
```

Agora utilizando os poderes das pseudoelementos, podemos estilizar o _:before_ para ficar com o mesmo tamanhos do box que criamos.

Para conseguir tal efeito vamos adicionar posição absoluta na pseudoclasse.

```css
.is-broken:before {
    /* vamos adicionar um ícone posteriormente
    * utilizando a propriedade content. 
    * Por enquantos deixamos vazio para inicializar
    * o pseudo elemento
     */
    content: "";
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
     
  }
```
Isso é o que preciamos para fazer com que o pseudoelemento seja inicializado, e a partir daí começamos a estilá-lo.

A partir daqui vamos fazer passo a passo a adição de ícones, espaçamento e cores.

### #1 Adicionar background para sobrepor texto do alt="" que é imprimido automaticamente

```css
.is-broken:before {
    content: "";
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    /* cor de background */
    background-color: #fff;
}
```

### #2 Modificar o _content_ para adicionar mensagem desejada

A propriedade _content_ nos permite adicionar tanto um texto qualquer como imprimir algum atributo do elemento, como o _alt_ e _src_ da imagem. 

Vamos imprimir o _src_ para identificar mais fácil a qual link está quebrado.

Essa é a syntaxe que precisamos para conseguir tal efeito.

```css
.is-broken:before {
    content: attr(src); /* « imprimindo o src como texto */
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    /* cor de background */
    background-color: #fff;
}
```
Podemos também adicionar um texto junto com a URL que vamos imprimir.

Para melhorar ainda mais a estética, vamos imprimir a url dentro de parênteses. 

Aqui como ficará nosso código.

```css
.is-broken:before {
    /* ↓ texto + src ↓ */
    content: "Este link parece estar quebrado (" attr(src) ")"; 
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    /* cor de background */
    background-color: #fff;
}
```

### #3 Adicionar ícone ou imagem de background para decorar nossa mensagem de erro

Nessa etapa fica a seu gosto experimentar como decorar a mensagem de erro que vamos imprimir.

Eu decidi adicionar um ícone representando uma imagem com erro utilizando as propriedades background-image, background-position e background-size. 

Pode-se utilizar o _shorthand_ background se desejar :)

```css
.is-broken:before {
    /* ↓ texto + src ↓ */
    content: "Este link parece estar quebrado (" attr(src) ")"; 
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    /* cor de background */
    background-color: #fff;

    /* Posição e tamanho do ícone no meu exemplo */
    background-position: center 50px;
    background-repeat: no-repeat; /* Só quero ver um icone :) */
    background-size: 64px;

    /* Ícone que escolhi (em base64)*/
    background-image: url(data:image/svg+xml;utf8;base64..) 
    /* Cortei a url neste exemplo por estar utilizando uma base64 */
}
```



