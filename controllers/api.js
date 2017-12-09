const { create, update, destroy } = require('../models/post')

const login = async (ctx, next) => {
    let username = ctx.request.body.username
    let password = ctx.request.body.password
    if (username != 'admin') {
        ctx.body = {
            code: 20001,
            msg: "用户名错误"
        }
    } else if (password != 'a66abb5684c45962d887564f08346e8d') {
        ctx.body = {
            code: 20001,
            msg: "密码错误"
        }
    } else {
        ctx.cookies.set('user', 'a66abb5684c45962d887564f08346e8d', {
            expires: new Date(new Date().getTime() + 1000 * 60 * 30),
            httpOnly: false
        });
        ctx.body = {
            code: 0,
            data: 'done'
        }
    }
}

const addPost = async (ctx, next) => {
    let title = ctx.request.body.title
    let content = ctx.request.body.content
    if (ctx.cookies.get('user') != 'a66abb5684c45962d887564f08346e8d') {
        ctx.body = {
            code: 30001,
            msg: "登录信息失效"
        }
    } else if (!title || !content) {
        ctx.body = {
            code: 20002,
            msg: "参数不完整"
        }
    } else {
        let data = await create([title, content]);
        ctx.body = {
            code: 0,
            data: data
        }
    }
}

const updatePost = async (ctx, next) => {
    let id = ctx.query.id
    let title = ctx.query.title
    let content = ctx.query.content
    if (ctx.cookies.get('user') != 'a66abb5684c45962d887564f08346e8d') {
        ctx.body = {
            code: 30001,
            msg: "登录信息失效"
        }
    } else if (!id || !title || !content) {
        ctx.body = {
            code: 20002,
            msg: "参数不完整1111"
        }
    } else {
        let data = await update([title, content, id]);
        ctx.body = {
            code: 0,
            data: data
        }
    }
}

const deletePost = async (ctx, next) => {
    let id = ctx.query.id
    if (ctx.cookies.get('user') != 'a66abb5684c45962d887564f08346e8d') {
        ctx.body = {
            code: 30001,
            msg: "登录信息失效"
        }
    } else if (!id) {
        ctx.body = {
            code: 20002,
            msg: "参数不完整"
        }
    } else {
        let data = await destroy([id]);
        ctx.body = {
            code: 0,
            data: 'done'
        }
    }
}

module.exports = { login, addPost, updatePost, deletePost }
