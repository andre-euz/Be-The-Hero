<p align="center">
  <img src="./frontend/src/assets/logo.svg" width="250"/>
</p>  

## Be-The-Hero
O Be The Hero é uma aplicação que visa facilitar a vida de ONGs que necessitam de auxilio para realizar ações, e também facilita a forma como as pessoas podem fazer boas ações.

A aplicação consiste em uma página web onde é possível a ONG realizar um cadastro, e armazenar seus casos com uma breve descrição e os respectivos valores, em busca de um herói para salvar o dia!

Além disto, conta com um aplicativo mobile com versões tanto para o sistema Android quanto IOS, onde as pessoas poderão escolher casos que desejam ajudar, e entrar em contato com a ONG responsável via WhatsApp ou E-mail para ajudar.

## Capturas do projeto
<div align="center">
  <h3> Mobile </h3>
 </div>
<p align="center">  
  <img src="./ScreenShots App/Mobile Load screen.PNG" width="250">
  <img src="./ScreenShots App/Mobile Cases.PNG" width="250">
  <img src="./ScreenShots App/Mobile Details.PNG" width="250">
  <img src="./ScreenShots App/Mobile-Gif.gif" width="250">
</p>  
<div align="center">
  <h3> Web </h3>
 </div>
<p align="center">  
  <img src="./ScreenShots App/Web Logon.png" width="400">
  <img src="./ScreenShots App/Web Cases.png" width="400">
  <img src="./ScreenShots App/Web New Incidents.png" width="400">
</p>  
 
## Tecnologias

Neste projeto, utlizamos as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [React-icons](https://react-icons.netlify.com/)
- [Expo](https://expo.io/)
- [Axios](https://github.com/axios/axios)
- [VS Code](https://code.visualstudio.com/)


## Rodando a aplicação

### Pré-requisitos

Para rodar o app, você precisará dos seguintes programas:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/) v13.7.0 ou maior

### Backend

Primeiramente, fazer o clone do repositório e iniciar o backend.

```bash
# para clonar o repositório
git clone https://github.com/andre-euz/Be-The-Hero.git

# vá para a pasta backend
cd Be-The-Hero/backend

# Iniciando o backend
npm start
```

### Frontend

```bash
# em uma nova aba do terminal, inicie o frontend
cd frontend
npm start
```

### Mobile

A aplicação foi desenolvida utilizando o Expo, que é uma ferramenta gratuita/open source que serve para facilitar o processo de rodar/testar as aplicações desenvolvidas em React Native. [Clique aqui](https://expo.io/learn) para saber mais sobre o Expo.


Para executar o aplicativo no seu dispositivo, você precisa alterar a configuração do ip.

[api.js](https://github.com/andre-euz/Be-The-Hero/blob/master/mobile/src/services/api.js)
```javascript
  baseURL: 'http://192.168.0.10:3333',
```
Substitua 192.168.0.10 com o IP da sua máquina.

Com tudo funcionando, rode a aplicação.

```bash

# para rodar o app, abra um novo terminal, navegando até a pasta mobile da aplicação, e execute 
npm start
```
Expo será aberto no seu navegador, agora bastar escanear o QRcode da página com a câmera do celular, e esperar o app carregá-la.

> A aplicação foi desenvolvida e testada em um iPhone 7, iOS 13.3.1

Feito com :coffee: e :heart: por André R. Euzébio
