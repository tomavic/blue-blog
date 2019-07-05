// api-routes.js
// Initialize express router
const router = require('express').Router();
const postController = require('../controllers/posts.controller');
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");


// Post routes
router.get('/', postController.index);
router.get('/:post_id', postController.view);




/**********************
 *      Admin 
 *********************/
router.put('/change/:post_id', [auth, admin], postController.change);
router.put('/:post_id', [auth, admin], postController.update);
router.delete('/:post_id', [auth, admin], postController.delete);
router.post('/', [auth, admin], postController.new);

// Export API routes
module.exports = router;