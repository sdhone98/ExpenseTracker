import { useState } from "react";
import "./AddExpense.scss";
import Card from "../UI/Card";
const AddExpense = (props) => {
  const [formTitle, setFormTitle] = useState("");
  const [formAmount, setFormAmount] = useState("");
  const [formDate, setFormDate] = useState("");
  const [expenseFormVisibility, setexpenseFormVisibility] = useState(false)
  const [expenseError, setExpenseError] = useState(false)
  const [amountError, setAmountError] = useState(false)
  const [dateError, setDateError] = useState(false)

  const getInputDetails = (trigger, value) => {
    if (trigger === "name") {
      setFormTitle(value);
    } else if (trigger === "amount") {
      setFormAmount(value);
    } else if (trigger === "date") {
      setFormDate(value);
    }
  };

  const saveDetails = (event) => {
    setexpenseFormVisibility(true);

    !formTitle && setExpenseError(true)
    !formTitle && setAmountError(true)
    !formTitle && setDateError(true)

    if (formTitle && formAmount && formDate) {
      event.preventDefault();
      const formData = {
        id: Math.random(),
        name: formTitle,
        amount: formAmount,
        date: new Date(formDate),
      };
      props.onExpenseDataHandeler(formData);
      setFormTitle("");
      setFormAmount("");
      setFormDate("");
    }
  };

  const visibilityHandler = (event) => {
    event.preventDefault();
    setexpenseFormVisibility(expenseFormVisibility ? false : true);
  }

  return (
    <Card className="add-expense">
      <div className="add-expense-btn" style={{display: expenseFormVisibility ? "none" : "flex"}}>
      <button onClick={visibilityHandler}>Add Expense</button>
      </div>
      <form className="add-expense-form" 
      onSubmit={saveDetails}
      style={{display: expenseFormVisibility ? "flex" : "none"}}>
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

        <div className="submit-btn-div">
          <button>Submit</button>
          <button onClick={visibilityHandler}>Close</button>
        </div>
      </form>
    </Card>
  );
};

export default AddExpense;
