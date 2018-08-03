const mongoose=require('mongoose')
const db="mongodb://localhost/simle-db"

const glob=require('glob');
const {resolve}=require('path')

exports.initScheam=()=>{
    glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
}

let maxconnect=5;
let num=0;
mongoose.Promise=global.Promise
exports.connect=()=>{
      //链接数据库
      mongoose.connect(db);
    return new Promise((resolve,reject)=>{
      
        //增加数据库链接的事件监听
        mongoose.connection.on('disconnected',()=>{
            conn()
        })
        mongoose.connection.on('error',err=>{
            conn(err)
        })
        mongoose.connection.once('open',()=>{
            console.log('mongdb connected success')
            resolve()
        })
    })
}
function conn(err){
    if(unm<maxconnect){
        num++;
        mongoose.connect(db)
    }else{
        reject(err)
        throw new Error('数据库出现问题，请修复')
    }
}
