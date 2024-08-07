import React from "react";
import {Navbar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter ,useDisclosure} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.js";
import { useRouter } from 'next/router';
import { useState } from "react";
import InstructionsModal from "./instructions/modal.jsx";

export default function NavBar() {
  const router = useRouter();
  const { pathname } = router;
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Instructions", path: "/instructions" },
    { name: "Set up", path: "/categories/0/null" }
  ];
  const isActive = (path) => pathname === path || (path === '/categories/0/null' && pathname.includes('categories'));

  return (
    <Navbar
    classNames={{
      item: [
        "flex",
        "relative",
        "h-full",
        "items-center",
        "data-[active=true]:after:content-['']",
        "data-[active=true]:after:absolute",
        "data-[active=true]:after:bottom-0",
        "data-[active=true]:after:left-0",
        "data-[active=true]:after:right-0",
        "data-[active=true]:after:h-[2px]",
        "data-[active=true]:after:rounded-[2px]",
        "data-[active=true]:after:bg-primary",
      ],
    }}
      isBordered
     >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Doc-Classify</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Doc-Classify</p>
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={isActive(item.path)}>
            <Link color="foreground" href={item.path}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        <InstructionsModal></InstructionsModal>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} isActive={isActive(item.path)}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
