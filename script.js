function tictactoe(a, b, c) {
  //Winning Logic
  //rowwise wincheck
  if ((a[0] == a[1] && a[1] == a[2]) || (b[0] == b[1] && b[1] == b[2]) || (c[0] == c[1] && c[1] == c[2])) {
    return true;
  }
  //columnwisw win check
  else if ((a[0] == b[0] && a[0] == c[0]) || (a[1] == b[1] && a[1] == c[1]) || (a[2] == b[2] && a[2] == c[2])) {
    return true;
  }
  //diagonal win check
  else if ((a[0] == b[1] && b[1] == c[2]) || (a[2] == b[1] && b[1] == c[0])) {
    return true;
  } else {
    return 'tie';//Doesn't match
  }

}
console.log(tictactoe(["X", 0, "X"], [0, "X", 0], [0, "X", "X"]));
