//import secrets
import { MONGODB_LOGIN } from "secrets.js";

//import dependencies
import express from "express";
import cors from "cors";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

//constants
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
//connect to database
mongoose.connect(MONGODB_LOGIN);

//changed; ReactDOM.render is depreciated
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// start the Express server
app.listen(PORT, () => {
  console.log('Server listening on port ${PORT}');
});