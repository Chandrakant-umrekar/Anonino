"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { User } from "next-auth";
import Image from "next/image";
import { LayoutDashboard, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const gradientBtn =
  "bg-gradient-to-r from-[#ff4500] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#ff4500] text-white font-semibold transition-all duration-300 hover:scale-105";

const Navbar = () => {
  const { data: session } = useSession();
  const user: User = session?.user as User;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    signOut();
  };

  const LogoutButton = ({ className = "" }: { className?: string }) => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={`${gradientBtn} ${className}`}>Logout</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-gray-800 dark:text-gray-100">
            Are you sure you want to logout?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600 dark:text-gray-300">
            You will need to login again to access your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleLogout}
            className="bg-gradient-to-r from-[#ff4500] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#ff4500] text-white transition-all duration-300"
          >
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  const ThemeToggle = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative rounded-full border-gray-200 dark:border-gray-700 hover:border-[#ff4500] dark:hover:border-[#ff8c00] transition-colors duration-300"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
      >
        {["light", "dark", "system"].map((t) => (
          <DropdownMenuItem
            key={t}
            onClick={() => setTheme(t)}
            className="capitalize hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {t}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-gray-200/80 bg-white/80 shadow-md backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80"
          : "border-transparent bg-white/50 backdrop-blur-sm dark:bg-gray-900/50"
      }`}
    >
      {/* gradient accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[#ff4500] via-[#ff8c00] to-[#ff4500]" />

      <div className="container relative mx-auto flex items-center justify-between px-4 py-2.5">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center outline-none"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#ff4500] to-[#ff8c00] opacity-0 transition duration-300 group-hover:opacity-30 blur" />
            <Image
              width={46}
              height={46}
              src="/logo.png"
              alt="Anonino logo"
              className="relative rounded-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="relative -start-2 rounded-e-md bg-[#f95919] pe-2 ps-0.5 text-lg font-medium text-white shadow-sm">
            nonino
          </span>
        </Link>

        {/* Desktop actions */}
        <div className="hidden items-center space-x-4 md:flex">
          <ThemeToggle />
          {session ? (
            <>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Welcome,{" "}
                <span className="bg-gradient-to-r from-[#ff4500] to-[#ff8c00] bg-clip-text font-semibold text-transparent">
                  {user?.username}
                </span>
              </span>
              <Link
                href="/dashboard"
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm ${gradientBtn}`}
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
              <LogoutButton />
            </>
          ) : (
            <Link href="/sign-in">
              <Button className={gradientBtn}>Login</Button>
            </Link>
          )}
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile panel */}
        {menuOpen && (
          <div className="absolute right-4 top-full mt-2 w-64 space-y-3 rounded-xl bg-white p-3 shadow-xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10 md:hidden">
            {session && (
              <p className="px-1 text-sm text-gray-600 dark:text-gray-300">
                Signed in as{" "}
                <span className="bg-gradient-to-r from-[#ff4500] to-[#ff8c00] bg-clip-text font-semibold text-transparent">
                  {user?.username}
                </span>
              </p>
            )}
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 ${gradientBtn}`}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <LogoutButton className="w-full" />
              </>
            ) : (
              <Link
                href="/sign-in"
                onClick={() => setMenuOpen(false)}
                className="block w-full"
              >
                <Button className={`w-full ${gradientBtn}`}>Login</Button>
              </Link>
            )}
            <div className="flex items-center justify-between rounded-lg bg-gray-100 p-1 dark:bg-gray-900">
              {["light", "dark", "system"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`flex-1 rounded-md py-1.5 text-xs font-medium capitalize transition-colors ${
                    theme === t
                      ? "bg-white text-[#ff4500] shadow dark:bg-gray-700 dark:text-[#ff8c00]"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
