import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function SummaryCards() {
  const { transactions } = useContext(AppContext);

  let income = 0, expenses = 0;

  transactions.forEach(t => {
    t.type === "income" ? income += t.amount : expenses += t.amount;
  });

  return (
    <div className="summary">
      <div className="card">Balance: ₹{income - expenses}</div>
      <div className="card">Income: ₹{income}</div>
      <div className="card">Expenses: ₹{expenses}</div>
    </div>
  );
}