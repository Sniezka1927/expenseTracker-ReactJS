import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const expenseMonth = props.date.toLocaleString("en-GB", { month: "long" });
  const expenseDay = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const expenseYear = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__day">{expenseDay}</div>
      <div className="expense-date__year">{expenseYear}</div>
    </div>
  );
};

export default ExpenseDate;
