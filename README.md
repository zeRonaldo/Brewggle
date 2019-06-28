Esse projet é o teste para vaga de Dev Front-End da Fractal e foi utilizado o [Create React App](https://github.com/facebook/create-react-app) para inicializar o projeto.

## Descrição

O projeto segue as descrições enviadas por e-mail
```
Implementar um Web App que consulte uma API e exiba uma lista de cervejas. Na listagem deve ser exibido o nome e tagline. Ao selecionar um item na lista, exibir a tela de detalhes, contendo: nome, tagline, descrição e imagem.
```
Os seguintes requisitos foram cumpridos:
- Utilizar a seguinte API no desafio: [PunkApi](https://punkapi.com/documentation/v2);
- Utilizar a lib React;
- Criar a aplicação toda em componentes;
- Seguir os padrões e convenções do HTML, CSS e Javascript;
- Utilizar o Webpack;
- Utilizar npm ou yarn para gerenciar a aplicação;
- Enviar o código para um repositório git público (github, Bitbucket, Gitlab);
- Utilizar uma lib para o uso de rotas (React Routes);
- Utilizar uma lib para o gerenciamento de state (Redux);
- Utilizar axios para requisições HTTP na API;

### Sobre o projeto
Para utilizar melhor tanto o redux quanto o combo axios+api  a ideia foi criar um buscador de cervejas ao maior estilo google as buscas podem ser por nome, por lúpulo ou por comidas de acompanhamento.
Os links são compartilháveis e seguem o seguinte padrão:
 - *'/'*: Home-page
 - *'/search/:query/type/:type-of-search'*: buscas realizadas na ferramenta
 - *'/beer/:id'*: informações detalhadas sobre uma cerveja
 Qualquer outra url será redirecionada para uma mensagem de erro amigável e informativa

### Inicializando o projeto
Atualmente o projeto já possui um deploy que pode ser acessado por esse link:
 https://brewggle.herokuapp.com/
para utilizar a versão de desenvolvimento, clone o projeto para sua máquina, acesse a pasta através do terminal e você terá alguns scripts padrões:

#### `npm start`

Roda a aplicação em modo dev.<br>
abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador

#### `npm test`

#### `npm run build`

#### `npm run eject`
