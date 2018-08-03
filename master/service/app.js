const koa=require('koa');
const app=new koa();
const mongoose=require('mongoose')
const router=new require('koa-router')()
let roUser=require('./appAPI/User.js')
let good =require('./appAPI/goods.js')
const {initScheam,connect}=require('./database/init.js')
const bodyParser=require('koa-bodyparser')
const cors=require('koa2-cors');
app.use(cors())
app.use(bodyParser());

;(async ()=>{
    await connect();
    // initScheam();
    // const user=mongoose.model('User')
    // let oneUser=new user({userName:'swj',password:'55555'})
    // await oneUser.save().then(()=>{
    //     console.log('insert ok')
      
    // })
    // let  users = await  user.findOne({}).exec()
    //     console.log('------------------')
    //     console.log(users)
    //     console.log('------------------')
 
  
})()
// router.use(goods.routes());
router.use(roUser.routes()).use(good.routes());
app.use(router.routes()).listen(3000)