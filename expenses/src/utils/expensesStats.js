export const expensesStats = (itemList) => {
  // console.log(itemList);
  let incomes = 0,
    expenses = 0,
    total = 0;
  if (itemList.lenght === 0) {
    return [0, 0];
  }
  itemList.forEach((element) => {
    if (element.money.income) {
      incomes += +element.money.amount;
    } else {
      expenses += +element.money.amount;
    }
  });
  total = Math.abs(incomes) + Math.abs(expenses);
  // console.log(total);
  let incomesPrecentage = Math.round((incomes * 100) / total);
  let expensesPrecentage = Math.round((expenses * 100) / total);
  return [incomesPrecentage, expensesPrecentage];
};
