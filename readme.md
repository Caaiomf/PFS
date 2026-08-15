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
  <h2><%= user.name %></h2>
<% } %>
isso é o exemplo, user é a lista render, no exemplo a cima ele mostra o nome dos usuarios  
as % é para usar o JS, dentro de 2 <% "js aqui" %> é possivel escrever o JS  
para iniciar a repetição é usado <%= "repetição aqui" %>  


