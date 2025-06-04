import type { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DashboardDock } from "@/components/dashboard/Dock/DashboardDock";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen   bg-background items-center justify-center w-screen overflow-x-hidden">
      <DashboardHeader />
      <main className="flex-1 overflow-y-auto w-full pt-16">
        <ScrollArea className="h-full ">
          <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] px-4 py-6 text-muted-foreground">
            {children}
          </div>
        </ScrollArea>
      </main>

      {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 group overflow-hidden">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0"> */}
      <DashboardDock />
      {/* </div>
      </div> */}
    </div>
  );
}
