### FAQ 
#### 💡 Why did I build this?
I built this project since I was experimenting with a new tech stack and was impressed by the results of constructing a real-world project. Additionally, as I am interested in DevOps, I also incorporated some DevOps tools into this project.

#### Question: What is Docker? 
**Answer:** Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package.
You can also checkout my blog on [Docker Simplified](https://community.ops.io/harkiratsm/docker-simplified-4bce).

##### Question: Why do you used docker?
**Answer:** Using Docker can help you ship your code faster, gives you control over your applications. You can deploy applications on containers that make it easier for them to be deployed, scaled, perform rollbacks and identify issues. I am learning about DevOps so whatsoever I am learning I applying those technologies to my project also. 

##### Question: What does my code sample?
**Answer:**  I have developed a REST API that I am going to serve for frontend i.e. food-client. At the moment, this API can handle restaurant, order, and image requests.

I built a REST API with Express.js, using MongoDB as a database to store the data, containerized my Nodejs app with Docker, and also used Nginx to load balance API requests.

My server can currently handle get, post, and delete requests for corresponding restaurant, order, and image requests. In order to load balance the API calls, I used Nginx containers. Additionally, we have Docker Compose files for the development and production environments. Including the MongoDB atlas database, which is what we are currently using, we also have the option to use MongoDB locally, and this is all mentioned in the docker-compose files. Tested the API endpoints using Postman, users could obtain restaurant info and submit order requests.

I built this project since I was experimenting with a new tech stack and was impressed by the results of constructing a real-world project. Additionally, as I am interested in DevOps, I also incorporated some DevOps tools into this project.

I'm also going to add extra functionality, such using Stripe, user authentication.

##### Question: Why to use Nginx ?
**Answer:** Nginx is what I've used to load balance the API calls for this Node.js application.

##### Questions: What about running it in Production?
**Answer:** Want to run your Node.js application in production? I've covered how to achieve it [here](https://github.com/harkiratsm/food-server/blob/main/LEARNING.md#prod).

##### Question: What you have learnt when you created this code sample ?
**Answer:** I was exploring with a new tech stack when I came across express.js, so I chose to use it to create an API. I used MongoDB as the database because it is NoSQL & easy. I also learned how to utilize express.js to create a Schema/Model and routes for specific requests. I gained knowledge of the CORS, middleware, and connecting to your local or MongoDB Atlas database.

I also learned how to utilize Postman & used it to test my API endpoints.

Containers were something new to me, and as I learned more about Docker, I incorporated it into my Node.js application. I gained knowledge of Dockerfile, Docker Compose, running your app in development and production environments, the benefits of using containers, and a thorough understanding of how containers operate. I had an issue where the code was not syncing when I ran my docker-compose file for development, so I used docker volumes to sync my work directory code to the container work directory.

We all know that if our API is being utilized by many people, there would be a high volume of API calls. Therefore, I discovered nginx and used its containers to load balance the API calls.

