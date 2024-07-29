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

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  Record.findById(req.params.id).then(function(results){
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });
  
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  let newDocument = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  Record.create(newDocument).then(function(result){
    if (!result) {
      console.error(err);
      res.status(500).send("Error adding record");
    }
      else res.send(result).status(204);
  });
  res.send(result).status(204);
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("records");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

export default router;