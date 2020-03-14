import {
    USER_INFO,
    ADD_COUNTER,
    ADD_TO_CART
  } from "./mutation-types";

  export default {
  syncUserInfo({commit},userInfo) {
      commit(USER_INFO, {userInfo})
  },
  addCart(context,payload) {
    return new Promise((resolve,reject) => {
      //find方法只返回第一个满足条件的元素
    let oldProduct = context.state.cartList.find(item => item.id === payload.id)

    if(oldProduct) {
        // oldProduct.count += 1
        context.commit(ADD_COUNTER,oldProduct)
        resolve('商品数量+1')
    }else {
        payload.count = 1
        // state.cartList.push(payload)
        context.commit(ADD_TO_CART,payload)
        resolve('添加新商品')
    }
    })
}
}