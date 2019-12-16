Line Cafe CMS Web application

Requirement:
 - install Backend Line Cafe Project before run this repository.
   - Backend Repo https://github.com/superpitch-san/line-cafe-api-backend
 - install node, docker, docker-compose on your machine before run this repository.

Installation Project:
 - pull project on your machine.
 - copy ENV variables, credentials from my text attach file to docker-compose.yml in environment section and save file.
 - open terminal and cd path of project.
 - run command ' docker-compose up -d ' and waiting about 3 - 5 mins for build and run project in first time.  (you can check docker logs by command 'docker logs [IMAGE ID]' )
 - open https://localhost:3000 on your browser (Google Chrome, Firefox because support Firebase SDK)
 - allow notification for incomming order (will display notification when not focus page)
 - when you upload image file for create product, 
   recommend file size not over 50kb. because file save at base64 type in DB, I choose save in DB because I have no free cloud storage for upload it.

   if have any problem or question, Can contact me at supapitch.sangmanee@gmail.com

Step to use:
 - Add one or many products
 - in LIFF application, customer choose menu
 - CMS receive incomming order and display new order
 - serve to customer and message will push to customer

 - Answers Section:
   - Question 3:
   - Frontend:
I choose ReactJS framework because ReactJS is a client side rendering, faster, no need to refresh page for fetch new data because ReactJS have a Life cycle Method for handle properties, update props, rerender web page, I choose Firebase Cloud Messenging because free service to use, simple to setup service for integration to my application.
 - Backend:
I choose nodeJS runtime and expressJS framework because expressJS flexible, simple create API method for mini project, it slim and fast for GET, POST request and return response, I choose postgresQL because postgresQL easy to setup and use it, has many data types to use, match to use with expressJS.
I choose docker for deployment because docker will build and run virtual machine as a service, i can create local DB, local server in one time.

   - Quesion 4:
When I know about requirement, I will analy system flow, draw architecture of system from frontend to backend, draw work flow, list of specs, stack, in backend, frontend, deployment or any service can integration with system and high usability, research tools, library study case or article for choose to use in project. planning tasks of work depend on frontend, backend and deployment. development and testing application.
In this system can be add additional features for managing message in client, add more Cafe type or Shop type.