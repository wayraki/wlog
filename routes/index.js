const router = require('koa-router')()
const { index, getPostList, getPost } = require('../controllers/index')

router.get('/', index)
router.get('/list', getPostList)
router.get('/post/:id', getPost)

module.exports = router
