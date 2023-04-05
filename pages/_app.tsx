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
import { setToken } from "@/store/slices/auth";
import { getUser } from "@/apis/user";
import { asyncGetUser } from "@/store/thunk/userAsync";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Console } from "console";
import { AnyAction } from "@reduxjs/toolkit";
import ProModal from "@/components/ProModal/ProModal";

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const { isAnimating, proModal } = useSelector(
    (state: RootState) => state.features
  );
  const user = useSelector((state: RootState) => state.auth.user);
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
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const token = localStorage.getItem("token");
  //     console.log({ tkn: token });
  //     if (token) {
  //       dispatch(setToken(token));
  //     }
  //     const action: any = await asyncGetUser({});
  //     dispatch(action);
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <Progress isAnimating={isAnimating} />
      <main className={"relative"}>
        {!user && <Sticker1 classes={"!rounded-none mx-auto"} />}
        {proModal && <ProModal />}
        <Component {...pageProps} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // ...
  try {
    const res = await getUser();
    const user = await res;
    return {
      props: {
        user,
      },
    };
  } catch (err) {
    return { props: {} };
  }
};

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <MyApp Component={Component} pageProps={pageProps} router={router} />
    </Provider>
  );
}
