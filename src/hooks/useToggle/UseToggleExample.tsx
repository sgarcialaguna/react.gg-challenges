/* eslint-disable @typescript-eslint/no-explicit-any */

import Description from "../../Description";
import useToggle from "./useToggle";
import "./styles.css";

function ToggleDemo({
  on,
  toggle,
}: {
  on: boolean;
  toggle: (state?: boolean) => void;
}) {
  return (
    <div>
      <label className="toggle">
        <input
          onChange={() => toggle()}
          className="toggle-checkbox"
          type="checkbox"
          checked={on}
        />
        <div className="toggle-switch"></div>
        <span className="toggle-label">{on ? "On" : "Off"}</span>
      </label>
    </div>
  );
}

export default function UseToggle() {
  const [on, toggle] = useToggle(true);

  return (
    <section>
      <h1>UseToggle</h1>
      <button disabled={on} className="link" onClick={() => toggle(true)}>
        Turn On
      </button>
      <button disabled={!on} className="link" onClick={() => toggle(false)}>
        Turn Off
      </button>
      <button className="link" onClick={() => toggle()}>
        Toggle
      </button>
      <button className="link" onClick={() => toggle("nope" as any)}>
        (Also toggles)
      </button>
      <ToggleDemo toggle={toggle} on={on} />
      <Description
        url="https://usehooks.com/usetoggle"
        description="A hook to toggle a boolean value"
      ></Description>
    </section>
  );
}
