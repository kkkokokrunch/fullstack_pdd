import { request } from "./request";

export function getCheckCode(phone) {
    return request({
        url: "/users/sendcode",
        params: { phone }
    });
}

//手机登录验证
export function codeLogin(phone,code) {
    return request({
        url: '/users/login',
        method: 'post',
        data: {
            phone,
            code
        },
    })
}

// export function getUserInfo() {
//     return request({
//         url:"/users/user_info"
//     })
// }