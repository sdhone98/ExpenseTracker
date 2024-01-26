import "./Expense.scss";
import Date from "../Date/Date.jsx";
import Card from "../UI/Card.jsx";

const Expense = (props) => {
  return (
    <Card className="expense-item">
      <Date date={props.data.date} />
      <div className="expense-item__description">
        <h2>{props.data.name}</h2>
        <div className="expense-item__price">₹ {props.data.amount}</div>
      </div>
    </Card>
  );
};

export default Expense;
