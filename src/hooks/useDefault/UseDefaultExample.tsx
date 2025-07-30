import useDefault from "./useDefault";
import "./styles.css";
import Description from "../../Description";

export default function UseDefault() {
  const initialState = { name: "Tyler" };
  const defaultState = { name: "Ben" };
  const [user, setUser] = useDefault<{ name: string } | null>(
    initialState,
    defaultState
  );

  return (
    <section>
      <h1>useDefault</h1>

      <button
        title="Sets the value to Lynn"
        className="link"
        onClick={() => setUser({ name: "Lynn" })}
      >
        Lynn
      </button>
      <button
        title="Sets the value to Tyler"
        className="link"
        onClick={() => setUser({ name: "Tyler" })}
      >
        Tyler
      </button>
      <button
        title="Sets the value to null causing it to use the default value"
        className="link"
        onClick={() => setUser(null)}
      >
        null
      </button>
      <pre>
        <code>{JSON.stringify(user)}</code>
      </pre>

      <Description
        url="https://usehooks.com/usedefault"
        description="The useDefault hook behaves similar to useState but with one difference – if the state of the hook is undefined or null, useDefault will default the state to a provided default value."
      />
    </section>
  );
}
