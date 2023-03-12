import SidebarLink from "./SidebarLink";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

function SideBar() {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Registro Calificación", "Libro Clases", "Asistencia"].map(
              (text, index) => (
                <SidebarLink key={index} text={text} />
              )
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
export default SideBar;
