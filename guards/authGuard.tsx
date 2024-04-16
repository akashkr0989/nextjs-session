"use client"
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const [isToken, setTokenStatus] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setTokenStatus(true);
    } else {
      router.replace("/auth/login");
    }
  }, [router]);

  // Optional: You can add a loading state while checking authentication.
  if (!isToken) {
    // Optionally, show a loading indicator or handle the initial render differently
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default AuthGuard;
