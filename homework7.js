//                 Push
function push(arr, x) {
  arr[arr.length] = x;

  return arr.length;
}
//2                     POP
function pop(y) {
  let pop = "";
  for (let i = 0; i < y.length; i++) {
    if (i === y.length - 1) {
      if (y[i] === +y[i]) {
        pop = 0;
        pop = y[i];
      } else {
        pop = y[i];
      }
    }
  }
  return pop;
}
//3                                      Shift
function shift(y) {
  let arr = [];
  let shift = 0;
  for (let i = 0; i < y.length - 1; i++) {
    shift = y[0];
    arr[i] = y[i + 1];
  }

  return shift;
}
// 4                      Unshift
function ushift(y, z) {
  debugger;
  let newarr = [];
  for (let i = 0; i <= y.length; i++) {
    if (i === 0) {
      newarr[i] = z;
    } else {
      newarr[i] = y[i - 1];
    }
  }
  return newarr.length;
}
//5                    Includes
function includes(y, z) {
  for (let i = 0; i < y.length; i++) {
    if (y[i] === z) {
      return true;
    }
  }
  return false;
}
//6                         join
function join(y, z) {
  if (z == undefined) {
    z = ",";
  }
  let str = "";
  z = String(z);
  for (let i = 0; i < y.length; i++) {
    if (i === y.length - 1) {
      str += y[i];
    } else {
      str += y[i] + z;
    }
  }
  return str;
}
