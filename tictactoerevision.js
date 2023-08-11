function ticTacToe(x, y, z) {
    const a = x[0].split('');

    const b = y[0].split('');

    const c = z[0].split('');
    add = a.concat(b, c);
    const winningCondition = [123, 456, 789, 147, 258, 369, 159, 357];
    let count = 0;
    for (i = 0; i < winningCondition.length; i++) {
        let data = winningCondition[i];

        var newData = data.toString().split("").map((data) => {
            return (data - 1);
        })
        if (
            add[newData[0]].concat(add[newData[1]], add[newData[2]]).includes('OOO') ||
            add[newData[0]].concat(add[newData[1]], add[newData[2]]).includes('XXX')) {
            count = count + 1;
            break;
        }
    };
    if (count > 0) {
        return 'True';
    } else {
        return 'Draw';
    }

};

console.log(ticTacToe(['OXO'], ['XXO'], ['XOX']));