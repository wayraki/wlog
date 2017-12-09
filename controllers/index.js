const { findAll, findById } = require('../models/post')

const index = async (ctx, next) => {
    let data = await findAll();
    await ctx.render('index/index', {
        data: data
    })
}

const getPostList = async (ctx, next) => {
    let title = await addPost();
}

const getPost = async (ctx, next) => {
    let data = await findById(ctx.params.id)
    if (data && Object.prototype.toString.call(data) == '[object Array]') {
        await ctx.render('index/post', { data })
    }
}

module.exports = { index, getPostList, getPost }
