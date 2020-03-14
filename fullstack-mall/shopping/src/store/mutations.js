import {
    USER_INFO,
    ADD_COUNTER,
    ADD_TO_CART,
    CLEAR_CART_LIST
} from './mutation-types'
import { Toast } from "vant";
export default {
    [USER_INFO](state, {userInfo}) {
        state.userInfo = userInfo
    },
    [ADD_COUNTER](state,payload) {
        payload.count++
        Toast({
          type: "success",
          message: `当前商品数量为${result.count}`,
          // 弹框的时候禁止点击
          forbidClick: true,
          duration: 1500
        });
      },
      [ADD_TO_CART](state,payload) {
        state.cartList.push(payload)
        Toast({
          type: "success",
          message: `加入购物车成功`,
          // 弹框的时候禁止点击
          forbidClick: true,
          duration: 1500
        });
      },
  // 清空购物车
  [CLEAR_CART_LIST](state) {
    // 判断选中哪些数据,过滤没选中的数组返回一个新数组即可
    let result = state.cartList.filter(item => item.checked !== true);
    if (result.length === 0) {
      localStorage.removeItem("cartList");
      state.cartList = [];
    } else {
      state.cartList = result;
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    }
  },
}