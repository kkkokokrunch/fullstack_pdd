const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/home')


router.post('/test', async(ctx, next) =>{    
  var _name = ctx.request.body.name;
  var _password = ctx.request.body.password;

  let user ={
      name:_name,
      password:_password
  }
  
  await userService.insertUser([user.name,user.password])
  .then((res) => {
    // console.log(ctx)
    ctx.body = '数据插入成功' 
  })
})


router.get('/swiper',async(ctx,next) => {
  await userService.getSwiper().then((res) => {
    // console.log("打印结果："+JSON.stringify(res));
    ctx.body = res
  })
})
router.get('/hotnav',async(ctx,next) => {
    await userService.getHotnav().then((res) => {
      console.log("打印结果："+JSON.stringify(res));
      ctx.body = res
    })
  })

router.get('/fresher',async(ctx,next) => {
  const fresher = require('../data/fresher.json')
  ctx.body = {fresher}
})

router.get('/goods',async(ctx,next) => {
  const goods = require('../data/goods.json')
  ctx.body = {goods}
})
  // const goodsArr = require('../data/goods.json').data
  // router.get('/goods',async(ctx,next) => {
  //   await userService.getGoods().then((res) => {
      
  //     ctx.body = res
  //   })
  // })
module.exports = router