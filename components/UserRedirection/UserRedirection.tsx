// hoc/withRedirectIfUserPresent.tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NextPage } from "next";

// const withRedirectIfUserPresent = <P,>(
//   WrappedComponent: NextPage<P>
// ): NextPage => {
//   const Wrapper: NextPage<P> = (props: P) => {
//     const [loading, setLoading] = useState(true);
//     const router = useRouter();
//     useEffect(() => {
//       const userIsPresent = !!localStorage.getItem("token");
//       // Replace this condition with your own user check logic
//       if (userIsPresent) {
//         router.back();
//       }
//       setLoading(false);
//     }, [router]);
//     if (loading) return <></>;
//     return <WrappedComponent {...props} />;
//   };

//   // return Wrapper;
// };
const withRedirectIfUserPresent=()=>{}
export default withRedirectIfUserPresent;
