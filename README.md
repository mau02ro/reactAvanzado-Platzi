# Curso de React avanzado

Curso de React avanzado - Platzi

## Tecnologias

- **Empaquetador y transpilador**

  - [Webpack](https://webpack.js.org/)
  - [Babel](https://babeljs.io/)

- **Estilando con CSS en JS**

  - [styled-components]()

- **Como linter**

  - [Standard JS]()

- **Para fetching**

  - [GraphQL]()
  - [React Apollo]()

- **Enrutador SPA**

  - [Reach Router]()

- **Buenas prácticas**

  - [Lighthouse]()
  - [Cypress]()

- **SEO, PWA, Deploy**

  - [React Helmet]()
  - [Workbox]()
  - [Now]


## ¿Qué es GraphQL y React Apollo? Inicializando React Apollo Client y primer HoC

GraphQL es un lenguaje creado por Facebook para obtener solo los datos que necesitamos en nuestra aplicación. Imaginemos que tenemos una REST API con WordPress, él nos entrega un JSON con mucha data innecesaria y solo queremos unos cuantos fields; GraphQL hace posible obtener únicamente esa data.

React Apollo es un cliente que nos va a permitir conectarnos a un servidor GraphQL.

Vamos a instalar npm i apollo-boost, una utilidad que nos permite inicializar nuestra conexión con un servidor de Apollo muy rápidamente y sin configuración, necesitaremos npm i react-apollo el cual es la integración de Apollo con React y finalmente npm i graphql.

Configuraremos nuestro index.js para inicializar nuestro cliente de Apollo con GraphQL de la siguiente manera:

```
// index.js

{/.../}
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

{/.../}

const client = new ApolloClient({
        uri: 'URL_DEL_BACKEND' // En el proyecto usamos https://petgram-server.midudev.now.sh/graphql aquí debes colocar el tuyo
})

ReactDOM.render(
        <ApolloProvider client={client}>
                <App />
        ApolloProvider>,
        document.getElementById('app')
)
```
