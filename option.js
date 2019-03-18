var requestApi = {
  uploadFile: '/stushare/index.php?/api/material/upload',
  register: '/stushare/index.php?/api/user/register',
  login: '/stushare/index.php?/api/user/login',
  getUser: '/stushare/index.php?/api/user/get_user',
  getFileList: '/stushare/index.php?/api/material/show',
  getCurrentFile: '/stushare/index.php?/api/material/get_detail_by_id',
  downloadFile: '/stushare/index.php?/api/material/download',
  getTags: '/stushare/index.php?/api/tag/get_all_tag',
  searchFile: '/stushare/index.php?/api/search/all'
}
for (var i in requestApi) {
  requestApi[i] = 'http://120.77.86.119' + requestApi[i]
}
export default requestApi
