import AjaxRequest from '@/network/axios';

export const register = (payload) => {
  let {username, usermail, userpws} = payload
  // console.log(username, useremail, userpws);
  return AjaxRequest.request({
    url: '/register',
    method: 'POST',
    data: {
      username, usermail, userpws
    }
  })
}