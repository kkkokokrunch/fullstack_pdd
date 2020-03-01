const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/search')

router.get('/', function (ctx, next) {
    const data = require('../data/searchList.json')
    ctx.body = {data}
})
module.exports = router