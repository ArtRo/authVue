import request from  './httpUtil'
class OssInfo {

  constructor({OSSAccessKeyId, Signature, bucket, dir, expire, host, policy}) {
    this.OSSAccessKeyId = OSSAccessKeyId;
    this.Signature = Signature;
    this.bucket = bucket;
    this.dir = dir;
    this.expire = expire;
    this.host = host;
    this.policy = policy;
  }



  getOss(url,params){
    return new Promise(function (resolve, reject) {
      request.get(url,{params:params}).then(data=>{
        resolve(data.data);
      }).catch(error=>{
        console.log(error);
        reject({});
      });
    });
  }
}
let ossInfo = new OssInfo({});
export default ossInfo;

