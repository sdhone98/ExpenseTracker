import "./App.css";
import Expense from "./components/Expense/Expense.jsx";
import AddExpense from "./components/AddExpense/AddExpense.jsx";
import { useState } from "react";

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

  console.log([new Date().getFullYear()])

  return (
    <>
      <AddExpense onExpenseDataHandeler={saveExpenseData} />
      <Expense data={db} dropDownYears={availableYears} />
    </>
  );
}

export default App;
