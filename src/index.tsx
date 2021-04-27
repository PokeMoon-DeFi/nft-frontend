import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@material-ui/core";
import WrapProvider from "./Providers";

ReactDOM.render(
  <WrapProvider>
    <CssBaseline />
    <App />
  </WrapProvider>,
  document.getElementById("root")
);
