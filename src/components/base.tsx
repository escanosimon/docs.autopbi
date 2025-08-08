import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

interface BaseProps {
  crumbs: {
    name: string,
    url?: string
  }[];
  children: React.ReactNode;
}

export default function Base({ crumbs, children }: BaseProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-screen">
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 border-b px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {
                  crumbs.map((crumb, index) => {
                    if (index < crumbs.length - 1) {
                      return (
                        <React.Fragment key={index}>
                          <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href={crumb.url || "#"}>
                              {crumb.name}
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator className="hidden md:block" />
                        </React.Fragment>
                      )
                    } else {
                      return (
                        <BreadcrumbItem key={index} className="hidden md:block">
                          <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                        </BreadcrumbItem>
                      )
                    }
                  })
                }
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button className="justify-self-end-safe">
              <Link href="https://github.com/simon-escano/AutoPBI/releases/" className="text-white">Download AutoPBI</Link>
            </Button>
          </div>
        </header>
        <main className="flex flex-col p-6 sm:p-6 md:p-8 lg:p-12 overflow-y-scroll">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
