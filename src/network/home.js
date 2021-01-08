import {request} from './request';

export function getHomeNotice(COLUMNTYPE, currentPage, showCount) {
  return request({
    url: '/appDocInfo/getDocListByType',
    params: {
      COLUMNTYPE,
      currentPage,
      showCount
    }
  })
}