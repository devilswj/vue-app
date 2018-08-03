const fs=require('fs')

fs.readFile('.good.json','utf-8' ,(err.data)=>{
    let newData=JSON.parse(data)
    let i=0
    let pushData=[]
    newData.RECORDS.map((val,inx)=>{
        if(val.IMAGE1!=null){
            i++
            console.log(val.NAME)
            pushData.push(val)
        }
    })
})
fs.writeFile('./newGoods.json',JSON.stringify(pushData),(err)=>{
    if(err)console.log(err);
    else console.log('ok')
})