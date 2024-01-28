import "./App.css";
import Expense from "./components/Expense/Expense.jsx";
import AddExpense from "./components/AddExpense/AddExpense.jsx";
import ExpenseFilter from "./components/Expense/ExpenseFilter.jsx";
import Card from "./components/UI/Card.jsx";
import { useState } from "react";

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
  let temp = [
    {
      id: 1001,
      name: "Testing Expense 1",
      amount: 1000.0,
      date: new Date(2020, 7, 14),
    },
  ];
  const [db, setDbData] = useState(expenseData);
  const [listExpenseData, setlistExpenseData] = useState([]);
  const [year, setYear] = useState("2020");

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

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
    filterDbData();
    
  };

  const filterDbData = () => {
    const temp = []
    db.filter((obj)=> {
      if (obj.date.getFullYear().toString() === year){
        temp.push(obj)
      }
    })
    setlistExpenseData(temp)

  }

  return (
    <>
      <AddExpense onExpenseDataHandeler={saveExpenseData} />
      <ExpenseFilter
        years={availableYears}
        selected={year}
        onChangeFilter={filterChangeHandler}
      />
      <Expense data={listExpenseData} />
    </>
  );
}

export default App;
