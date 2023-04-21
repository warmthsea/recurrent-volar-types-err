import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
import { genFileId } from 'element-plus'

export const useFileUpload = () => {
  const uploadRef = ref<UploadInstance>()

  /** 覆盖前一个文件 */
  const handleExceed: UploadProps['onExceed'] = (files: File[]) => {
    uploadRef.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    uploadRef.value!.handleStart(file)
  }

  /** 清空文件 */
  const handleClearFile = () => uploadRef.value?.clearFiles()

  const submitUpload = () => {
    uploadRef.value!.submit()
  }

  return { uploadRef, submitUpload, handleExceed, handleClearFile }
}
