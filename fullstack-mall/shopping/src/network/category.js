import { request } from "./request";

export function getSearchdata() {
    return request({
        url:"/search"
    });
}