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