let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
class fileUtil {

  getfileName(fileName) {
    let fileSuffix = fileName.split(".");
    let fileType = fileSuffix[fileSuffix.length - 1];
    let fileFloader;
    switch (fileType) {
      case "bmp":
      case "gif":
      case "jpeg":
      case "png":
      case "jpg":
        fileFloader = "images/";
        break;
      case "mp3":
      case "wav":
      case "flac":
      case "ape":
      case "alac":
      case "wv":
      case "aac":
      case "ogg":
      case "opus":
        fileFloader = "mp3/";
        break;
      case "mp4":
      case "rmvb":
      case "rm":
      case "flv":
      case "avi":
        fileFloader = "videos/";
        break;
      case "ppt":
      case "pptx":
      case "doc":
      case "docx":
      case "pdf":
        fileFloader = "office/";
        break;
      case "html":
        fileFloader = "html/";
        break;
      case "xml":
        fileFloader = "xml/";
        break;
      default:
        fileFloader = "file/";
    }
    return (fileFloader ? fileFloader : "file/") + this.getRandomName() + "." + fileType;
  }
  getRandomName() {
    return new Date().getTime() + "_" + this.generateMixed(Math.ceil(Math.random() * 5));
  }

  generateMixed(n) {
    let res = "";
    for (let i = 0; i < n; i++) {
      let id = Math.ceil(Math.random() * 35);
      res += chars[id];
    }
    return res;
  }
}
const fu = new fileUtil();
export default fu;
