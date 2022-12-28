import React from "react";
import { ThemeProvider } from "util/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <>
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
