import { request } from "./request";

// export function insertUser(name,password) {
//     return request({
//         url: '/users/userRegister',
//         method: 'post',
//         data: {
//             name,
//             password
//         },
//     })
// }

export function getBannersdata() {
    return request({
        // url: "/swiper.json"
        url:'/home/swiper'
    });
}

export function getNavdata() {
    return request({
        // url: "/hotNavs.json"
        url:'/home/hotnav'
    });
}

export function getFresherdata() {
    return request({
        // url:"/fresher.json"
        url:"/home/fresher"
    })
}

export function getGoodesdata() {
    return request({
        // url:"/goods.json"
        url:"/home/goods"
    })
}
// export function getHomeGoods(type, page) {
//     return request({
//         url: "/home/data",
//         params: { type, page }
//     });
// }