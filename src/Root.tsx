import { Outlet, useLocation, useNavigate } from "react-router";
import allHooks from "./allHooks";

export default function Root() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <select
        style={{ marginInline: "auto", marginTop: "2rem" }}
        onChange={(event) => navigate(event.target.value)}
        defaultValue={location.pathname}
      >
        <option value="/">Navigate to a hook</option>
        {allHooks.map((hook) => (
          <option key={hook} value={`/${hook}`}>
            {hook}
          </option>
        ))}
      </select>
      <Outlet></Outlet>
    </>
  );
}
