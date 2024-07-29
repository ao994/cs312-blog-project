import mongoose from 'mongoose';
const { Schema } = mongoose;


//Test Records object
const recordSchema = new Schema({
    name: String,
    position: String,
    level: String
});

const Record = mongoose.model('Record', recordSchema);

//user object
const userSchema = new Schema({
    username: String,
    password: String,
    fName: String,
    lName: String
});

const User = mongoose.model('User', userSchema);

//post object
const postSchema = new Schema({
  title: String,
  author: { type: userSchema, default: {} },
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean
});

const Post = mongoose.model('Post', postSchema);

//blog object
const blogSchema = new Schema({
    blogTitle: String,
    blogDescription: String,
    blogAuthor: { type: userSchema, default: {} }
});
  
const Blog = mongoose.model('Blog', blogSchema);





//exports
export {Record, User, Post, Blog};