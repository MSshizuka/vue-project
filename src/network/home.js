import AjaxRequest from '@/network/axios';

export function getHomeMultidata() {
  return AjaxRequest.request({
    url: '/home/multidata',
  });
}

export function getHomeData(type, page) {
  return AjaxRequest.request({
    url: '/home/data',
    params: {
      type,
      page,
    },
  });
}
