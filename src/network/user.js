import AjaxRequest from '@/network/axios';

export const login = (userdata) => {  
  console.log("user.js4:",userdata);
  
  return AjaxRequest.request({
    url: '/login',
    method: 'POST',
    data: {
      userdata,
    }
  })
}

export const validate = (userdata) => {
  console.log(userdata);
  
  return AjaxRequest.request({
    url: '/validate',
    method: 'POST',
    data: {
      userdata
    }
  })
}

export default {};