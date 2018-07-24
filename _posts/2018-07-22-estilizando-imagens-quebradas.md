---
layout: posts
title: Estilizando imagens quebradas no seu site utilizando pseudoclasses
subtitle: Substitua a mensagem padrão de erro e melhore a experiência da sua aplicaão em poucos minutos.
thumbnail_image: /images/posts/styled-broken-image.jpeg
image: /images/posts/experiencia-digital-nomade.png
categories: [front-end]
---

Recentemente passei por uma necessidade de construir um previsualizador de imagem para upload e pensei como poderia evitar o máximo o uso de js para fazer injeção de uma tag dinâmicamente, e ao invés disso, poder só setar o atributo _src_ à medida que a imagem fosse carregada.

Lembrando de alguns artigos que havia lido há uns tempos quando estava aprendendo sobre pseudoclasses, resolvi fazer o uso das pseudoclasses para evitar ficar com aquele icone padrão de imagem quebrada e ao invés disso personalizar com meu próprio ícone e texto.

Basicamente o que vamos precisar utilizar para conseguir tal efeito são as pseudoclasses :before, :after e a propriedade content.

!["Imagem com link quebrado estilizada"](/images/posts/styled-broken-image.jpeg)

Para ficar neste formato retangular, com espaço suficiente para adicionar um texto e também um ícone ou até mesmo uma imagem de placeholder, eu estilizei uma classe para adicionar nas imagens quebradas

`
.is-broken {
    position: relative;
    width: 280px;
    height: 160px;
    display: block;
    padding: 20px;
}
`

Utilizando da pseudoclasse _:before_, eu adiciono um background da mesma cor para cubrir o texto e imagem padrão de links quebrados.


`
.is-broken:before {
    padding: 120px 20px 20px;
    border-radius: 6px;
    color: #f95959;
    font-size: 12px;
    text-align: center;
}
`

