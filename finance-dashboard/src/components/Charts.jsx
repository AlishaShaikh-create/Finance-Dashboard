import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";

export default function Charts() {
  const { transactions } = useContext(AppContext);
  const trendRef = useRef();
  const catRef = useRef();

  useEffect(() => {
    const ctx = trendRef.current.getContext("2d");
    ctx.clearRect(0, 0, 400, 200);

    let balance = 0;
    ctx.beginPath();

    transactions.forEach((t, i) => {
      balance += t.type === "income" ? t.amount : -t.amount;
      ctx.lineTo(i * 50 + 10, 150 - balance / 50);
    });

    ctx.stroke();

    const cctx = catRef.current.getContext("2d");
    cctx.clearRect(0, 0, 400, 200);

    let categories = {};
    transactions.forEach(t => {
      if (t.type === "expense") {
        categories[t.category] = (categories[t.category] || 0) + t.amount;
      }
    });

    let i = 0;
    for (let cat in categories) {
      cctx.fillRect(i * 60 + 20, 150 - categories[cat] / 10, 40, categories[cat] / 10);
      cctx.fillText(cat, i * 60 + 20, 170);
      i++;
    }

  }, [transactions]);

  return (
    <div className="charts">
      <canvas ref={trendRef} width={400} height={200} />
      <canvas ref={catRef} width={400} height={200} />
    </div>
  );
}