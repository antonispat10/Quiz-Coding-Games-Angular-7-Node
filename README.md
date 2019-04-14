 ## Quiz Coding Games built in with Angular 7 & Node.js (First Version)

Create your quizzes by uploading a file in json format with the questions, choices and answers (relative picture below).

Create a UNIQUE quiz link for every candidate and allow the candidate to play it only one time.

Search the results of each candidate and for every quiz that he/she played.

 ## Technical Environment

Angular 7 with Angular Material,FlexLayout for a responsive design and
use of Interceptor for handling errors from the Backend.

Localstorage to store temporarily the answer of each question and then send the score to the backend.

Use of services, lazy loading modules.

JWT token for the Login of the admin user.

Node.js (Express.js), 

MongoDB

Setup Instructions at the bottom of the page.


![alt text](https://raw.githubusercontent.com/antonispat10/Quiz-Coding-Games-Angular-7-Node/master/server/public/images/home.jpg) 
![alt text](https://raw.githubusercontent.com/antonispat10/Quiz-Coding-Games-Angular-7-Node/master/server/public/images/create-category.jpg)
The json file should be at this format

![alt text](https://raw.githubusercontent.com/antonispat10/Quiz-Coding-Games-Angular-7-Node/master/server/public/images/json-format.jpg)

Create a link for a specific Quiz 

![alt text](https://raw.githubusercontent.com/antonispat10/Quiz-Coding-Games-Angular-7-Node/master/server/public/images/create-link-candidate.jpg)
![alt text](https://raw.githubusercontent.com/antonispat10/Quiz-Coding-Games-Angular-7-Node/master/server/public/images/quiz1.jpg)
Show an alert if the candidate already played the quiz

![alt text](https://raw.githubusercontent.com/antonispat10/Quiz-Coding-Games-Angular-7-Node/master/server/public/images/quiz-already-played.jpg) 
![alt text](https://raw.githubusercontent.com/antonispat10/Quiz-Coding-Games-Angular-7-Node/master/server/public/images/quiz2.jpg)
![alt text](https://raw.githubusercontent.com/antonispat10/Quiz-Coding-Games-Angular-7-Node/master/server/public/images/quiz3.jpg)
Searching results for a candidate 

![alt text](https://raw.githubusercontent.com/antonispat10/Quiz-Coding-Games-Angular-7-Node/master/server/public/images/search-results.jpg) 
![alt text](https://raw.githubusercontent.com/antonispat10/Quiz-Coding-Games-Angular-7-Node/master/server/public/images/candidate-results.jpg) 


 ## Project setup
 FRONT-END Angular 7
```
cd front
npm install
ng serve
```
BACK-END Node.js

The database is a dummy MongoDB database which you should replace with a new one in the app.js file in the server folder
and in the seed folder to load the seed.
```
cd server
npm install
npm start
```
Loading admin seed in the backend with
username: admin@admin.com, password: admin for the admin user

```
cd seed
node index.js
```
If you don't change the db, you could use the existing one, in which
there is a JS Quiz imported and an admin user with username: admin@admin.com and password: admin

