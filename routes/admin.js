const router = require('koa-router')()
const { login, index, getPost } = require('../controllers/admin')

router.prefix('/admin')

router.get('/', index)
router.get('/login', login)
router.get('/post/:id', getPost)

module.exports = router
