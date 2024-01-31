import { useState } from "react";
import "./ExpenseFilter.scss";
const ExpenseFilter = (props) => {
  const [year, setYear] = useState(props.selected);
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
    setYear(event.target.value)
  };

  return (
    <div className="expense-filter">
      <label>Filter by year</label>
      <div>
        <select value={year} onChange={dropdownChangeHandler}>
          {props.years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
