"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const [isToken, setTokenStatus] = useState(false);

  const [isloaded, setLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.replace("/");
      setTokenStatus(true);
    } else {
      router.replace("/auth/login");
      localStorage.clear();
    }
  }, [router]);

  useEffect(() => {
    if (isToken) {
      setLoaded(true);
    }
  }, [isToken]);

  //   if (!isToken) {
  //     // Optionally, show a loading indicator or handle the initial render differently
  //     return <div>Logginer</div>;
  //   }
  return isloaded ? <> {children}</> : <></>;
};

export default AuthGuard;
