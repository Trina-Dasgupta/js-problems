function tic_tac_toe(...value) {
  const merge3 = value.flat(1);
  let join = merge3.join("");
  var add = join.split('');
  console.log(add)
  var count = 0
  var winning_array = [123, 456, 789, 147, 258, 369, 159, 753];
  for (let i = 1; i <= winning_array.length; i++) {
    let data = winning_array[i - 1];
    //console.log(data)
    var myArr = String(data).split("").map((data) => {
      return Number(data - 1)
    })
    console.log(myArr)
    if (
      add[myArr[0]].concat(add[myArr[1]], add[myArr[2]]).includes('OOO') ||
      add[myArr[0]].concat(add[myArr[1]], add[myArr[2]]).includes('XXX')) {
      count = count + 1;
      break;
    }
  };
  if (count > 0) {
    return 'WIN'
  } else {
    return 'TIE'
  }
}
let result = tic_tac_toe(['XOX'], ['OXO'], ['OXO']);
console.log(result);