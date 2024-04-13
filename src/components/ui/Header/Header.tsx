import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex justify-between">
      <div>Currency converter</div>
      <NavLink to="/favorites">Избранное</NavLink>
    </div>
  );
};
