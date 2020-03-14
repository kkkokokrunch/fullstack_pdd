var mysql = require('mysql');
var config = require('./defaultConfig');
    //创建线程池
    var pool = mysql.createPool({
        host: config.database.HOST,
        user: config.database.USERNAME,
        password: config.database.PASSWORD,
        database: config.database.DATABASE,
        port: config.database.PORT
    });

    //统一连接数据库的方法
    let allServices = {
        query: function (sql,values) {

            return new Promise((resolve, reject) => {
                pool.getConnection(function (err, connection) {
                    if (err) {
                        reject(err)
                    } else {                  
                        connection.query(sql,values, (err, rows) => {

                            if (err) {
                                reject(err)
                            } else {      
                                resolve(rows);
                            }
                            connection.release()
                        })
                    }
                })
            })

        }   
    }

        //首页轮播图
        let getSwiper = function(){
            let _sql = `select * from shopping_swiper;`
            return allServices.query(_sql);
        }

        //首页hotnav
        let getHotnav = function() {
            let _sql = `select * from shopping_hotnav;`
            return allServices.query(_sql);
        }
        //首页goods,将数据批量导入到数据库
        // const goodsArr = require('../data/goods.json').data
        // let getGoods = function() {
        //     let temp_arr_all = []
        //     for(let i = 0;i < goodsArr.length;i++) {
        //         let oldItem = goodsArr[i];
        //         let temp_arr=[]
        //         temp_arr.push(oldItem.hd_thumb_url)
        //         temp_arr.push(oldItem.goods_name)
        //         temp_arr.push(oldItem.mall_name)
        //         temp_arr.push(oldItem.group.price)
        //         temp_arr.push(oldItem.sales_tip)
        //         temp_arr.push(oldItem.avatar)

        //         temp_arr_all.push(temp_arr)
        //     }
        //     let _sql = 'INSERT INTO shopping_goods(`hd_thumb_url`,`goods_name`,`mall_name`,`price`,`sales_tip`,`avatar`) VALUES ?'
        //     return allServices.query(_sql, [temp_arr_all])
        // }

        //推荐页数据批量导入数据库
        const recommendsArr = require('../data/recommendList2.json')
        let insertRecommends = function() {
            let temp_arr_all = []
            for(let i = 0;i < recommendsArr.length;i++) {
                let oldItem = recommendsArr[i];
                let temp_arr=[]
                // temp_arr.push(oldItem.goods_id)
                temp_arr.push(oldItem.short_name)
                temp_arr.push(oldItem.thumb_url)
                temp_arr.push(oldItem.price)
                temp_arr.push(oldItem.sales_tip)

                temp_arr_all.push(temp_arr)
            }
            let _sql = 'INSERT INTO shopping_recommends(`short_name`,`thumb_url`,`price`,`sales_tip`) VALUES ?'
            return allServices.query(_sql, [temp_arr_all])
        }

        //推荐页数据分页
        let getRecommends = function(pageNo,pageSize){
            let _sql = 'SELECT * FROM shopping_recommends LIMIT '+ (pageNo-1) * pageSize +','+pageSize
            return allServices.query(_sql);
        }

        //用户注册test
        // let insertUser = function (value){
        //     let _sql = `insert into user set name=?,password=?;`
        //     return allServices.query(_sql,value);
        // }

        //查找用户
        let searchUser = function(phone) {
            let _sql = 'SELECT * FROM shopping_user WHERE user_phone = '+ phone +' LIMIT 1'
            return allServices.query(_sql,phone);
        }

        //插入新用户
        let insertUser = function(value) {
            let _sql = `insert into shopping_user set user_name=?,user_phone=?;`
            return allServices.query(_sql,value);
        }

        //查找新用户
        let searchNewUser = function(id) {
            let _sql = 'SELECT * FROM shopping_user WHERE id = '+ id +' LIMIT 1'
            return allServices.query(_sql,id);
        }
        
        let searchSessionUser = function(id) {
            let _sql = 'SELECT * FROM shopping_user WHERE id = "'+ id +'" LIMIT 1'
            return allServices.query(_sql,id);
        }
        module.exports = {
            getSwiper,
            getHotnav,
            insertRecommends,
            getRecommends,
            searchUser,
            insertUser,
            searchNewUser,
            searchSessionUser
        }