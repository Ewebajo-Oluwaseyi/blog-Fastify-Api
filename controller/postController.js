const boom = require('boom');
const Post = require('../model/Post');

//get all post
exports.getAllPost = async (req, res) => {
    try {
        const posts = await Post.find();
        return posts
    } catch (err) {
        throw boom.boomify(err)
    }
}

//get a post
exports.getPost = async (req, res) => {
    try {
        const id = req.params.id
        const post = await Post.findById(id);
        return post
    } catch (err) {
        throw boom.boomify(err)
    }
}

//add a post
exports.addPost = async (req, res) => {
    try {
        const post = new Post(req.body)
        const newPost = await post.save()
        return newPost
    } catch (err) {
        throw boom.boomify(err)
    }
}

//add a post
exports.addPost = async (req, res) => {
    try {
        const post = new Post(req.body)
        const newPost = await post.save()
        return newPost
    } catch (err) {
        throw boom.boomify(err)
    }
}

//update a post
exports.updatePost = async (req, res) => {
    try {
        const id = req.params.id
        const post = await Post.findByIdAndUpdate(id, req.body, {new: true})
        return post
    } catch (err) {
        throw boom.boomify(err)
    }
}

//delete a post
exports.deletePost = async (req, res) => {
    try {
        const id = req.params.id
        const post = await Post.findByIdAndDelete(id)
        return {Message: "post deleted"}
    } catch (err) {
        throw boom.boomify(err)
    }
}