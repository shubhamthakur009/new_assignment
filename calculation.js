let num=10
for(let i=1; i<=num/2;i++)
{
    if(num%i===0)
    {
        count++
    }
} if(count===2){
    console.log("Prime")
}else{
    console.log("Not a prime")
}