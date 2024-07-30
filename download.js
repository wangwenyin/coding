class Utils {
  static download(content, fileName, type) {
    const bstr = window.atob(content)
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    const blob = new Blob([u8arr])
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, fileName + type)
    } else {
      const url = window.URL || window.webkitURL || window.moxUrl
      const blobUrl = url.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = fileName + type
      link.click()
    }
  }

  static httpDownLoad(downloadFilePath, downloadFileName) {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'blob'
    xhr.open('GET', downloadFilePath, true)
    xhr.onload = function(res) {
      if (this.readyState === 4 && this.status === 200) {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob, fileName + type)
        } else {
          const url = window.URL || window.webkitURL || window.moxUrl
          const blobUrl = url.createObjectURL(new Blob([res.responce]))
          const link = document.createElement('a')
          link.href = blobUrl
          link.download = fileName + type
          let evt = document.createEvent('MouseEvent')
          evt.initEvent('click', true, true)
          link.dispatchEvent(evt)
        }
      }
    }
  }
} 