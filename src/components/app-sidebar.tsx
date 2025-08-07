"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { VersionSwitcher } from "@/components/version-switcher";
import { usePathname } from "next/navigation";
import { BadgeQuestionMark, CircleUserRound, CodeXml, Copy, Cuboid, Download, HandHelping, ListPlus, MonitorDown, PictureInPicture2, RefreshCw, ScanSearch, Trash, Upload } from "lucide-react";

// This is sample data.
const data = {
  versions: ["1.0.0"],
  navMain: [
    {
      title: "Introduction",
      url: "/introduction",
      items: [
        {
          title: "What is AutoPBI?",
          url: "/introduction/home",
          icon: BadgeQuestionMark
        },
        {
          title: "Installation",
          url: "/introduction/installation",
          icon: MonitorDown
        },
      ],
    },
    {
      title: "Features",
      url: "/features",
      items: [
        {
          title: "Authentication",
          url: "/features/authentication",
          icon: CircleUserRound
        },
        {
          title: "Bulk Publish",
          url: "/features/publish",
          icon: Upload
        },
        {
          title: "Bulk Download",
          url: "/features/download",
          icon: Download
        },
        {
          title: "Bulk Delete",
          url: "/features/delete",
          icon: Trash
        },
        {
          title: "Bulk Clone",
          url: "/features/clone",
          icon: Copy
        },
        {
          title: "Bulk Scan",
          url: "/features/scan",
          icon: ScanSearch
        },
        {
          title: "Bulk Refresh",
          url: "/features/refresh",
          icon: RefreshCw
        },
        {
          title: "Bulk Takeover",
          url: "/features/takeover",
          icon: HandHelping
        },
      ],
    },
    {
      title: "Development",
      url: "/development",
      items: [
        {
          title: "Tech Stack",
          url: "/development/tech-stack",
          icon: CodeXml
        },
        {
          title: "Adding Features",
          url: "/development/adding-features",
          icon: ListPlus
        },
        {
          title: "UI Components",
          url: "/development/ui-components",
          icon: Cuboid
        },
        {
          title: "Popup System",
          url: "/development/popup-system",
          icon: PictureInPicture2
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathName = usePathname();

  return (
    <Sidebar className="max-w-58" {...props}>
      <SidebarHeader className="p-2">
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent className="p-2">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.url == pathName}>
                      <a className="flex" href={item.url}>
                        <item.icon className="text-primary"></item.icon>
                        <p>{item.title}</p>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
