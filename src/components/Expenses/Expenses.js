import React, { useState } from "react";
import ExpenseItems from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [year, setSelectedYear] = useState("2020");
  const pickedyear = (year) => {
    // console.log("In picked year");
    setSelectedYear(year);
    // console.log(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onPickedYear={pickedyear} />
        <ExpenseItems
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItems
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItems
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItems
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;