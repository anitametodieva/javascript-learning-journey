function calculator() {
  let num1El;
  let num2El;
  let resultEl;

  return {
    init(selector1, selector2, resultSelector) {
      num1El = document.querySelector(selector1);
      num2El = document.querySelector(selector2);
      resultEl = document.querySelector(resultSelector);
    },
    add() {
      resultEl.value =
        Number(num1El.value) + Number(num2El.value);
    },
    subtract() {
      resultEl.value =
        Number(num1El.value) - Number(num2El.value);
    }
  };
}




