function pascal(rows) {
    if (rows === 1) {
      return [[1]];
    }
  if (rows === 0) {
      return [];
    }
    const prev = pascal(rows - 1);
    const last = prev[prev.length - 1];
    const next = [1];
    for (let i = 0; i < last.length - 1; i++) {
      next.push(last[i] + last[i + 1]);
    }
    next.push(1);
    prev.push(next);
    return prev;
  }
  



  function pascals(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= numRows; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        result.push(arr);
    }
    return result;
}
