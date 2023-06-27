import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const AuthenticatedComponent: React.FC<any> = (props) => {
    const router = useRouter();

    // Replace 'token' with the key for your token in localStorage
    let token: string | null = "";
    if (typeof window !== "undefined") {
      // Replace 'token' with the key for your token in localStorage
      token = localStorage.getItem("token");
    }
    useEffect(() => {
      if (!token) {
        router.push("/");
      }
    }, []);

    if (!token) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
