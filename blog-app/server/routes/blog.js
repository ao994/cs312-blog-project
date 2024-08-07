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

//This sends the info to the search page
router.get("/search", async (req, res) => {
  const type = req.query.type;
  const content = req.query.content;
  console.log(req.query);
  if (type == "posts") 
  { 
    Post.find({$or: [{body: { "$regex": content, "$options": "i" }}, {title: { "$regex": content, "$options": "i" }}]}).then(function(results){
      if (!results) res.status(404).send("No posts found");
      else res.send(results).status(200);
    });
  }
  else if (type == "tags")
  {
    Post.find({tags: content}).then(function(results){
      if (!results) res.status(404).send("No tags found");
      else res.send(results).status(200);
    });
  }
  else if (type == "users")
  {
    User.find({$or: [{username: { "$regex": content, "$options": "i" }}, {fName: { "$regex": content, "$options": "i" }}, {lName: { "$regex": content, "$options": "i" }}, {blogTitle: { "$regex": content, "$options": "i" }}, {blogDescription: { "$regex": content, "$options": "i" }},]}).then(function(results){
      if (!results) res.status(404).send("No users found");
      else res.send(results).status(200);
    });
  }
  else 
  {
    res.status(404).send("Nothing found, fatal error")
  }
  
  
});



router.post("/signup", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    fName: req.body.fName,
    lName: req.body.lName,
    blogTitle: req.body.blogTitle,
    blogDescription: req.body.blogDescription
  });

  newUser.save().then(function(result){
    if (!result) {
      console.error(err);
      res.status(500).send(err);
    }
      else res.sendStatus(204);
  });
});

//This sends the user info to the blog page
router.get("/:username", async (req, res) => {
  User.findOne({username: req.params.username}).then(function(result){
    if (!result) res.send("No users  found").status(404);
    else res.send(result).status(200);
  });
  
});

//This sends the user info to the blog page
router.get("/:username/posts", async (req, res) => {
  Post.find({author: req.params.username}).then(function(results){
    if (!results) res.send("No users found").status(404);
    else res.send(results).status(200);
  });
  
});

router.post("/:username", async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
    tags: req.body.tags
  });

  newPost.save().then(function(result){
    if (!result) {
      console.error(err);
      res.status(500).send(err);
    }
      else res.sendStatus(204);
  });
});





export default router;