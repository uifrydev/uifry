import React, {
  FC,
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import logo from "../../public/assets/images/logobeta.svg";
import userIcon from "../../public/assets/icons/user.svg";
import home from "../../public/assets/icons/home.svg";
import arrow from "../../public/assets/icons/arrow-fa.svg";
import star from "../../public/assets/icons/star.svg";
import setting from "../../public/assets/icons/setting.svg";
import proBadge from "../../public/assets/icons/pro-badge.svg";
import menu from "../../public/assets/icons/menu.svg";
import cross from "../../public/assets/icons/cross.svg";
import Image from "next/image";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateMenu, updateProModal } from "../../store/slices/featues";
import Link from "next/link";
import { HeaderProps } from "@/Interface/interface";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { loadOutseta } from "@/utils/outseta";
import { GetServerSideProps } from "next";
import { getUser } from "@/apis/user";
import { clearUser, setLoading, setToken, setUser } from "@/store/slices/auth";
import { asyncGetUser } from "@/store/thunk/userAsync";
import userss from "../../public/assets/images/users.svg";
import useOutseta from "@/customHooks/useOutseta";

const Header: FC<HeaderProps> = ({ breadcrums = [], title = [], istitle }) => {
  const features = useSelector((state: RootState) => state.features);
  const dispatch = useDispatch();
  const router = useRouter();
  const [status, setStatus] = useState<string>("init");
  const [isSetting, setSetting] = useState<boolean>();
  const outsetaRef = useRef<any>();
  const { user, token } = useSelector((state: RootState) => state.auth);
  // interface AuthResult {
  //   success: boolean;
  //   error?: string;
  // }
  // useEffect(() => {
  //   const init = async () => {
  //     // Await injection of the script
  //     outsetaRef.current = await loadOutseta();
  //     // Get the access token from the callback url
  //     const accessToken =
  //       (router.query.access_token as string) || localStorage.getItem("token");
  //     if (accessToken) {
  //       // If there is an acccess token present
  //       // pass it along to Outseta
  //       outsetaRef.current.setAccessToken(accessToken);
  //       dispatch(setToken(accessToken));
  //       // const getUser:any=await asyncGetUser({})
  //       // dispatch(getUser)
  //       router.push(router.pathname);
  //       // and clean up
  //       // router.push(router.pathname);
  //     }
  //     if (outsetaRef.current.getAccessToken()) {
  //       localStorage.setItem("token", outsetaRef.current.getAccessToken());
  //       updateUser();
  //       // Outseta initialized with an authenticated user.
  //     } else {
  //       // Outseta initialized without an authenticated user.
  //     }
  //   };

  //   init();

  //   return () => {
  //     // Clean up user related event subscriptions
  //   };
  // }, [router]);

  // const openLogin = async (options: any = {}): Promise<AuthResult> => {
  //   dispatch(setLoading(true));
  //   return new Promise((resolve, reject) => {
  //     if (!outsetaRef.current?.auth)
  //       return reject({ success: false, error: "auth is not available" });
  //     const authenticationCallbackUrl = "http://localhost:3000";
  //     try {
  //       outsetaRef.current.auth.open({
  //         widgetMode: "login",
  //         authenticationCallbackUrl: window.location.href,
  //         ...options,
  //       });
  //     } catch (error) {
  //       reject({ success: false, error });
  //     }
  //   });
  // };
  // const logout = () => {
  //   // Unset access token
  //   localStorage.removeItem("token");
  //   outsetaRef.current.setAccessToken("");
  //   // router.push('/')
  //   dispatch(clearUser());
  // };
  // const updateUser = async () => {
  //   // Fetch the current user data from outseta
  //   const outsetaUser = await outsetaRef.current.getUser();
  //   const { Account, Name, PrimaryContact, Email, FullName } = outsetaUser;
  //   // Update user state
  //   dispatch(setUser({ Account, Name, PrimaryContact, Email, FullName }));
  //   // Make sure status = ready
  //   setStatus("ready");
  // };
  // const openProfile = async (options: any) => {
  //   outsetaRef.current.profile.open({ tab: "profile", ...options });
  // };
  const { logout, openLogin, openProfile, updateUser } = useOutseta();
  
  return (
    <>
      {/* <div id="signup-embed"></div> */}

      <header
        className={`flex flex-col z-[154] bg-primary 
         sticky ${
           !user ? "top-[6.3rem]" : "top-0"
         } border-b-[1px] w-full border-border`}
      >
        <div className="flex w-full sm:flex-col">
          <Link
            href={"/"}
            className="py-[2.237rem] px-[3.95rem] lg:py-[2rem] mr-auto lg:pl-[2rem] min-lg:border-r-[1px]  min-lg:border-border"
          >
            <Image src={logo} alt={""} />
          </Link>
          {istitle == false && !features?.isMenu ? (
            <>
              <div className="flex flex-1 px-[4rem] sm:mb-[1.5rem] sm:pl-[2rem] items-center gap-[1.6rem]">
                <Image src={userss} alt="" />
                {user ? (
                  <p className="text-primaryBlack text-[1.6rem] mt-[12px]">
                    Welcome to UIFry!
                  </p>
                ) : (
                  <p className="text-primaryBlack text-[1.6rem] mt-[12px]">
                    Join{" "}
                    <span className="font-700 leading-[130%] ">56,000+</span>{" "}
                    designers today!
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              <div className=" lg:hidden py-[2.05rem] px-[4rem]  border-r-[1px] border-border">
                <p className="text-[3rem] font-700 leading-[4.1rem] font-safi">
                  <span className="gradient-text">{title[0]}</span> {title[1]}
                </p>
              </div>
              <div className="lg:hidden flex-1 flex items-center gap-[1.447rem] py-[2.9rem] pl-[4.1rem]">
                <div className="">
                  <Image src={home} alt={""} />
                </div>
                {breadcrums.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <div className="">
                        <Image src={arrow} alt={""} />
                      </div>
                      <span
                        className={`text-[1.6rem] ${
                          index == 0 ? "text-[#160042]" : "text-secondaryGray"
                        } leading-[150%] font-400`}
                      >
                        {item}
                      </span>
                    </Fragment>
                  );
                })}
                {/* <div className="">
            <Image src={arrow} alt={""} />
          </div>
          <span className="text-[1.6rem] text-[#6B7194] leading-[150%] font-400 ">
            UI Templates
          </span> */}
              </div>
            </>
          )}

          <div className="lg:hidden flex gap-[.963rem] items-center pr-[4rem]">
            {/* <Link
              href={
                "https://uifry.outseta.com/auth?widgetMode=register_or_login#o-anonymous"
              }
            > */}
            {/* <Button
              classes={
                "bg-gradient xl:!bg-[#fff] rounded-[5rem] xl:!p-[1.5rem]"
              }
              onClick={openProfile}
              // onClick={()=>window.open('https://uifry.outseta.com/auth?widgetMode=register#o-anonymous','_blank')}
            >
              <div className="flex gap-[.8rem]">
                <Image src={star} className="" alt="" />
                <span className="text-[#ffffff] font-[500] text-[1.6rem] flex xl:hidden satoshi">
                  Join Pro
                </span>
              </div>
            </Button> */}
            {/* </Link> */}
            {/* <Link
              href={
                "https://uifry.outseta.com/auth?widgetMode=register_or_login&planFamilyUid=wmjrZxmV&planPaymentTerm=month&skipPlanOptions=true#o-anonymous"
              }
            > */}
            {user ? (
              <div className="flex items-center gap-[1rem] py-[.5rem] px-[2rem] border-[1px] border-border rounded-full bg-[#fff] ">
                <span className="text-primaryBlack text-[1.6rem] font-700 leading-[2.4rem]">
                  {user?.FullName?.split(" ")[0]}
                </span>
                {user?.Account?.AccountStage &&
                user?.Account?.AccountStage != 5 ? (
                  <div className="px-[1.3rem] flex rounded-full gap-[.438rem] bg-gradient items-center py-[.5rem]">
                    <Image src={star} alt="" className="w-[1.2rem]" />
                    <span className="text-[1.1rem] font-700 satoshi text-[#fff]">
                      Pro
                    </span>
                  </div>
                ) : (
                  <></>
                )}
                <div className="relative ">
                  <Button
                    classes="!px-[.3rem]"
                    onClick={() => setSetting((prev) => !prev)}
                    // onBlur={() => setSetting(false)}
                  >
                    <Image alt="" src={setting} />
                  </Button>
                  {isSetting && (
                    <div
                      // tabIndex={1}
                      className="bg-[#fff] shadow-xl absolute top-[5rem] -left-[6rem] rounded-[.5rem] overflow-hidden"
                    >
                      <ul>
                        <li
                          onClick={(e) => {
                            setSetting(false);
                            openProfile(e);
                          }}
                          className="px-[2rem] font-700 py-[0.5rem] text-[1.6rem] cursor-pointer text-primaryBlack hover:bg-[#000]/[0.1]"
                        >
                          Profile
                        </li>
                        <li
                          onClick={(e) => {
                            setSetting(false);
                            logout();
                          }}
                          className="px-[2rem] py-[0.5rem] text-[1.6rem] font-700 cursor-pointer text-primaryBlack hover:bg-[#000]/[0.1]"
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <Button
                  classes={
                    "bg-gradient xl:!bg-[#fff] rounded-[5rem] xl:!p-[1.5rem]"
                  }
                  onClick={() => {
                    dispatch(updateProModal(true));
                    document.body.classList.add("!overflow-y-hidden");
                  }}
                  // onClick={()=>window.open('https://uifry.outseta.com/auth?widgetMode=register#o-anonymous','_blank')}
                >
                  <div className="flex gap-[.8rem]">
                    <Image src={star} className="" alt="" />
                    <span className="text-[#ffffff] font-[500] text-[1.6rem] flex xl:hidden satoshi">
                      Join Pro
                    </span>
                  </div>
                </Button>
                <Button
                  classes={
                    "bg-[#0A2540] xl:!bg-[#fff] rounded-[3.2rem]  xl:!p-[1.7rem]"
                  }
                  onClick={openLogin}
                >
                  <span className="text-[#ffffff] font-[500]  text-[1.6rem] xl:hidden leading-[150%] satoshi">
                    Login
                  </span>
                  <Image src={userIcon} alt="" className="min-xl:hidden" />
                </Button>
              </>
            )}
            {/* </Link> */}
          </div>
          <div
            onClick={() => dispatch(updateMenu(!features.isMenu))}
            className="hidden  lg:flex mr-[3.2rem] absolute right-0 top-[3.5rem] ml-auto cursor-pointer"
          >
            <Image src={features.isMenu ? cross : menu} alt={""} />
          </div>
        </div>
        {features.isMenu ? (
          <div className="flex flex-col py-[2rem] gap-[2rem] pl-[2rem] border-t-[1px] w-full min-lg:hidden border-border">
            <div className="mr-auto flex items-center gap-[1rem]">
              {/* <Button
                classes={"bg-gradient rounded-[5rem] !px-[2.2rem] !py-[1rem]"}
              >
                <div className="flex gap-[.8rem]">
                  <Image src={star} className="" alt="" />
                  <span className="text-[#ffffff] font-[500] text-[1.6rem] flex satoshi">
                    Join Pro
                  </span>
                </div>
              </Button>
              <Button
                classes={
                  "bg-[#0A2540]  rounded-[3.2rem] !px-[2.2rem] !py-[1rem]"
                }
              >
                <span className="text-[#ffffff] font-[500]  text-[1.6rem]  leading-[150%] satoshi">
                  Login
                </span>
              </Button> */}
              {user ? (
                <div className="flex items-center gap-[1rem] py-[.5rem] px-[2rem] border-[1px] border-border rounded-full bg-[#fff] ">
                  <span className="text-primaryBlack text-[1.6rem] font-700 leading-[2.4rem]">
                    {user?.FullName?.split(" ")[0]}
                  </span>
                  {user?.Account?.AccountStage  && user?.Account?.AccountStage != 5?<div className="px-[1.3rem] flex rounded-full gap-[.438rem] bg-gradient items-center py-[.5rem]">
                    <Image src={star} alt="" className="w-[1.2rem]" />
                    <span className="text-[1.1rem] font-700 satoshi text-[#fff]">
                      Pro
                    </span>
                  </div>:<></>}
                  <div className="relative ">
                    <Button
                      classes="!px-[.3rem]"
                      onClick={() => setSetting((prev) => !prev)}
                      // onBlur={() => setSetting(false)}
                    >
                      <Image alt="" src={setting} />
                    </Button>
                    {isSetting && (
                      <div
                        // tabIndex={1}
                        className="bg-[#fff] shadow-xl absolute top-[5rem] -left-[6rem] rounded-[.5rem] overflow-hidden"
                      >
                        <ul>
                          <li className="px-[2rem] py-[0.5rem] text-[1.6rem] cursor-pointer text-primaryBlack hover:bg-[#000]/[0.1]">
                            Profile
                          </li>
                          <li
                            onClick={logout}
                            className="px-[2rem] py-[0.5rem] text-[1.6rem] cursor-pointer text-primaryBlack hover:bg-[#000]/[0.1]"
                          >
                            Logout
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <Button
                    classes={"bg-gradient rounded-[5rem]"}
                    onClick={() => {
                      dispatch(updateProModal(true));
                      document.body.classList.add("!overflow-y-hidden");
                    }}
                    // onClick={()=>window.open('https://uifry.outseta.com/auth?widgetMode=register#o-anonymous','_blank')}
                  >
                    <div className="flex gap-[.8rem]">
                      <Image src={star} className="" alt="" />
                      <span className="text-[#ffffff] font-[500] text-[1.6rem] flex satoshi">
                        Join Pro
                      </span>
                    </div>
                  </Button>
                  <Button
                    classes={"bg-[#0A2540]  rounded-[3.2rem] "}
                    onClick={openLogin}
                  >
                    <span className="text-[#ffffff] font-[500]  text-[1.6rem] leading-[150%] satoshi">
                      Login
                    </span>
                  </Button>
                </>
              )}
            </div>
          </div>
        ) : (
          <div
            className={`flex flex-col py-[2rem] gap-[2rem] pl-[2rem] border-t-[1px] w-full min-lg:hidden  border-border ${
              true && "md:hidden"
            }`}
          >
            <div className={`border-r-[1px] border-border `}>
              <p className="text-[2.4rem] font-700 ">
                <span className="gradient-text">{title[0]}</span> {title[1]}
              </p>
            </div>
            <div className="flex-1 flex items-center gap-[1.447rem]  ">
              <div className="">
                <Image src={home} alt={""} />
              </div>
              {breadcrums.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <div className="">
                      <Image src={arrow} alt={""} />
                    </div>
                    <span
                      className={`text-[1.6rem] ${
                        index == 0 ? "text-[#160042]" : "text-secondaryGray"
                      } leading-[150%] font-400`}
                    >
                      {item}
                    </span>
                  </Fragment>
                );
              })}
            </div>
          </div>
        )}
      </header>
      <div
        className={`flex flex-col py-[2rem] gap-[2rem] pl-[2rem] border-t-[1px] w-full min-md:hidden bg-primary border-border ${
          istitle == false && "hidden"
        }`}
      >
        <div className={`border-r-[1px] border-border `}>
          <p className="text-[2.4rem] font-700 ">
            <span className="gradient-text">{title[0]}</span> {title[1]}
          </p>
        </div>
        <div className="flex-1 flex items-center gap-[1.447rem]  ">
          <div className="">
            <Image src={home} alt={""} />
          </div>
          {breadcrums.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className="">
                  <Image src={arrow} alt={""} />
                </div>
                <span
                  className={`text-[1.6rem] ${
                    index == 0 ? "text-[#160042]" : "text-secondaryGray"
                  } leading-[150%] font-400`}
                >
                  {item}
                </span>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
