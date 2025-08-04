import * as React from "react";
import useTimeout from "./useTimeout";
import "./styles.css";

function Bomb({
  hasExploded,
  hasDefused,
  handleClick,
}: {
  hasExploded: boolean;
  hasDefused: boolean;
  handleClick: React.MouseEventHandler;
}) {
  if (hasExploded) {
    return (
      <figure>
        <span role="img" aria-label="Explosion Emoji">
          💥
        </span>
        <figcaption>You lose</figcaption>
      </figure>
    );
  }

  if (hasDefused) {
    return (
      <figure>
        <span role="img" aria-label="Explosion Emoji">
          🎉
        </span>
        <figcaption>You Win</figcaption>
      </figure>
    );
  }

  return (
    <button className="bomb" onClick={handleClick}>
      <span role="img" aria-label="Dynamite Emoji">
        🧨
      </span>
    </button>
  );
}

export default function App() {
  const [hasDefused, setHasDefused] = React.useState(false);
  const [hasExploded, setHasExploded] = React.useState(false);

  const clear = useTimeout(() => {
    setHasExploded(!hasExploded);
  }, 1000);

  const handleClick = () => {
    clear();
    setHasDefused(true);
  };

  return (
    <section>
      <h1>useTimeout</h1>
      <p>You have 1s to defuse (click) the bomb or it will explode </p>
      <button
        className="link"
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </button>
      <Bomb
        hasDefused={hasDefused}
        hasExploded={hasExploded}
        handleClick={handleClick}
      />
    </section>
  );
}
