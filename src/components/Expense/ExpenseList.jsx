import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.scss";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return props.items.map((obj) => (
    <div key={obj.id} className="expense-item-list">
      <ExpenseItem
        key={obj.id}
        name={obj.name}
        amount={obj.amount}
        date={obj.date}
      />
    </div>
  ));
};

export default ExpenseList;
