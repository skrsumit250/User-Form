# Form Project

**This project is a web application built with Node.js, React, and MongoDB that allows users to submit data and audio files through a form. The submitted data is stored in a MongoDB database and can be viewed in a table format.**

## Running the application
1. Clone the project repository.
2. Install dependencies: `npm install` in client folder
3. Update connection string (URI) to connect MongoDB database 
4. Start the server: `node server.js` or `npm start`
5. Start the client-side application (assuming create-react-app): `npm start`

## Project Structure
The project is divided into two primary parts:


### Server-side (`server.js`)
Written in Node.js and utilizes Express framework for handling requests and responses.

#### Technologies:
- Node.js
- Express framework
- Mongoose for MongoDB interaction

#### Dependencies:
- cors
- express
- mongoose

#### Database Connection:
Connects to a MongoDB database using a defined connection string (URI).

#### Routes:
  - `/:` Handles form submissions using a POST request. Expects the following data in the request body:
  - doctor (string)
  - patient (string)
  - age (string)
  - date (string)
  - audio (buffer)
  - Saves the submitted data to the MongoDB database and sends a response back to the client.

### Client-side (`App.js`)
Built with React to manage the user interface and interactivity.

#### Technologies:
- React

#### Functions:
- collectData: Handles form submission, collecting data and sending it to the server via a fetch request.
- newForm: Clears the form to allow new submissions.

#### JSX:
Renders the user interface with:
- A form containing input fields for doctor, patient details, date, and audio upload.
- A table to display submitted data, including an audio player for uploaded audio files.
