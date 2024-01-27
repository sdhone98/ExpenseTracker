import { useState } from "react";
import "./AddExpense.scss";
import Card from "../UI/Card";
const AddExpense = (props) => {
  const [formTitle, setFormTitle] = useState("");
  const [formAmount, setFormAmount] = useState("");
  const [formDate, setFormDate] = useState("");

  const getInputDetails = (trigger, value) => {
    if (trigger == "name") {
      setFormTitle(value);
    } else if (trigger == "amount") {
      setFormAmount(value);
    } else if (trigger == "date") {
        setFormDate(value);
    }
  };

  const saveDetails = (event) => {
    event.preventDefault();
    const formData = {
      "id": Math.random(), "title": formTitle, "amount": formAmount, "date": Date(formDate)
    };
    props.onExpenseDataHandeler(formData)
    setFormTitle("");
    setFormAmount("");
    setFormDate("");
  };
  return (
    <Card className="add-expense">
      <form className="add-expense-form" onSubmit={saveDetails}>
        <div className="add-expense-form__name">
          <label>Expense Name</label>
          <input
            type="text"
            value={formTitle}
            onChange={(event) => {
              getInputDetails("name", event.target.value);
            }}
          ></input>
        </div>

        <div className="add-expense-form__amount">
          <label>Amount</label>
          <input
            type="number"
            value={formAmount}
            onChange={(event) => {
              getInputDetails("amount", event.target.value);
            }}
          ></input>
        </div>

        <div className="add-expense-form__date">
          <label>Date</label>
          <input
            type="date"
            value={formDate}
            onChange={(event) => {
                getInputDetails("date", event.target.value);
              }}
          ></input>
        </div>

        <button>Submit</button>
      </form>
    </Card>
  );
};

export default AddExpense;
