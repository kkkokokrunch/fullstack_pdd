const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/recommend')

router.get('/',async(ctx,next) => {
    await userService.insertRecommends().then((res) => {})
  })
router.get('/list',async(ctx,next) => {
  let pageNo = ctx.query.page || 1
  let pageSize = ctx.query.count || 20
  await userService.getRecommends(pageNo,pageSize).then((res) => {
    ctx.body = res
  })
})


  module.exports = router