const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')
const sms_util = require('../util/sms_util')
router.prefix('/users')
let users = {}

router.get('/sendcode',async function(ctx,next) {
  let phone = ctx.query.phone
  let code = sms_util.randomCode(6)

  console.log(code)
  users[phone] = code
  ctx.body = {
    num:users[phone]
  }
})

//手机验证码登录
router.post('/login',async function(ctx,next) {
    const phone = ctx.request.body.phone
    const code = ctx.request.body.code

    ctx.body = {
        phone,
        code
    }
    if(users[phone] !== code) {
        ctx.body = {message:'验证码错误1'}
        return
    }
    delete users[phone]
    await userService.searchUser(phone).then(async (res)=> {
        ctx.body = res
        res = JSON.parse(JSON.stringify(res))
        if(res[0]) { //用户存在
            ctx.session.userId = res[0].id
            console.log(res[0].id)
            ctx.body = {
                success_code:200,
                message: {
                    id:res[0].id,
                    user_name:res[0].user_name,
                    user_phone:res[0].user_phone
                }
            } 
        }
        else {//新用户
            await userService.insertUser([phone,phone]).then(async (res)=> {
                res = JSON.parse(JSON.stringify(res))
                // ctx.body = res.insertId
                // console.log(res.insertId)
                ctx.session.userId = res.insertId
                // console.log(ctx.session.userId)
                await userService.searchNewUser(res.insertId).then(async (res)=> {
                    res = JSON.parse(JSON.stringify(res))
                    ctx.body = {
                        success_code:200,
                        message: {
                            id:res[0].id,
                            user_name:res[0].user_name,
                            user_phone:res[0].user_phone
                        }
                    }
                })
            })
        }
        
    })
    

})

// router.get('/user_info',async(ctx,next) => {
//     let userId = ctx.session.userId
//     await userService.searchSessionUser(userId).then(async (res)=> {
        
     
//             res = JSON.parse(JSON.stringify(res))
//             if(!res[0]) {
//                 delete ctx.session.userId
//                 ctx.body = {
//                     err_code:1,
//                     message:'请先登录'
//                 }
//             }else {
//                 console.log(res)
//                 ctx.body = {
//                     success_code:200,
//                     message: {
//                         id:res[0].id,
//                         user_name:res[0].user_name,
//                         user_phone:res[0].user_phone
//                     }
//                 }
//             }
//     })
//   })
module.exports = router
