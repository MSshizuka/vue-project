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

export const validate = () => {
  return AjaxRequest.request({
    url: '/validate',
    method: 'get'
  })
}

export default {};