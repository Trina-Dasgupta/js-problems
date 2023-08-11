function search(elem){
    let data = [20, 35, 45, 70, 85, 90,90];
    let index=undefined;
    for(i=0;i<=data.length-1;i++){
        if(data[i]===elem){
            index=i;
            break;
           }
        
    }
    //return index;
    return (data.indexOf(elem));

}
console.log(search(90));