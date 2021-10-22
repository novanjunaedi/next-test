import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "../styles/globals.scss";
import "bootstrap/scss/bootstrap.scss";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
