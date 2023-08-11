function ticTacToe(...value){ 
    const merge3 = value.flat(1);
    let join = merge3.join("");
    var mainArray = join.split('');
    console.log(mainArray)
     if(mainArray[0] == mainArray[1]){
        if(mainArray[0] == mainArray[2]){
            console.log('win');
        }
     }else{
        if(mainArray[0] == mainArray[3]){
            if(mainArray[0] == mainArray[6]){
                console.log('win');
            }
        if(mainArray[0] == mainArray[4]){
            if(mainArray[0] ==mainArray[8]){
                console.log("win")
            }}}};
    if(mainArray[4] == mainArray[5]){
        if(mainArray[4] == mainArray[3]){
            console.log('win');
        }
     }else{
        if(mainArray[4] == mainArray[1]){
            if(mainArray[4] == mainArray[7]){
                console.log('win');
            }}
     if(mainArray[4] == mainArray[6]){
        if(mainArray[4] == mainArray[2]){
            console.log("win");
        }}};
    if(mainArray[8] == mainArray[7]){
        if(mainArray[8] == mainArray[6]){
            console.log('win');
        }
     }else{
        if(mainArray[8] == mainArray[5]){
            if(mainArray[8] == mainArray[2]){
                console.log(' win');
            }}};
};
ticTacToe(['OOX'],['XXO'],['OOO']); 