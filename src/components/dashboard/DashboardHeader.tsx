"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { UserDropdown } from "./elements/UserDropdown";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { BellIcon } from "lucide-react";
import SearchBar from "./elements/SearchBar";
export default function DashboardHeader() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const unreadCount = 3;
  const getBreadcrumbs = () => {
    const paths = pathname.split("/").filter(Boolean);

    return paths.map((path, index) => {
      const href = `/${paths.slice(0, index + 1).join("/")}`;
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      };
    });
  };

  const breadcrumbs = getBreadcrumbs();

  const showBreadcrumbs = pathname !== "/dashboard";

  return (
    <header className="fixed top-0 z-50 border-b bg-card shadow-sm">
      <div className="w-screen flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className=" items-center gap-1 ">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="flex shrink-0">
                <BreadcrumbLink href="/dashboard">
                  <Image
                    src="/tawa-logo.svg"
                    alt="Main"
                    width={30}
                    height={30}
                    className="opacity-75 filter dark:invert"
                    unoptimized
                  />
                </BreadcrumbLink>
              </BreadcrumbItem>

              {showBreadcrumbs &&
                breadcrumbs.map((crumb, i) => (
                  <div
                    key={crumb.href}
                    className="hidden sm:flex items-center space-x-1"
                  >
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href={crumb.href}
                        className="py-2 rounded-xl hover:text-purple-400 hover-text-radial-purple"
                      >
                        {crumb.label}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </div>
                ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <SearchBar />
        <div className="flex flex-row space-x-2  items-center justify-center ">
          <Button
            variant="ghost"
            size="icon"
            className="relative border border-transparent rounded-full text-muted-foreground h-fit w-fit p-2 mx-1 justify-center hover:cursor-pointer transition-colors duration-300 hover:text-purple-400 hover-radial-purple hover:bg-transparent"
          >
            <BellIcon className="h-5 w-5" strokeWidth={1.5} />

            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black dark:bg-stone-200 dark:text-black text-white text-[8px] font-medium px-1 py-[1px] rounded-full shadow-sm">
                {unreadCount}
              </span>
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="border border-transparent rounded-full    hover:cursor-pointer  text-muted-foreground h-fit   p-2 hover:bg-transparent w-fit justify-center  transition-colors duration-300 hover:text-purple-400 hover-radial-purple"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <MoonIcon className="h-5 w-5" strokeWidth={1.5} />
            )}
          </Button>
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}
