import { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";
import Description from "../../Description";

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

      <Description
        url="https://usehooks.com/useDocumentTitle"
        description="useDocumentTitle allows you to dynamically update the title of a webpage."
      />
    </section>
  );
}
