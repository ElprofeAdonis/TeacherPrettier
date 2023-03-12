import BarLink from "@mui/material/Link";
import "./SideBar.jsx";

function SidebarLink({ text }) {
  return (
    <BarLink
      className="SideBarLink"
      href="#"
      underline="none"
      sx={{ display: "block", p: 1, color: "text.secondary" }}
    >
      {text}
    </BarLink>
  );
}
export default SidebarLink;
