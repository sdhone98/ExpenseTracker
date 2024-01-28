import "./App.css";
import Expense from "./components/Expense/Expense.jsx";
import AddExpense from "./components/AddExpense/AddExpense.jsx";
import ExpenseFilter from "./components/Expense/ExpenseFilter.jsx";
import Card from "./components/UI/Card.jsx";
import { useState } from "react";
import ExpenseItem from "./components/Expense/ExpenseItem.jsx";

const expenseData = [
  {
    id: 1001,
    name: "Testing Expense 1",
    amount: 1000.0,
    date: new Date(2020, 7, 14),
  },
  {
    id: 1002,
    name: "Testing Expense 2",
    amount: 2000.0,
    date: new Date(2021, 2, 28),
  },
  {
    id: 1003,
    name: "Testing Expense 4",
    amount: 3000.5,
    date: new Date(2021, 5, 12),
  },
  {
    id: 1004,
    name: "Testing Expense 4",
    amount: 4000.0,
    date: new Date(2021, 2, 28),
  },
];

function App() {
  const [db, setDbData] = useState([]);

  const [availableYears, setavailableYears] = useState(["2020"]);
  const saveExpenseData = (expense) => {
    setDbData((prevDate) => {
      return [expense, ...prevDate];
    });

    setavailableYears((prevSatat) => {
      return [
        ...new Set([expense.date.getFullYear().toString(), ...prevSatat]),
      ];
    });
  };

  return (
    <>
      <AddExpense onExpenseDataHandeler={saveExpenseData} />
      <Expense data={db} dropDownYears={availableYears} />
    </>
  );
}

export default App;
