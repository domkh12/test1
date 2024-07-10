import { MdDarkMode } from "react-icons/md";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
export default function NavBarComponent() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(false);  
  const darkTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });
  const handleDarkMode = () => {
    if (mode) {
      setMode(false);
    } else {
      setMode(true);
    }
  };

  const navigate = useNavigate();

  const handleGetStartClick = () => {
    navigate("/register"); // Redirect to '/register' on Get Start click
  };

  const handleLoginClick = () => {
    navigate("/login"); // Redirect to '/login' on Login click
  };

  useEffect(() => {
    // You can add logic here to trigger navigation based on certain conditions
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <nav className="fixed top-0 z-10 w-full drop-shadow-md">
        <div className="flex justify-between bg-white items-center px-20 py-2">
          <div className="flex justify-center items-center gap-4 cursor-pointer">
            <img
              width="30px"
              height="30px"
              src="public/logoHomepage.png"
              alt="logoHomepage"
            />
            <p className="text-xl font-semibold text-gray-700">Showcase</p>
          </div>
          <div>
            <ul className="flex justify-center items-center font-normal tracking-wider gap-7 w-40">
              <li className="hover:text-primary">Template</li>
              <li className="hover:text-primary">Features</li>
              <li className="hover:text-primary">About</li>
              <li className="hover:text-primary">Contact</li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-3">
            <MdDarkMode className="w-7 h-7 hover:scale-110 transition-all cursor-pointer" />
            <button onClick={handleLoginClick} className="px-7 hover:text-white py-3 hover:bg-primary rounded-md">
              Login
            </button>
            <button onClick={handleGetStartClick} className="px-7 bg-primary py-3 rounded-md text-white">
              Get Start
            </button>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
}
