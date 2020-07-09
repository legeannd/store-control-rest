<h1>Store Control</h1>

![](uploads/banner.gif)

![stacks](https://img.shields.io/badge/Django-v3.0.8-brightgreen) ![stacks](https://img.shields.io/badge/djangorestframework-v3.11.0-brightgreen) ![stacks](https://img.shields.io/badge/ReactJS-v16.13.1-brightgreen) ![stacks](https://img.shields.io/badge/Stack-Python-blue) ![stacks](https://img.shields.io/badge/Stack-Typescript-blue) ![GitHub](https://img.shields.io/github/license/legeannd/store-control)


Store control é um serviço web simples de cadastro de produto e cadastro de usuários que possam acessar o sistema, através de uma api que cuida dos cadastros. Backend feito utilizando a framework Django, e frontend feito utilizando a framework React. 

## Como instalar
Para instalar o projeto, você irá precisar ter o Python 3, Virtualenv, pip, e NPM ou Yarn instalados para baixar as dependências. Clone os arquivos do projeto e execute os comandos abaixo.
Para configurar o banco de dados, vá no arquivo `storecontrolapp\storecontrolapp\settings.py` e altere as configurações do banco de dados no objeto `DATABASES`. O projeto foi criado utilizando um banco de dados postgres.

---

### Instalação - Back-end(Server e API)
Dentro da pasta `store-control`

#### Windows
```bash
pip install -r requirements.txt
Scripts/activate
cd .\storecontrolapp\
python manage.py runserver 8080
```

#### Linux
```bash
$ pip install -r requirements.txt
$ /bin/activate
$ cd .\storecontrolapp\
$ python manage.py runserver 8080
```
---

### Instalação - Front-end(Web)
Dentro da pasta `store-control`

#### NPM
```bash
cd frontend
npm install
npm start
```

#### Yarn
```bash
cd web
yarn install
yarn start
```

Quando terminar, a página da aplicação web será aberta no navegador.

---
###### Developed by [Gean Lucas](https://www.linkedin.com/in/geanlucaas/) :rocket:.