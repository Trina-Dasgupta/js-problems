let data=[2,20,12,30,40,34];

function splice(position,newElem){
    for(i=data.length-1;i>=0;i--){
        // console.log(data[i])
        if(i>=position){
            data[i+1]=data[i];
            if(i==position){
                data[i]=newElem;
            }
        }
       
    }
    return data;
}
console.log(splice(0,50));