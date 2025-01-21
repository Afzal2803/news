import Preloader from "@/components/elements/Preloader";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Provider } from "react-redux";
// import store from "@/store";
import { store } from "@/store";

import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/css/font-awesome.min.css";
import "@/public/assets/css/lightcase.css";
import "@/public/assets/css/meanmenu.min.css";
import "@/public/assets/css/nice-select.min.css";
import "@/public/assets/css/owl.carousel.min.css";
import "@/public/assets/css/animate.min.css";
import "@/public/assets/css/main.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {!loading ? (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default MyApp;
