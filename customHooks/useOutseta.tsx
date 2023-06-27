import { clearUser, setLoading, setToken, setUser } from "@/store/slices/auth";
import { RootState } from "@/store/store";
import { loadOutseta } from "@/utils/outseta";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const useOutseta = () => {
  const outsetaRef = useRef<any>();
  const router = useRouter();
  const { user, token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  interface AuthResult {
    success: boolean;
    error?: string;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const buttons=document.querySelectorAll('.o--Button--btn')
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];

      // let span=button.innerHTML
      let spanElement=button.children[0]
      if(spanElement.textContent=='Cancel subscription'){
        document.getElementsByClassName('o--Button--btn')[i].classList.add('red')
      }
      // Do something with each button, for example:
    }
    }, 1000);

    // Clean up the interval when the component unmounts or the dependency array changes
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const init = async () => {
     
      
      // Await injection of the script
      outsetaRef.current = await loadOutseta();
      // Get the access token from the callback url
      const accessToken =
        (router.query.access_token as string) || localStorage.getItem("token");
      if (router.query.access_token) {
        // router.push(router.pathname);
        const { query } = router;

        // Remove the access_token from the query object
        delete query.access_token;
      
        // Update the URL without a page refresh, and replace the current history entry
        router.push(
          {
            pathname: router.pathname,
            query,
          },
          undefined,
          { shallow: true }
        );
      }
      if (accessToken) {
        // If there is an acccess token present
        // pass it along to Outseta
        outsetaRef.current.setAccessToken(accessToken);
        dispatch(setToken(accessToken));
        // const getUser:any=await asyncGetUser({})
        // dispatch(getUser)
        // and clean up
        // router.push(router.pathname);
      }
      if (outsetaRef.current.getAccessToken()) {
        localStorage.setItem("token", outsetaRef.current.getAccessToken());
        updateUser();
        // Outseta initialized with an authenticated user.
      } else {
        // Outseta initialized without an authenticated user.
      }
    };

    init();

    return () => {
      // Clean up user related event subscriptions
    };
  }, [router]);
// 694144269127-0debpg71529duua0p22pbvmslifaq86o.apps.googleusercontent.com
  const openLogin = async (options: any = {}): Promise<AuthResult> => {
    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      if (!outsetaRef.current?.auth)
        return reject({ success: false, error: "auth is not available" });
      const authenticationCallbackUrl = "http://localhost:3000";
      try {
        outsetaRef.current.auth.open({
          widgetMode: "login",
          authenticationCallbackUrl: window.location.href,
          ...options,
        });
      } catch (error) {
        reject({ success: false, error });
      }
    });
  };
  const logout = () => {
    // Unset access token
    localStorage.removeItem("token");
    outsetaRef.current.setAccessToken("");
    // router.push('/?o-logout-link')
    dispatch(clearUser());
    // outsetaRef.current.auth.logout();
  };
  const updateUser = async () => {
    // Fetch the current user data from outseta
    const outsetaUser = await outsetaRef.current.getUser();
    const { Account, Name, PrimaryContact, Email, FullName } = outsetaUser;
    // Update user state
    dispatch(setUser({ Account, Name, PrimaryContact, Email, FullName }));
    // Make sure status = ready
  };
  const openProfile = async (options: any) => {
    outsetaRef.current.profile.open({ tab: "profile", ...options });
  };
  return { openProfile, updateUser, logout, openLogin };
};

export default useOutseta;
