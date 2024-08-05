import express from "express";
import mongoose from 'mongoose';

// This will help us connect to the database
import "../db/connection.js";
import {User, Post} from "../db/objects.js";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This sends all posts to the home page.
router.get("/", async (req, res) => {
  Post.find({}).then(function(results){res.send(results).status(200);});
});

//This sends the user info to the blog page
router.get("/:username", async (req, res) => {
  User.findOne(req.params.username).then(function(result){
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });
  
});

//This sends the user info to the blog page
router.get("/:username/posts", async (req, res) => {
  Post.find(req.params.username).then(function(results){
    if (!results) res.send("Not found").status(404);
    else res.send(results).status(200);
  });
  
});

router.post("/login", async (req, res) => {

});




export default router;