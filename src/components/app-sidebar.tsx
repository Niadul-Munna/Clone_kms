"use client";

import * as React from "react";
import {
  LifeBuoy,
  Send,
  SquareTerminal,
  Home,
  User,
  FileVideo,
  BadgePercent,
  CircleGauge,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavVideoCms } from "@/components/nav-videocms";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Logo from "./ui/logo";
import avatar from "@/avatar.png";

const data = {
  user: {
    name: "Sohel Mia",
    email: "sohelmiacse99@gmail.com",
    avatar: avatar,
    site: "gotipath kms",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Contents",
      url: "#",
      icon: FileVideo,
    },
    {
      title: "CMS Tools",
      url: "#",
      icon: CircleGauge,
    },
    {
      title: "Users",
      url: "#",
      icon: User,
    },
    {
      title: "Discounts",
      url: "#",
      icon: BadgePercent,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#" className="">
                <div className="flex justify-between w-full items-center ">
                  <div
                    className="flex items-center
                   gap-2"
                  >
                    <Logo />

                    <div className=" font-bold uppercase">{data.user.site}</div>
                  </div>
                  <div className="flex justify-center items-center">
                    <SidebarTrigger className="" />
                  </div>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavVideoCms items={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
