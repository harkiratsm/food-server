![food-server](https://socialify.git.ci/harkiratsm/food-server/image?description=1&language=1&name=1&owner=1&pattern=Brick%20Wall&theme=Light)
<p align="center">
  <img src="https://img.shields.io/github/license/harkiratsm/food-server" />
  <img src="https://img.shields.io/badge/Author-harkiratsm-orange" />
  <a href="https://hub.docker.com/repository/docker/harkiratsm/food-server">
    <img src="https://img.shields.io/docker/pulls/harkiratsm/food-server.svg" />
  </a>
  <a href="https://github.com/harkiratsm/food-server/blob/main/LEARNING.md">
    <img src="https://img.shields.io/badge/-Learning.md-brightgreen"/>
  </a>
  <a href="https://github.com/harkiratsm/food-server/blob/main/Faq.md">
    <img src="https://img.shields.io/badge/-FAQ.md-blue">
  </a>
  
</p>
  

## 💥 Introduction

I have developed a REST API that I am going to serve for frontend i.e. food-client. At the moment, this API can handle restaurant, order, and image requests.

I built a REST API with Express.js, using MongoDB as a database to store the data, containerized my Nodejs app with Docker, and also used Nginx to load balance API requests.


### Table of Contents

- [Tech Stack](#tech-stack)
- [Installation Steps](#install-step)
- [Built With](#built-with)
- [Requirements](#requires)



<a id="tech-stack"></a>

## ⚙️ Tech Stack

The technologies I used to built this app.

- Nodejs
- Expressjs

<a id="install-step"></a>

## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/harkiratsm/food-server.git
```

2. Change the working directory

```bash
cd food-server
```
3. For Development Environment 
  - Install dependencies

  ```bash
  make server-setup
  ```
  - Make sure you set all the environment variables under ```.env``` file.

  - Run the docker-compose file 

  ```bash
  make docker-compose_dev
  ``` 

4. For Production [here](https://github.com/harkiratsm/food-server/blob/main/LEARNING.md#prod).

🚀 You are all set to go.

<a id="built-with"></a>

## 💻 Built With

1. Expressjs - Rest API
2. MongoDB - Database
3. Nodejs
4. Docker 
5. Nginx - Load balancing api calls

<a id="requires"></a>

## 🙋🏻‍♂️ Requirements 

1. Docker Desktop
2. Nodejs 
3. MongoDB
4. Postman - For testing api endpoints 

## 📖 [License](https://github.com/harkiratsm/food-server/blob/main/License)
