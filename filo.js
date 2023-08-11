let array = [];
 for(let j=0 ; j<=10 ; j++){ 
  if(j>=1){
    for(let i=array.length -1 ; i>=0 ; i--){
      let value = (array[i]);
      let index = array.indexOf(value);
      array[i=i+1] = value;
      i =index;
      if(i==0){
       array[i] =j;
      }
    };
  }else{
      array[j] = j;
  }
 };
console.log("first_IN",array);
for(let i=0 ; i<11 ; i++){
  var array1=[];
  for(j=0; j<array.length-1 ; j++){
    let index = j;
    array1[j] = array[j=j+1];
    j=index;
  }
console.log("last_out",array1);
array=[];
array=array1;
};