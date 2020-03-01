router.post('/userRegister', async(ctx, next) =>{    
    await userService.findUser(user.username).then(async (res)=>{
        if(res.length){
            try {
                throw Error("用户名已存在");
            } catch (error) {
                console.log(error)
            }
            ctx.body = {
                code:"800003",
                data: "err",
                mess:"用户名已存在"
            }   
        }else{
        await userService.insertUser
        ([user.username,user.userpwd,user.nickname])
        .then((res) => {
                console.log(res);
                let r = '';
                if (res.affectedRows != 0) {
                    r = 'ok';
                    ctx.body = {
                        code:"800000",
                        data: r,
                        mess:"注册成功"
                    }   
                }else{
                    r = 'error';
                    ctx.body = {
                        code:"800004",
                        data: r,
                        mess:"注册失败"
                    }  
                }

            })
        }
    })
})