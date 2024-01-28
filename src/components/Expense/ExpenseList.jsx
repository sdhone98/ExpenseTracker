import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return props.items.map((obj) => (
    <ExpenseItem
      key={obj.id}
      name={obj.name}
      amount={obj.amount}
      date={obj.date}
    />
  ));
};

export default ExpenseList;
