<br />
<p align="center">
  <div align="center">
  <img src="https://cdn.discordapp.com/attachments/1103167854657929345/1149392352457269298/removebg-preview.png" widht="200" height="200" />
  </div>
  <h3 align="center">Mama Recipe</h3>
  <p align="center">
    <a href="https://github.com/YuSetiawan/foodRecipe-server"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://food-recipe-server-six.vercel.app/">Api Demo</a>
  </p>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Installation](#installation)
  - [Documentation](#documentation)
  - [Related Project](#related-project)
- [Contributors](#contributors)
  - [Meet The Team Members](#meet-the-team-members)

# About The Project

Mama Recipe is a culinary platform that allows users to explore and share their favorite food recipes. 
Users can sign up as food enthusiasts and/or recipe creators. 
The platform offers a range of features tailored to both groups. This web application is built using ReactJS, ExpressJS, and PostgreSQL.

## Built With

These are the libraries and service used for building this backend API

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [PostgreSQL](https://www.postgresql.org)
- [Json Web Token](https://jwt.io)
- [Multer](https://github.com/expressjs/multer)

# Installation

1. Clone this repository

```sh
git clone https://github.com/YuSetiawan/foodRecipe-server
```

2. Change directory to markisak-be

```sh
cd foodRecipe-server
```

3. Install all of the required modules

```sh
npm install
```

4. Create PostgreSQL database, query are provided in [query.sql](./query.sql)

5. Create and configure `.env` file in the root directory, example credentials are provided in [.env.example](./.env.example)

```txt
- Please note that this server requires Google Drive API credentials and Gmail service account
- Otherwise API endpoint with image upload and account register won't work properly
```

6. Run this command to run the server

```sh
npm run server
```

- Or run this command for running in development environment

```sh
npm run dev
```

- Run this command for debugging and finding errors

```sh
npm run lint
```

## Documentation

Documentation files are provided in the [docs](./docs) folder

- [Postman API colletion]()
- [PostgreSQL database query](./query.sql)

API endpoint list are also available as published postman documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/22647943/2s9YC8xXLC)

## Related Project

:rocket: [`Backend Food Recipe Mobile App`](https://github.com/YuSetiawan/foodRecipe-server)

:rocket: [`API Demo`](https://food-recipe-server-six.vercel.app/)

Project link : [Food Recipe Server](https://github.com/YuSetiawan/foodRecipe-server)
