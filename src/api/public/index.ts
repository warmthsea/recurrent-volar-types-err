import service from "../request";

export function setUploadFileApi(options:{file: Blob}){
  const file = new FormData();
  file.append('file',options.file)
    return service.post('/admin/sys-file/upload', file);
}

/** 正负面清单 模板下载 */
export function downloadTemplateApi(){
  return service({
    url: '/admin/sys-file/local/file/manifest.xlsx',
    method: 'get',
    responseType: 'blob',
  })
}
