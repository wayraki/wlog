const { findAll, findById } = require('../models/post')

const login = async (ctx, next) => {
    await ctx.render('admin/login')
}

const index = async (ctx, next) => {
    let data = await findAll()
    await ctx.render('admin/index', { data })
}

const getPost = async (ctx, next) => {
    let state, id, data;
    if (!Number(ctx.params.id)) {
        state = 'add'
        id = 0
        data = [{ title: '', content: '' }]
    } else {
        state = 'edit'
        id = ctx.params.id
        data = await findById(ctx.params.id)
    }
    await ctx.render('admin/post', { state, id, data })
}

module.exports = { login, index, getPost }
