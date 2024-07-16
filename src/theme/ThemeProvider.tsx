import { ThemeProvider as MuiThemeProvider } from "@emotion/react";
import {
  CssBaseline,
  StyledEngineProvider,
  Theme,
  ThemeOptions,
  createTheme,
} from "@mui/material";
import { blue, green, grey, red, yellow } from "@mui/material/colors";
import { RootState } from "../redux/store/store";
import { useSelector } from "react-redux";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // theme
  const { theme: themeMode } = useSelector((state: RootState) => state.setting);

  // MUI default theme
  const defaultTheme: Theme = createTheme();

  // MUI custome theme
  const customeTheme: ThemeOptions = {
    palette: {
      mode: themeMode === "dark" ? "dark" : "light",
      primary: {
        main: blue[800],
        contrastText: "#fff",
      },
      secondary: {
        light: grey[200],
        main: grey[900],
        contrastText: "#fff",
      },
      success: {
        light: green[100],
        main: green[500],
        dark: green[900],
        contrastText: "#fff",
      },
      error: {
        light: red[100],
        main: red[500],
        dark: red[900],
        contrastText: "#fff",
      },
      warning: {
        light: yellow[100],
        main: yellow[500],
        dark: yellow[900],
        contrastText: "#fff",
      },
    },
    components: {
      // Button component
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            color: "#fff",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },

      // iconButton component
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#fff",
          },
        },
      },

      // AppBar component
      MuiAppBar: {
        styleOverrides: {
          root: {
            borderRadius: "5px",
            boxShadow: "none",
          },
        },
      },
      // container component
      MuiContainer: {
        styleOverrides: {
          root: {
            // mobile size
            [defaultTheme.breakpoints.up("xs")]: {
              padding: "2px 5px",
              maxWidth: "600px",
            },
            // tablet size
            [defaultTheme.breakpoints.up("sm")]: {
              padding: "10px 5px",
              maxWidth: "900px",
            },
            // tablet & mobile size
            [defaultTheme.breakpoints.up("md")]: {
              padding: "10px",
              maxWidth: "1200px",
            },
            // big desktop size
            [defaultTheme.breakpoints.up("lg")]: {
              padding: "10px",
              maxWidth: "1536px",
            },
            // Tv size
            [defaultTheme.breakpoints.up("xl")]: {
              padding: "5px 10px",
              maxWidth: "1920px",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: "none",
          },
        },
      },
    },

    typography: {
      fontFamily: "Open Sans",
      h1: {
        // mobile size
        [defaultTheme.breakpoints.only("xs")]: {
          fontSize: "24px",
          fontWeight: "600",
        },
        // tablet size
        [defaultTheme.breakpoints.only("sm")]: {
          fontSize: "27px",
          fontWeight: "600",
        },
        // tablet & desktop size
        [defaultTheme.breakpoints.only("md")]: {
          fontSize: "30px",
          fontWeight: "600",
        },
        // big desktop size
        [defaultTheme.breakpoints.only("lg")]: {
          fontSize: "33px",
          fontWeight: "600",
        },
        // TV size
        [defaultTheme.breakpoints.only("xl")]: {
          fontSize: "36px",
          fontWeight: "600",
        },
      },
      body1: {
        textAlign: "justify",
        // mobile size
        [defaultTheme.breakpoints.only("xs")]: {
          fontSize: "16px",
        },
        // tablet size
        [defaultTheme.breakpoints.only("sm")]: {
          fontSize: "17px",
        },
        // tablet & desktop size
        [defaultTheme.breakpoints.only("md")]: {
          fontSize: "18px",
        },
        // big desktop size
        [defaultTheme.breakpoints.only("lg")]: {
          fontSize: "17px",
        },
        // TV size
        [defaultTheme.breakpoints.only("xl")]: {
          fontSize: "17px",
        },
      },
    },
  };

  const theme = createTheme(customeTheme);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
