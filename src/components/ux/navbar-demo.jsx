"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbarui";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-2 text-sm">
            <HoveredLink href="/web-dev">Cloud Solution</HoveredLink>
            <HoveredLink href="/interface-design">Security Solution</HoveredLink>
            <HoveredLink href="/seo">Infrastructure Management Services</HoveredLink>
            <HoveredLink href="/branding">Field services</HoveredLink>
            <HoveredLink href="/branding">Professional Services</HoveredLink>
            <HoveredLink href="/branding">Intelligent Automation</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
           <a href="#About">About Us</a>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>)
  );
}
