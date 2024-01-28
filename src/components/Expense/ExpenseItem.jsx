import Card from "../UI/Card";
import Date from "../Date/Date";

import "./ExpenseItem.scss"
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item" key={props.id}>
      <Date date={props.date} />
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">₹ {props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
