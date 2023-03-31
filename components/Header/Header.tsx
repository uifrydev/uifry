import React, {
  FC,
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import logo from "../../public/assets/images/logobeta.svg";
import home from "../../public/assets/icons/home.svg";
import arrow from "../../public/assets/icons/arrow-fa.svg";
import star from "../../public/assets/icons/star.svg";
import setting from "../../public/assets/icons/setting.svg";
import menu from "../../public/assets/icons/menu.svg";
import cross from "../../public/assets/icons/cross.svg";
import Image from "next/image";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateMenu } from "../../store/slices/featues";
import Link from "next/link";
import { HeaderProps } from "@/Interface/interface";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { loadOutseta } from "@/utils/outseta";
import { GetServerSideProps } from "next";
import { getUser } from "@/apis/user";
import { clearUser } from "@/store/slices/auth";

interface OutsetaLoginModalProps {
  onLoginSuccess?: () => void;
}
const Header: FC<HeaderProps> = ({ breadcrums = [], title = [] }) => {
  const features = useSelector((state: RootState) => state.features);
  const dispatch = useDispatch();
  const router = useRouter();
  const [status, setStatus] = useState<string>("init");
  const [user, setUser] = useState<any>();
  const outsetaRef = useRef<any>();
  const userDetails = useSelector((state: RootState) => state.auth.user);
  useEffect(() => {
    const init = async () => {
      // Await injection of the script
      outsetaRef.current = await loadOutseta();
      // Get the access token from the callback url
      const accessToken = router.query.access_token as string;
      if (accessToken) {
        // If there is an acccess token present
        // pass it along to Outseta
        outsetaRef.current.setAccessToken(accessToken);

        // and clean up
        // router.push(router.pathname);
      }

      if (outsetaRef.current.getAccessToken()) {
        localStorage.setItem("token", outsetaRef.current.getAccessToken());
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

  const openLogin = async (options: any = {}) => {
    if (!outsetaRef.current?.auth) return;
    outsetaRef.current.auth.open({
      widgetMode: "login|register",
      authenticationCallbackUrl: window.location.href,
      ...options,
    });
    
  };
  const logout = () => {
    // Unset access token
    localStorage.removeItem('token')
    outsetaRef.current.setAccessToken("");
    // and remove user state
    dispatch(clearUser())
  };
  return (
    <>
      {/* <div id="signup-embed"></div> */}
      <header className="flex flex-col z-[154] bg-primary  sticky top-[6.3rem] border-b-[1px] w-full border-[#efe9ff]">
        <div className="flex w-full">
          <Link
            href={"/"}
            className="py-[2.237rem] px-[3.95rem] lg:py-[2rem] lg:pl-[2rem] min-lg:border-r-[1px]  min-lg:border-[#efe9ff]"
          >
            <Image src={logo} alt={""} />
          </Link>
          <div className=" lg:hidden py-[2.05rem] px-[4rem]  border-r-[1px] border-[#efe9ff]">
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
          <div className="lg:hidden flex gap-[.963rem] items-center pr-[4rem]">
            {/* <Link
              href={
                "https://uifry.outseta.com/auth?widgetMode=register_or_login#o-anonymous"
              }
            > */}
            <Button
              classes={
                "bg-gradient xl:!bg-[#fff] rounded-[5rem] xl:!p-[1.5rem]"
              }
              // onClick={()=>window.open('https://uifry.outseta.com/auth?widgetMode=register#o-anonymous','_blank')}
            >
              <div className="flex gap-[.8rem]">
                <Image src={star} className="" alt="" />
                <span className="text-[#ffffff] font-[500] text-[1.6rem] flex xl:hidden satoshi">
                  Join Pro
                </span>
              </div>
            </Button>
            {/* </Link> */}
            {/* <Link
              href={
                "https://uifry.outseta.com/auth?widgetMode=register_or_login&planFamilyUid=wmjrZxmV&planPaymentTerm=month&skipPlanOptions=true#o-anonymous"
              }
            > */}
            {userDetails ? (
              <>
                <Button onClick={logout}>
                  <Image alt="" src={setting} />
                </Button>
              </>
            ) : (
              <Button
                classes={
                  "bg-[#0A2540] xl:!bg-[#fff] rounded-[3.2rem]  xl:!p-[1.7rem]"
                }
                onClick={openLogin}
              >
                <span className="text-[#ffffff] font-[500]  text-[1.6rem] xl:hidden leading-[150%] satoshi">
                  Login
                </span>
                <Image src={user} alt="" className="min-xl:hidden" />
              </Button>
            )}
            {/* </Link> */}
          </div>
          <div
            onClick={() => dispatch(updateMenu(!features.isMenu))}
            className="hidden  lg:flex mr-[3.2rem] ml-auto cursor-pointer"
          >
            <Image src={features.isMenu ? cross : menu} alt={""} />
          </div>
        </div>
        <div className="flex flex-col py-[2rem] gap-[2rem] pl-[2rem] border-t-[1px] w-full min-lg:hidden border-[#efe9ff]">
          {features.isMenu ? (
            <div className="mr-auto flex items-center gap-[1rem]">
              <Button
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
              </Button>
            </div>
          ) : (
            <>
              <div className=" border-r-[1px] border-[#efe9ff]">
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
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
