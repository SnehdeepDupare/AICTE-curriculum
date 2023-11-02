"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DarkModeToggle } from "./DarkModeToggle";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const links = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Dashboard",
      route: "/dashboard",
    },
    {
      label: "Curriculum",
      route: "/curriculum",
    },
    {
      label: "Resources",
      route: "/resources",
    },
  ];

  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <header className="max-w-7xl mx-auto flex items-center justify-between p-5">
      <div className="flex items-center space-x-2">
        <Image
          src="/assets/images/aictelogo.png"
          alt="logo"
          height={72}
          width={72}
        />
        <h2 className="font-bold text-lg hidden md:block">
          All India Council for Technical Education
        </h2>
      </div>

      <div className="flex items-center space-x-5">
        <div className="hidden md:flex space-x-5">
          {links.map((link) => (
            <Link key={link.label} href={link.route}>
              {link.label}
            </Link>
          ))}
        </div>

        <DarkModeToggle />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <button className="md:hidden" onClick={toggleNavbar}>
          Open
        </button>

        {open && (
          <div className="fixed h-screen bg-black w-full right-0 top-0 z-20 p-5">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={toggleNavbar}>
                <Image
                  src="/assets/images/aictelogo.png"
                  alt="logo"
                  height={72}
                  width={72}
                />
              </Link>

              <div className="flex space-x-5">
                <DarkModeToggle />
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <button onClick={toggleNavbar}>Close</button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-8 mt-16">
              {links.map((link) => {
                return (
                  <div className="overflow-hidden">
                    <div>
                      <Link
                        href={link.route}
                        key={link.label}
                        onClick={toggleNavbar}
                      >
                        {link.label}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
