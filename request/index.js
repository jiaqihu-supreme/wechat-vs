//同时发送异步代码的次数
let ajaxTime = 0;
export const request = (params)=>{
  ajaxTime++;
  // 显示加载中效果
  wx.showLoading({
    title: '努力加载中~',
    mask:true
  })
  //定义公共的url
  const baseUrl = "https://vs2-dev.eucita.com/manager/api";
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url:baseUrl+params.url,
      success:(result)=>{
        resolve(result.data);
      },
      fail:(err)=>{
        reject(err);
      },
      complete:()=>{
        ajaxTime--;
        if(ajaxTime===0){
          wx.hideLoading()
        }
      }
    });
  })
}