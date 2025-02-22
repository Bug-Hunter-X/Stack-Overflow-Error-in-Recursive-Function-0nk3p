function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a > 1000) { //Add a check to avoid deep recursion
    return  (a * (a + 1)) / 2 + b; // Mathematical solution for large a
  }
  return foo(a - 1, a + b);
}