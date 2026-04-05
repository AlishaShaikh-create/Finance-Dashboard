import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  let categories = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categories[t.category] = (categories[t.category] || 0) + t.amount;
    }
  });

  const top = Object.keys(categories).reduce(
    (a, b) => categories[a] > categories[b] ? a : b,
    "None"
  );

  return (
    <div className="insights">
      <h2>Insights</h2>
      <p>Highest spending category: {top}</p>
      <p>Track consistently to improve savings.</p>
    </div>
  );
}