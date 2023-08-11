function ticTacToe(x,y,z){ 
    const a=x[0].split('');
    //console.log(a);
    const b=y[0].split('');
   //console.log(b);
    const c=z[0].split('');
    //console.log(c);
    add=a.concat(b,c);
    //console.log(add);
    //rowwise winning logic
    if(add[0]===add[1]&& add[1]===add[2]|| add[3]===add[4] &&  add[4]===add[5]|| add[6]===add[7] &&  add[7]===add[8]){
         console.log("win");
    }
    //horizontal winning logic
    else if(add[0]===add[3]&& add[3]===add[6]|| add[1]===add[4] &&  add[4]===add[7]|| add[2]===add[5] &&  add[5]===add[8]){
        console.log("win");
    }
    //diagonal winning logic
    else if(add[0]===add[4]&& add[4]===add[8]|| add[2]===add[4] &&  add[4]===add[6]){
        console.log("win");
    }
    //tie
    else{
        console.log("Draw");
    }

};
ticTacToe(['OXO'],['XOX'],['XOX']); 