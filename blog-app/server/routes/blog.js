import express from "express";
import mongoose from 'mongoose';

// This will help us connect to the database
import "../db/connection.js";
import {User, Post, Blog} from "../db/objects.js";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This sends all posts to the home page.
router.get("/", async (req, res) => {
  Post.find({}).then(function(results){res.send(results).status(200);});
});


export default router;