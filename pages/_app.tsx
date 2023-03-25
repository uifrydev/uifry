// pages/_app.tsx
import { Provider } from "react-redux";
import { RootState, store } from "../store/store";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setIsAnimating } from "../store/slices/featues";
import { useEffect } from "react";
import { Progress } from "../components/progress/Progress";
import Sticker1 from "../components/Sticker/Sticker1";

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const isAnimating = useSelector((state: RootState) => state.features.isAnimating);
  const router1 = useRouter();
  useEffect(() => {
    const handleStart = () => {
      dispatch(setIsAnimating(true));
    };
    const handleStop = () => {
      dispatch(setIsAnimating(false));
    };

    router1.events.on("routeChangeStart", handleStart);
    router1.events.on("routeChangeComplete", handleStop);
    router1.events.on("routeChangeError", handleStop);

    return () => {
      router1.events.off("routeChangeStart", handleStart);
      router1.events.off("routeChangeComplete", handleStop);
      router1.events.off("routeChangeError", handleStop);
    };
  }, [router1]);

  return (
    <>
      <Progress isAnimating={isAnimating} />
      <main className={"relative"}>
        <Sticker1 classes={"!rounded-none mx-auto"} />
        <Component {...pageProps}  />
      </main>
    </>
  );
}

export default function App({ Component, pageProps,router }: AppProps) {
  return (
    <Provider store={store}>
      <MyApp Component={Component} pageProps={pageProps} router={router} />
    </Provider>
  );
}