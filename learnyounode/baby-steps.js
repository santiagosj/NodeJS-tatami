((...nums)=>{
   let sum = 0;
   nums.map(num,i => {
       if(i >= 2) sum += Number(num);
   })
   console.log(sum);
})(...process.argv)