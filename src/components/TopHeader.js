import ModeSwitcher from "./ModeSwitcher";
import "./TopHeader.css";

function TopHeader() {
  return (
    <div className="container">
      <h1 className="headerTitle">Where in the world ?</h1>
      <ModeSwitcher />
    </div>
  );
}

export default TopHeader;
