"use client";

import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
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
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

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
        },
        {
          title: "Installation",
          url: "/introduction/installation",
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
        },
        {
          title: "Bulk Publish",
          url: "/features/publish",
        },
        {
          title: "Bulk Download",
          url: "/features/download",
        },
        {
          title: "Bulk Delete",
          url: "/features/delete",
        },
        {
          title: "Bulk Clone",
          url: "/features/clone",
        },
        {
          title: "Bulk Scan",
          url: "/features/scan",
        },
        {
          title: "Bulk Refresh",
          url: "/features/refresh",
        },
        {
          title: "Bulk Takeover",
          url: "/features/takeover",
        },
      ],
    },
    {
      title: "Development",
      url: "/development",
      items: [
        {
          title: "Components",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathName = usePathname();

  return (
    <Sidebar className="p-4" {...props}>
      <SidebarHeader className="border border-b-0 rounded-lg rounded-b-none">
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="border border-t-0 rounded-lg rounded-t-none">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.url == pathName}>
                      <a href={item.url}>{item.title}</a>
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
