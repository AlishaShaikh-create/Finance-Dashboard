import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Transactions() {
  const {
    transactions,
    search,
    setSearch,
    filter,
    setFilter,
    role,
    addTransaction
  } = useContext(AppContext);

  const filtered = transactions.filter(t =>
    (filter === "all" || t.type === filter) &&
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    const amount = prompt("Amount:");
    const category = prompt("Category:");
    const type = prompt("income or expense");

    if (!amount || !category || !type) return;

    addTransaction({
      date: new Date().toISOString().split("T")[0],
      amount: Number(amount),
      category,
      type
    });
  };

  return (
    <>
      <div className="controls">
        <input placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {role === "admin" && <button onClick={handleAdd}>Add</button>}
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td>₹{t.amount}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}