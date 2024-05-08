import { createContext } from "react";

const storedTheme = sessionStorage.getItem('theme') || (window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
const ThemeContext = createContext(storedTheme);

export default ThemeContext;