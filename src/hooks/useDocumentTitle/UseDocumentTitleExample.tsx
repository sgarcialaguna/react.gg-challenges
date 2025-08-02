import { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";
import "./styles.css";

export default function UseDocumentTitle() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  useDocumentTitle(`Clicked ${count} times.`);

  return (
    <section>
      <h1>useDocumentTitle</h1>
      <button className="primary" onClick={handleClick}>
        Increment Count: {count}
      </button>
    </section>
  );
}
