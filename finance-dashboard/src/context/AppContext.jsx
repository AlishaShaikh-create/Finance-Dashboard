import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const initialData = JSON.parse(localStorage.getItem("transactions")) || [
  { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
  { id: 2, date: "2026-04-02", amount: 200, category: "Food", type: "expense" },
  { id: 3, date: "2026-04-03", amount: 1000, category: "Freelance", type: "income" },
  { id: 4, date: "2026-04-04", amount: 500, category: "Shopping", type: "expense" }
];

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialData);
  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (data) => {
    setTransactions([...transactions, { id: Date.now(), ...data }]);
  };

  return (
    <AppContext.Provider value={{
      transactions,
      role,
      setRole,
      search,
      setSearch,
      filter,
      setFilter,
      addTransaction
    }}>
      {children}
    </AppContext.Provider>
  );
};