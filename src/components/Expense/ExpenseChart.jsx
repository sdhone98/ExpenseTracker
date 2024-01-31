import ChartBar from "../ChartBar/ChartBar";
const ExpenseChart = props => {
  const potDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  var totalExpense = 0


  for (const expense of props.expenses){
    const expenseMonth = expense.date.getMonth();
    potDataPoints[expenseMonth].value += expense.amount;
    totalExpense += parseInt(expense.amount);
  }

  return <ChartBar data={potDataPoints} totalCount={totalExpense}/>;
};

export default ExpenseChart;
