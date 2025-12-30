
// A-TASK:

// function task(a,b){
//   let result=0;
//   for(let i=0;i<b.length;i++){
//     if(a===b[i]){
//       result++
//     }
//   }
//   return result
// }
// console.log("result",task('a','assalomu alaykum'));

// console.log("Jack Ma maslahatlari");

// const list=[
//     "yaxshi talaba bo'ling",  //0 ==>20
//     "yaxshi ustoz toping va koproq xato qiling",//20=>30
//     "ko'proq ishlar qiling",  //30=>40
//     "o'zingiz sevgan ishni qiling",  //40=>50
//     "yoshlarga investitsiya kiriting", //50=>60
//     "endi dam oling,foydasi yoq endi", //60
// ];
   //callback function
// function maslahatBering(a,callback){
//     if(typeof a !=='number') callback("iltimos raqam kiriting",null);
//     else if(a <=20) callback(null,list[0]);
//     else if(a > 20 && a<=30) callback(null,list[1]);
//     else if(a > 30 && a<=40) callback(null,list[2]);
//     else if(a > 40 && a<=50) callback(null,list[3]);
//     else if(a > 50 && a<=60) callback(null,list[4]);
//      else{
//          setTimeout(function(){
        
//         callback(null,list[5])
    

//     },5000)

//      }
//     setTimeout(function(){
        
//         callback(null,list[5])
    

//     },5000)

// }
// console.log("passed here 0")
// maslahatBering(70,(err,data)=>{
//     if(err) console.log("ERROR:",err);
//     else{
//         console.log("togri javob:",data)

//     }
    
// })
// console.log("passed here 1")

//async function
//   async function maslahatBering(a){
//     if(typeof a !=='number') throw new Error("iltimos raqam kiriting");
//     else if(a <=20) return (list[0]);
//     else if(a > 20 && a<=30) return list[1];
//     else if(a > 30 && a<=40) return list[2];
//     else if(a > 40 && a<=50) return list[3];
//     else if(a > 50 && a<=60) return list[4];
//      else{

//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve(list[5])
//             },3000)
//         })
    
//      }
    // else{

    //     return new Promise((resolve,reject)=>{
    //         setInterval(() => {
                
        
    //             resolve(list[5])
    //         },1000)
    //     })
    
    //  }
    
    // }



    //  async function run(){
    //     let javob=await maslahatBering(20);
    //     console.log(javob);
    //     javob=await maslahatBering(70);
    //     console.log(javob);
    //     javob=await maslahatBering(50);
    //     console.log(javob)
    //  }
    //  run()
    //      setTimeout(function(){
        
    //     callback(null,list[5])
    

    // },5000)

    //  }
    

// }


//call via then & catch
// console.log("passed here 0")
// maslahatBering(18)
// .then(data=>{
//     console.log('javob:',data)
//     maslahatBering(70)
// .then(data=>{
//     console.log('javob:',data)
    
// })
// .catch(err=>{
//     console.log("Error:",err)
// })
    
// })
// .catch(err=>{
//     console.log("Error:",err)
// })



// call async await
// async function run(){
//     let javob=await maslahatBering(20);
//     console.log(javob);
//     javob=await maslahatBering(70);
//     console.log(javob);
//     javob=await maslahatBering(50);
//     console.log(javob);
// }
// run()









// B task
// function countDigit(b){
//     let count=0;
//     for(let i=0; i<b.length;i++){
//         if(b[i] >= 0){
//             count++
//         }
//     }
//     return count
   
// }
// console.log(countDigit('sjdhhk37373ydgu29sh'));


