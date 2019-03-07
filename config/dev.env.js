'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 测试服
  API_ROOT: '"http://192.168.2.237:9000/profit"',
  // 开发服
  //API_ROOT: '"http://192.168.2.246:9000/profit"'
  // 董强本地地址
  // API_ROOT: '"http://192.168.3.185:9000/profit"',
})
