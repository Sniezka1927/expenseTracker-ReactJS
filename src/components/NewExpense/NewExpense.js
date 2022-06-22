import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);
  const onSaveExpenseDataHandle = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddExpense(false);
  };

  const startAddingHandler = () => {
    setAddExpense(true);
  };

  const stopAddingHandler = () => {
    setAddExpense(false);
  };
  return (
    <div className="new-expense">
      {!addExpense && (
        <button onClick={startAddingHandler}>Add New Expense</button>
      )}
      {addExpense && (
        <ExpenseForm
          cancelAdding={stopAddingHandler}
          onSaveExpenseData={onSaveExpenseDataHandle}
        />
      )}
    </div>
  );
};

export default NewExpense;
