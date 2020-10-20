# API-TypeScript

To be able to run the project the first thing you need to do is download the libraries that were used, to download these libraries execute the following command:

### `npm install`

then you need to install postman to see the results of our requests, link to download postman:<br />
[https://www.postman.com/](https://www.postman.com/).<br />
in the project there is a folder called `postman` and inside there is a file to open it with the postman application.

then you have to install mongodb for the database<br />
[https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).

then in the folder `src` you will have to create a file with the name `.env` and inside the file you put an environment variable with the following name `TOKEN_SECRET = ` followed by the secret key you want to put

To execute the project.<br />
you need to execute the following command:

### `npm run dev`

in a second terminal you will run the database, execute the command:

### `mongod`

finally, after executing the two commands, a `dist` folder will be created for you to upload to a cloud server
