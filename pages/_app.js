import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../styles/Home.module.css";
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;