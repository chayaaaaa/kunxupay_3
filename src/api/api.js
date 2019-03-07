import axios from 'axios';
import { Toast } from "mint-ui";
// 基础路径 测试服
// export const BASE_URL = 'http://192.168.2.237:9000/profit';
export const BASE_URL = process.env.API_ROOT;
// 基础路径 正式服
// export const BASE_URL = 'http://119.18.207.45:19000/profit/';
//判断是否需要重新获取token
//  刷新Token
export const getRefreshToken = params => {
    let token = JSON.parse(window.localStorage.getItem('token')).access_token;
    if (token) {
        return axios({
            method: 'POST',
            url: `${BASE_URL}/api/oauth/refreshToken?token=${token}`,
            data: params
        })
            .then(response => {
                window.localStorage.setItem('token', JSON.stringify(response.data.token));
            })
            .catch({
                function(error) {
                    console.log("catch:", error);
                }
            });
    }
}
export const checkToken = params => {
    var checkToken = new Promise(function (resolve) {
        let token = JSON.parse(window.localStorage.getItem('token')).access_token;
        //token是否存在
        if (token) {
            axios({
                method: 'post',
                url: ` ${BASE_URL}/api/oauth/checkToken?token=${token}`,
                data: params
            }).then(function (res) {
                console.log(res.data)
                if (res.code == 200) {
                    window.localStorage.setItem('access_token', JSON.stringify(res.data.data));
                } else if (res.code == 400) {
                    getRefreshToken()
                }
                resolve();
            }).catch(function (error) {
                Toast(error)
            });
        }
    });
};



// 用户名和密码登录
export const pwdLogin = params => {
    return axios({
        method: 'POST',
        url: `${BASE_URL}/api/oauth/login`,
        data: params,
    })
        .then(response => response.data)
        .catch({
            function(error) {
                console.log("catch:", error);
            }
        });
}
// 获取首页banner
export const getIndexBanner = params => {
    let ACCESS_TOKEN = JSON.parse(window.localStorage.getItem('token')).access_token;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/home/getBanner?access_token=${ACCESS_TOKEN}&number=${Math.random()}`,
        data: params,
    })
        .then(res => res.data)
        .catch({
            function(error) {
                console.log("catch:", error);
            }
        });
}
// 获取首页商户收益信息
export const getProfitDetails = params => {
    let ACCESS_TOKEN = JSON.parse(window.localStorage.getItem('token')).access_token;
    let QDCRM_USER_ID = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/home/getProfitDetails?access_token=${ACCESS_TOKEN}&qdcrmUserId=${QDCRM_USER_ID}&number=${Math.random()}`,
        data: params,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
        .then(response => response.data)
        .catch(function (reason) {
            console.log('catch:', reason);
        });
}
// 获取首页商户交易信息
export const getDealDetails = params => {
    let ACCESS_TOKEN = JSON.parse(window.localStorage.getItem('token')).access_token;
    let QDCRM_USER_ID = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/home/getDealDetails?access_token=${ACCESS_TOKEN}&qdcrmUserId=${QDCRM_USER_ID}&number=${Math.random()}`,
        data: params,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
        .then(res => res.data
        )
        .catch(function (reason) {
            console.log('catch:', reason);
        });
}
// 获取首页消息滚动通知
export const getshowMessage = params => {
    let ACCESS_TOKEN = JSON.parse(window.localStorage.getItem('token')).access_token;
    let QDCRM_USER_ID = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/message/showMessage?access_token=${ACCESS_TOKEN}&qdcrmUserId=${QDCRM_USER_ID}&number=${Math.random()}&pageNum=1`,
        data: params,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
        .then(res => res.data)
        .catch(function (reason) {
            console.log('catch:', reason);
        });
}
// 获取平台管理页面数据
export const getData = params => {
    let ACCESS_TOKEN = JSON.parse(window.localStorage.getItem('token')).access_token;
    let quarter = 1;
    let myDate = new Date();
    let M = (myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1);
    if (M == 1 || M == 2 || M == 3) {
        quarter = 1
    } else if (M == 4 || M == 5 || M == 6) {
        quarter = 2
    }
    else if (M == 7 || M == 8 || M == 9) {
        quarter = 3
    } else {
        quarter = 4
    }
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/statistical/getData?access_token=${ACCESS_TOKEN}&year=${myDate.getFullYear()}&quarter=${quarter}&number=${Math.random()}`,
        data: params,
    })
        .then(res => res.data)
        .catch(function (reason) {
            console.log('catch:', reason);
        });
}
// 获取代理信息页面数据
export const queryAgent = params => {
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let page = JSON.parse(window.sessionStorage.getItem('page'));
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/agent/queryAgent?access_token=${access_token}&higherId=${qdcrmUserId}&qdcrmUserId=${qdcrmUserId}&${page}&number=${Math.random()}`,
        data: params,
    }).then(res => res.data)
        .catch(function (reason) {
            console.log('catch:', reason);
        });
}
// 代理信息详情页面数据
export const queryAgentDetails = params => {
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/agent/queryAgentDetails?access_token=${access_token}&number=${Math.random()}`,
        data: params,
    }).then(res => res.data)
        .catch(function (reason) {
            console.log('catch:', reason);
        });
}
// 代理信息业务配置页面数据
export const queryAgentBiz = params => {
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/agent/queryAgentBiz?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}&number=${Math.random()}`,
        data: params,
    }).then(res => res.data)
        .catch(function (reason) {
            console.log('catch:', reason);
        });
}
// 代理信息业务配置页面获取省份
export const getProvince = params => {
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/bankcard/getProvinceList?access_token=${access_token}&number=${Math.random()}`,
        data: params,
    }).then(res => res.data)
        .catch(function (reason) {
            console.log('catch:', reason);
        });
}
// 获取代理利润页面数据
export const queryAgentProfitDetails = params => {
    //获取当前时间
    var myDate = new Date();
    var Y = myDate.getFullYear() + '-';
    var M = (myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1) + '-';
    var D = myDate.getDate() + ' ';
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let gmtStart = Y + M + '01';
    let gmtEnd = Y + M + D;
    let page = '1';
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/agent/queryAgentProfit?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}&gmtStart=${gmtStart}&gmtEnd=${gmtEnd}&page=${page}&number=${Math.random()}`,
        data: params,
    }).then(res => res.data)
        .catch(function (reason) {
            console.log('catch:', reason);
        });
}
// 获取交易订单页面数据
export const getQueryTradeOrder = params => {
    //获取当前时间
    var myDate = new Date();
    var Y = myDate.getFullYear() + '-';
    var M = (myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1) + '-';
    var D = myDate.getDate() + ' ';
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let gmtStart = Y + M + '01';
    let gmtEnd = Y + M + D;
    /*     let gmtStart = '2019-01-01';
        let gmtEnd = '2019-02-01'; */
    let currentPage = '1';
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/order/queryTradeOrder?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}&gmtStart=${gmtStart}&gmtEnd=${gmtEnd}&currentPage=${currentPage}&number=${Math.random()}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 获取会员交易页面数据
export const getqueryMemberTrade = params => {
    //获取当前时间
    var myDate = new Date();
    var Y = myDate.getFullYear() + '-';
    var M = (myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1) + '-';
    var D = myDate.getDate() + ' ';
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let gmtStart = Y + M + '01';
    let gmtEnd = Y + M + D;
    let currentPage = '1';
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/order/queryMemberTrade?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}&gmtStart=${gmtStart}&gmtEnd=${gmtEnd}&currentPage=${currentPage}&number=${Math.random()}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 获取会员信息页面数据
export const getqueryMemberInfo = params => {
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let currentPage = '1';
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/order/queryMemberInfo?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}&currentPage=${currentPage}&number=${Math.random()}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 获取返现活动页面数据
export const queryActiCashback = params => {
    //获取当前时间
    var myDate = new Date();
    var Y = myDate.getFullYear() + '-';
    var M = (myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1) + '-';
    var D = myDate.getDate() + ' ';
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let currentPage = '1';
    let gmtStart = Y + M + '01';
    let gmtEnd = Y + M + D;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/order/queryActiCashback?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}&currentPage=${currentPage}&gmtStart=${gmtStart}&gmtEnd=${gmtEnd}&number=${Math.random()}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 获取终端信息页面数据
export const queryTerminal = params => {
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let currentPage = '1';
    let contionsLower = 'on';
    let termStyle = '2';
    let merchantId = JSON.parse(window.localStorage.getItem('userInfo')).merchantId;
    let contactPhone = ''
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/terminal/queryTerminal?qdcrmUserId=${qdcrmUserId}&merchantId=${merchantId}&access_token=${access_token}&currentPage=${currentPage}&contionsLower=${contionsLower}&termStyle=${termStyle}&contactPhone=${contactPhone}&number=${Math.random()}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 提交终端转移申请数据
export const shiftTerminal = params => {
    return axios({
        method: 'POST',
        url: `${BASE_URL}/msmng/api/terminal/shiftTerminal`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 查询实名认证状态接口
export const returnAuthStatus = params => {
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/realnameauth/returnAuthStatus?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 查询认证二要素信息接口
export const queryTwoElementsResult = params => {
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/realnameauth/queryTwoElementsResult?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 提交实名认证信息接口
export const addRealNameAuth = params => {
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let merchantId = JSON.parse(window.localStorage.getItem('userInfo')).merchantId;
    return axios({
        method: 'POST',
        url: `${BASE_URL}/msmng/api/realnameauth/addRealNameAuth?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}&merchantId=${merchantId}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 获取消息通知页面数据接口
export const showAllMessage = params => {
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/message/showAllMessage?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 获取查询提现权限数据接口
export const queryDrawPermissions = params => {
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/permissions/queryDrawPermissions?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 获取资金信息数据接口
export const getCashDetails = params => {
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/withdrawdeposit/getCash?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 获取系统支持的所有银行列表数据接口
export const queryBankSup = params => {
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/bankcard/queryBankSup?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 查询是否设置密码接口数据接口
export const queryPasswordExist = params => {
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/paypassword/queryPasswordExist?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 提交支付密码 && 验证支付密码接口
export const checkPayPassword = params => {
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    return axios({
        method: 'POST',
        url: `${BASE_URL}/msmng/api/paypassword/checkPayPassword?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 获取银行卡列表数据接口
export const showBankCardList = params => {
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    let pageNum = '1'
    return axios({
        method: 'get',
        url: `${BASE_URL}/msmng/api/bankcard/showBankCardList?access_token=${access_token}&qdcrmUserId=${qdcrmUserId}&pageNum=${pageNum}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 获取资金明细信息接口
export const queryBalanceDetailRecord = params => {
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    return axios({
        method: 'GET',
        url: `${BASE_URL}/msmng/api/withdrawdeposit/queryBalanceDetailRecord?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}
// 获取提现页面费率信息接口
export const getConfigFee = params => {
    let qdcrmUserId = JSON.parse(window.localStorage.getItem('userInfo')).qdcrmUserId;
    let access_token = JSON.parse(window.localStorage.getItem('token')).access_token;
    return axios({
        method: 'POST',
        url: `${BASE_URL}/msmng/api/withdrawdeposit/getConfigFee?qdcrmUserId=${qdcrmUserId}&access_token=${access_token}`,
        data: params,
    }).then().catch(function (reason) {
        console.log('catch:', reason);
    })
}