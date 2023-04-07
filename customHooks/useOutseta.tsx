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
    const init = async () => {
      // Await injection of the script
      outsetaRef.current = await loadOutseta();
      // Get the access token from the callback url
      const accessToken =
        (router.query.access_token as string) || localStorage.getItem("token");
      if (accessToken) {
        // If there is an acccess token present
        // pass it along to Outseta
        outsetaRef.current.setAccessToken(accessToken);
        dispatch(setToken(accessToken));
        // const getUser:any=await asyncGetUser({})
        // dispatch(getUser)
        router.push(router.pathname);
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
    // router.push('/')
    dispatch(clearUser());
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
  return {openProfile,updateUser,logout,openLogin}
};

export default useOutseta;
