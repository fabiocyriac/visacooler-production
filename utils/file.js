
const getFileType = (ext) => {
    let type = null;
    switch(ext) {
        case (ext.match(/jpeg|jpg|png|gif/) || {}).input:
        type = "image";
        break;
        case (ext.match(/mp4|3gp|mov|flv/) || {}).input:
        type = "video";
        break;
        case (ext.match(/mp3/) || {}).input:
        type = "audio";
        break;
        case (ext.match(/pdf/) || {}).input:
        type = "pdf";
        break;
      default:
        break;
      }
      return type
 }

 export default getFileType
