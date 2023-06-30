// Function used to get the factorial of a non-negative
function factorialize(num) {
    if (num == 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

// Expands a binomial expression supplied as a string "(ax + b)^c
function expand(expr) {
  // Regex expression used to get a and the variable
  let ac = expr.match(/-\d*[A-Za-z]|\d*[A-Za-z]|-\d*[A-Za-z]|\d*[A-Za-z]/);
  // Regex expression used to get b and bracket
  let b_ = expr.match(/\+\d+\)|-\d+\)/)
  // Regex expression used to get n nad the power sign
  let n_ = expr.match(/\^\d+/)
  let a;
  let b;
  let n;
  let c;
  let expandedExpr = "";
  // String functions used to get a, b, n and the variable c
  if (ac[0].length == 1) {
      a = 1;
  } else if (ac[0].charAt(0) == '-' && ac[0].length == 2) {
      a = -1;
  } else {
      a = Number(ac[0].substring(0, ac[0].length - 1));
  }
  b = Number(b_[0].substring(0, b_[0].length - 1));
  n = Number(n_[0].substring(1,))
  c = ac[0].charAt(ac[0].length - 1)
  // if n is 0, result is always 1
  if (n == 0) {
      return '1';
  }
  // if b is zero then result is always ac ^ n
  if (b == 0) {
      return  a ** n + c + "^" + n
  }
  let v;
  for (let i = n; i >= 0; i--) {
      // Works out the coefficient of the variable
      v = Math.round(factorialize(n) * a ** i * b ** (n - i) / factorialize(n - i) / factorialize(i));
      if (i != 0) {
          if (v >= 0 && i != n) {
              expandedExpr += "+"
          }
          expandedExpr += v == 1 ? "" : (v == -1 ? "-": v);
          expandedExpr += i != 1 ? c + "^" + i : c;
      } else {
          if (v < 0) {
              expandedExpr += v;
          } else {
              expandedExpr += "+" + v;
          }
      }
  }
  return expandedExpr;
}
