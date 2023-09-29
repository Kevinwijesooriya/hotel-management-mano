import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#ffc300",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  shape: {
    borderRadius: 20, // Set the border radius to 10
  },
});

export default Theme;