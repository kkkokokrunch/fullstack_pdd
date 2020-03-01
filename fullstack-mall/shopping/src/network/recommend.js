import { request } from "./request";

export function getRecommenddata(page) {
    return request({
        url: "/recommend/list",
        params: { page }
    });
}
// export function getRecommend2data() {
//     return request({
//         url: "/recommendList2.json"
//     });
// }