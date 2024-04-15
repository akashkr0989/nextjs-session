import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: '#121212' // Change to a dark color for the background
    },
    primary: {
      main: '#64B5F6', // Adjust primary color to ensure visibility
    },
    secondary: {
      main: '#FFA726', // Adjust secondary color to ensure visibility
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Corrected the typo in font family
  },
});

export default theme;
