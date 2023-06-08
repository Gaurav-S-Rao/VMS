import { Outlet } from "react-router-dom";
import Header from "./Header";
import PropTypes from "prop-types";
import Notification from "./Notification";
import useHandleRedirect from "../hooks/useHandleRedirect";

// const DrawerContent = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <Toolbar>
//         <Typography variant="h4" component="div">
//           Visitor Manager
//         </Typography>
//       </Toolbar>
//       <Divider />
//       <Paper
//         sx={{
//           backgroundColor: "#e6f2ff",
//           borderRadius: "10px",
//           height: "100px",
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "column",
//           alignItems: "center",
//           m: "10px",
//         }}
//       >
//         <Typography>
//           <b>Host Name: </b>
//           {hostDetails.name}
//         </Typography>
//         <Typography>
//           <b>Position:</b>
//           {hostDetails.position}
//         </Typography>
//       </Paper>
//       <List>
//         {listofmenuitems.map((element, index) => (
//           <ListItem key={element.name} disablePadding>
//             <ListItemButton
//               onClick={() => navigate(element.path)}
//               selected={location.pathname.split("/")[1] === element.path}
//               sx={{
//                 "&.Mui-selected": {
//                   backgroundColor: "primary.main",
//                   color: "#fff",
//                 },
//                 "&.Mui-selected:hover": {
//                   backgroundColor: "primary.main",
//                   color: "#fff",
//                 },
//                 mx: "10px",
//                 borderRadius: "10px",
//               }}
//             >
//               <ListItemIcon>
//                 {index % 2 === 0 ? <AddIcon /> : <SearchIcon />}
//               </ListItemIcon>
//               <ListItemText primary={element.name} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//     </div>
//   );
// };

function Layout() {
  useHandleRedirect();
  return (
    <>
      <Header />
      <Notification />
      <Outlet />
    </>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
