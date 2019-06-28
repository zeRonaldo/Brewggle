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
 - '/': Home-page
 - '/search/:query/type/:type-of-search': buscas realizadas na ferramenta
 - '/beer/:id': informações detalhadas sobre uma cerveja

### Inicializando o projeto
Atualmente o projeto já possui um deploy que pode ser acessado por esse link:

para utilizar a versão de desenvolvimento, clone o projeto para sua máquina, acesse a pasta através do terminal e você terá alguns scripts padrão:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
