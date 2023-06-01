mc = [5,10,15,20,25,30,35,40,45,50];
console.log(mc);
(i=0; i < mc.length; i++){
if(mc[i]%2 ==0){
    mc.splice (i,1);
}
}
console.log (mc);