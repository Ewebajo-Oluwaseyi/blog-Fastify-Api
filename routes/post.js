const postController = require('../controller/postController');


const routes = [{
        method: 'GET',
        url: '/api/posts',
        handler: postController.getAllPost
    },
    {
        method: 'GET',
        url: '/api/post/:id',
        handler: postController.getPost
    },
    {
        method: 'POST',
        url: '/api/post',
        handler: postController.addPost
    },
    {
        method: 'PUT',
        url: '/api/post/:id',
        handler: postController.updatePost
    },
    {
        method: 'DELETE',
        url: '/api/post/:id',
        handler: postController.deletePost
    }
]


module.exports = routes;