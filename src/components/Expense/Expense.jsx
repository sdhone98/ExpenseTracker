import { useState } from "react";
import "./Expense.scss";
import ExpenseFilter from "./ExpenseFilter.jsx";
import ExpenseItem from "./ExpenseItem.jsx";
import ChartBar from "../ChartBar/ChartBar.jsx";
import ExpenseChart from "./ExpenseChart.jsx";
import ExpenseList from "./ExpenseList.jsx";

const Expense = (props) => {
  const [filterYear, setfilterYear] = useState("2019");

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setfilterYear(selectedYear);
  };

  let expensesContent = <p>No expenses found.</p>;
  return (
    <div className="expense">
      <ExpenseFilter
        years={props.dropDownYears}
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <div className="expense-list">
        <ExpenseList items={filteredExpenses} />
      </div>

      {/* {expensesContent} */}
    </div>
  );
};

export default Expense;
