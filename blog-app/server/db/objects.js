import mongoose from 'mongoose';
const { Schema } = mongoose;

//user object
const userSchema = new Schema({
    username: String,
    password: String,
    fName: String,
    lName: String
});

export const User = mongoose.model('User', userSchema);

//post object
const postSchema = new Schema({
    title: String,
    author: String,
    body: String,
    date: { type: Date, default: Date.now },
    tags: [{type: String, lowercase: true}]
});

export const Post = mongoose.model('Post', postSchema);

//blog object
const blogSchema = new Schema({
    blogTitle: String,
    blogDescription: String,
    blogAuthor: { type: userSchema, default: {} }
});
  
export const Blog = mongoose.model('Blog', blogSchema);



//exports
export default {User, Post, Blog};