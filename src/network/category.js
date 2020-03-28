import AjaxRequest from '@/network/axios';

export function getCategory() {
  return AjaxRequest.request({
    url: '/category'
  });
}

export function getSubcategory(maitKey) {
  return AjaxRequest.request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return AjaxRequest.request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}

