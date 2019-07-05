 /**
 * @author TOMAS
 * @file posts.controller.js
 */
let Post = require("../models/Post.model");
const jwt = require('jsonwebtoken');
const config = require('config');


// Handle index actions
exports.index = async (req, res) => {
  const token = req.header('x-auth-token');
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
  const creatorId = decoded._id; 

  let posts = await Post.find()
                              .populate('creatorId', 'name')
                              .where('creatorId').equals(creatorId)
                              ;
    res.json({
      status: "success",
      message: "posts retrieved successfully",
      data: posts
    });

};

// Handle view post info
exports.view = function(req, res) {
  Post.findById(req.params.request_id, function(err, post) {
    if (err) res.json({
      message: err.message,
      status: 'fail'
    });
    res.json({
      status: 'success',
      data: post
    });
  });
};


// Handle create post actions
exports.new = function(req, res) {
  // TODO:
  const token = req.header('x-auth-token');
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
  const creatorId = decoded._id;

  var post = new Post();
  post.title = req.body.title;
  post.description = req.body.description;
  post.content = req.body.content;
  post.creatorId = creatorId;


  // save the post and check for errors
  post.save(function(err) {
    if (err) res.json({
      message: err.message,
      status: 'fail'
    });
    res.json({
      status: 'success',
      data: post
    });
  });
};


// Handle update post info
exports.update = function(req, res) {
  Post.findById(req.params.request_id, function(err, post) {
    if (err) res.send(err);
    post.title = req.body.title || post.title;
    post.description = req.body.description || post.description;
    post.content = req.body.content || post.content;
    // save the post and check for errors
    post.save(function(err) {
      if (err) res.json({
        message: err.message,
        status: 'fail'
      });
      res.json({
        status: 'success',
        data: post
      });
    });
  });
};



exports.cancel = function(req, res) {
  Post.findById(req.params.request_id, function(err, post) {
    if (err) res.json({
      message: err.message,
      status: 'fail'
    });
    post.status = "cancelled";
    post.reject_reason = req.body.reject_reason;

    // save the post and check for errors
    post.save(function(err) {
      if (err) res.json({
        message: err.message,
        status: 'fail'
      });
      res.json({
        status: 'success',
        data: post
      });
    });
  });
};



// Handle delete post
exports.delete = function(req, res) {
  Post.remove({_id: req.params.request_id}, function(err, post) {
      if (err) res.json({
        message: err.message,
        status: 'fail'
      });
      res.json({
        status: "success",
        message: "Post deleted"
      });
    }
  );
};



// Handle change post info
exports.change = function(req, res) {
  Post.findById(req.params.request_id, function(err, post) {
    if (err) res.json({
      message: err.message,
      status: 'fail'
    });

    post.title = req.body.title || post.title;
    post.description = req.body.description || post.description;

    // save the post and check for errors
    post.save(function(err) {
      if (err) res.json({
        message: err.message,
        status: 'fail'
      });
      res.json({
        status: 'success',
        data: post
      });
    });
  });
};
