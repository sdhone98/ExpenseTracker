import './App.css'
import Expense from './components/Expense/Expense.jsx'
import AddExpense from './components/AddExpense/AddExpense.jsx'
const expenseData = [
  {
    "id": 1001,
    "name": "Testing Expense 1",
    "amount": 1000.00,
    "date": new Date(2024, 0,1)
  },
  {
    "id": 1002,
    "name": "Testing Expense 2",
    "amount": 2000.00,
    "date": new Date(2023, 1,2)
  },
  {
    "id": 1003,
    "name": "Testing Expense 4",
    "amount": 3000.50,
    "date": new Date(2022, 3,3)
  },
  {
    "id": 1004,
    "name": "Testing Expense 4",
    "amount": 4000.00,
    "date": new Date(2021, 4,24)
  }
]
function App() {

  return (
    <>
      <AddExpense/>
      {expenseData.map((obj) => <Expense data={obj}/> )}


    </>
  )
}

export default App
