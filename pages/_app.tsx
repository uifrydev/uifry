// pages/_app.tsx
import { Provider } from "react-redux";
import { RootState, store } from "../store/store";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setIsAnimating, updateMenu } from "../store/slices/featues";
import { useEffect, useRef } from "react";
import { Progress } from "../components/progress/Progress";
import Sticker1 from "../components/Sticker/Sticker1";
import { setToken, setUser } from "@/store/slices/auth";
import { getUser } from "@/apis/user";
import { asyncGetUser } from "@/store/thunk/userAsync";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Console } from "console";
import { AnyAction } from "@reduxjs/toolkit";
import ProModal from "@/components/ProModal/ProModal";
import { loadOutseta } from "@/utils/outseta";
import FAQsModal from "@/components/FAQModal/FAQModal";
// Add this function before the `MyApp` component definition

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const outsetaRef = useRef<any>();
  const { isAnimating, proModal, faqModal } = useSelector(
    (state: RootState) => state.features
  );
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      dispatch(setIsAnimating(true));
    };
    const handleStop = () => {
      dispatch(setIsAnimating(false));
    };
    dispatch(updateMenu(false))
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  // useEffect(() => {
  //   const init = async () => {
  //     outsetaRef.current = await loadOutseta();
  //     const accessToken = localStorage.getItem("token");
  //     if (accessToken) {
  //       outsetaRef.current.setAccessToken(accessToken);
  //       updateUser();
  //     }
  //   };
  //   init();
  // }, []);
  // const updateUser = async () => {
  //   // Fetch the current user data from outseta
  //   const outsetaUser = await outsetaRef.current.getUser();
  //   const { Account, Name, PrimaryContact, Email, FullName } = outsetaUser;
  //   // Update user state
  //   dispatch(setUser({ Account, Name, PrimaryContact, Email, FullName }));
  //   // Make sure status = ready
  // };
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
        {proModal && <ProModal classes="" />}
        {faqModal && <FAQsModal />}
        <Component {...pageProps} />
      </main>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   // ...
//   try {
//     const res = await getUser();
//     const user = await res;
//     return {
//       props: {
//         user,
//       },
//     };
//   } catch (err) {
//     return { props: {} };
//   }
// };

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <MyApp Component={Component} pageProps={pageProps} router={router} />
    </Provider>
  );
}
