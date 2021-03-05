### About

This repository contains the code for the REST API which performs some operations on words.

The API has been hosted on Heroku. To directly make API calls to the hosted app use the URL prefix - https://words-api-task.herokuapp.com/

Note : The initial API call might take a longer time to respond because of Heroku's sleep feature.

### Installation instructions

1. Download this repository
2. Now in the root directory run "npm install"
3. Now run "node server.js" and the server will start on your local machine on port 5000

### API Endpoints

1. Method - POST
   - URL - http://localhost:5000/api/words/add
   - Request body - {"wordToAdd" : "anyword"}
   - Content type - JSON
   - Description - Add any word to the collection

2. Method - DELETE
   - URL - http://localhost:5000/api/words/remove
   - Request body - {"wordId" : "word uid from collection"}
   - Content type - JSON
   - Description - Remove any word from the collection

3. Method - GET
   - URL - http://localhost:5000/api/words/appearances/:wordToFind
   - Request body - Nothing
   - Description - Get the number of times a particular word appears in the collection

4. Method - GET
   - URL - http://localhost:5000/api/words/unique
   - Request body - Nothing
   - Description - Get all unique words in the collection
