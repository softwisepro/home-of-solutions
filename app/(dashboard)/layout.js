"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getUser } from "@/utils/Session";

export default function DashboardLayout({children}) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();

      if (error) {
        push("/auth/login");
        return;
      }
      setIsSuccess(true);
    })();
  }, [push]);

  if (!isSuccess) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <header className="w-full flex border-gray-600 justify-between items-center p-5 text-gray-700 bg-white dark:text-gray-100 dark:bg-gray-900 border-b">
        <Link href='/dashboard'>
          Dashboard
        </Link>
        <Link href='/dashboard/settings'>
          Settings
        </Link>
      </header>

      {children}
    </main>
  );
}