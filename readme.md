# Extenções vscode icon, EJS lenguage Support

## Instala o NPM express (NPM install express)
## para ir para os EJS precisa tambem instalar o NPM install ejs

para usar o res.render é necessario a pasta views que é a responsavel por armazenar as pastas, o render ele vai pesquisar atravez do EJS  
vale lembrar de sempre exportar na aulaController.js e tambem no aulaRoutes.js  apartir do module.exports chamando ela propria  
o aulaController esta como uma classe ja o routes não  
arquivos ejs não necessita parar o servidor eles atualiza sozinho  
## Objeto generico
res.render("carros", {lista: carros});  
como parametro o primeiro entra a view e depois nesse caso é o "bd"  
## Limitador EJS
<% if (user) { %>  
  &lt;h2&gt;<%= user.name %>&lt;/h2&gt;  
<% } %>  
isso é o exemplo, user é a lista render, no exemplo a cima ele mostra o nome dos usuarios  
as % é para usar o JS, dentro de 2 <% "js aqui" %> é possivel escrever o JS  
para iniciar a repetição é usado <%= "repetição aqui" %>  

## server.use(express.urlencoded());

isso é para descerealizar os dados do HTML, para que em um formulario ele possa incluir as informações

## Layout.ejs

é uma pagina para poder renderizar os links para as outras paginas, é uma pagina mestre  
para isso é necessario rodar uma nova biblioteca que seria a npm install express-ejs-layouts  
apos isso importar na server.js dessa forma:  
const expressEjsLayout = require("express-ejs-layouts");  
server.set("layout", "./layout.ejs");  
server.use(expressEjsLayout);  

## marcador de layout parcial responsavel por dividir as views da pagina mestre para a pagina desejada
<%- body %>
cabeçalho e roda pé vao ficar no layout, mas por padrão como o unico q muda é o body, podemos definir dessa forma pois a pagina desejada altera geralmente só o corpo  
se colocar no controller res.render("index", {layout: false});  
ele vai sobrescrever a pagina mestre e deixaria ela desativada, no caso não chamaria a pagina mestre só ficaria o conteudo normal  
caso queira deixar 2 layout, ao inves de usar o {layout: false} ele usaria por exemplo {layout: layout2}  