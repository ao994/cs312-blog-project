import mongoose from 'mongoose';
const { Schema } = mongoose;

//user object
const userSchema = new Schema({
    username: {type: String, unique: true},
    password: String,
    fName: String,
    lName: String,
    blogTitle: String,
    blogDescription: String
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


//exports
export default {User, Post};