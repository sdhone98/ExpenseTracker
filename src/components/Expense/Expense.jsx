import "./Expense.scss";
import Date from "../Date/Date.jsx";
import Card from "../UI/Card.jsx";

const Expense = (props) => {
  const data = props.data;

  return (data.map((obj) => (
    <Card className="expense-item" key={obj.id}>
      <Date date={obj.date} />
      <div className="expense-item__description">
        <h2>{obj.name}</h2>
        <div className="expense-item__price">₹ {obj.amount}</div>
      </div>
    </Card>
  )));
};

export default Expense;
