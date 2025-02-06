"use client";

import { useEffect, useState } from "react";

const SessionCheck = ({ children }: { children: React.ReactNode }) => {
  const [isSession, setIsSession] = useState<string | null>(null);

  useEffect(() => {
    const sessionKey = process.env.NEXT_PUBLIC_SESSION_KEY as string;
    setIsSession(sessionStorage.getItem(sessionKey));
  }, []);

  return isSession ? <>{children}</> : null;
};
export default SessionCheck;
