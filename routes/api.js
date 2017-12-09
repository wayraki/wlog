const router = require('koa-router')()
const { login, addPost, updatePost, deletePost } = require('../controllers/api')

router.prefix('/api')

router.post('/login', login)
router.post('/post', addPost)
router.put('/post', updatePost)
router.del('/post', deletePost)

module.exports = router
