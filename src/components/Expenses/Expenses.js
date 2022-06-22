import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import "../UI/Card.css";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const data = props.data;
  const [filteredYear, setFilteredYear] = useState("2022");

  const onReadExpenseFilterHandler = (expenseFilterYear) => {
    setFilteredYear(expenseFilterYear);
  };

  const filteredData = data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          readExpenseFilter={onReadExpenseFilterHandler}
        />
        <ExpensesChart expenses={filteredData} />
        <ExpensesList data={filteredData} />
      </Card>
    </div>
  );
};

export default Expenses;
