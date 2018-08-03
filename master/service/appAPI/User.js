const Router=require('koa-router')
const mongoose=require('mongoose')
const {initScheam}=require('../database/init.js')
let router=new Router()

router.get('/',async (ctx)=>{
    ctx.body=`index`
})
router.post('/register',async (ctx)=>{
    // console.log(ctx.request.body)
    let {password,username } = ctx.request.body;
    let obj = {
        password,
        userName:username
    }
    // let password=ctx.request.body.password
    initScheam();
    let user=mongoose.model('User')
    let oneUser=new user(obj)
    await oneUser.save().then(()=>{
        console.log('insert ok')
        let data={
            msg:'create ok',
            status:200
        }
        ctx.body=data
    })
    
})
router.post('/login', async (ctx)=>{
    const {username,password} = ctx.request.body
    initScheam();
    let user=mongoose.model('User');
    await user.findOne({userName:username}).exec()
    .then(async(result)=>{
        if(result){
            let newUser=new user()
            await newUser.comparePassword(password,result.password)
            .then( (isMatch)=>{
                //返回比对结果
                if(isMatch){
                    ctx.body={ code:200, message:'登录成功'} 
                }else{
                    ctx.body={ code:403, message:'登录失败'} 
                }
                
            })
            .catch(error=>{
                //出现异常，返回异常
                console.log(error)
                ctx.body={ code:500, message:error}
            })
        }else{
            ctx.body={ code:404, message:'用户名不存在'} 
        }
    })
})

module.exports=router;