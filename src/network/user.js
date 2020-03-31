import AjaxRequest from '@/network/axios';

export const login = ({ username}) => {  
  return AjaxRequest.request({
    url: '/login',
    method: 'POST',
    data: {
      username,
    }
  })
}

export const validate = (userdata) => {
  console.log('user.js14:',userdata);
  
  return AjaxRequest.request({
    url: '/validate',
    method: 'POST',
    data: {
      userdata
    }
  })
}

export default {};