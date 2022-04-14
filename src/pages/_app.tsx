import ErrorModal from "components/ErrorModal";
import type { AppProps } from "next/app";
import wrapper from "redux/store";
import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ErrorModal />
    </>
  );
}

export default wrapper.withRedux(MyApp);
