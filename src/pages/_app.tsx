import ErrorModal from "components/ErrorModal";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "redux/store";
import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ErrorModal />
    </Provider>
  );
}

export default MyApp;
