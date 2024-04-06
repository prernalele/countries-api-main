import ModeSwitcher from "./ModeSwitcher";
import "./TopHeader.css";

function TopHeader() {
  return (
    <div class="container">
      <div class="headerTitle"> Where in the world ?</div>
      <ModeSwitcher modeClass="modeClass" />
    </div>
  );
}

export default TopHeader;
