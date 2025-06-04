"use client";

import { AmountCard } from "@/components/dashboard/elements/AmountCard";
import { BrandDeals } from "@/components/dashboard/elements/BrandDeals";
import { DateRangeSelector } from "@/components/dashboard/elements/DateRangeSelector";
import { EngagementStats } from "@/components/dashboard/elements/EngagementStats";
import { RecentActivity } from "@/components/dashboard/elements/RecentActivity";
import { StatsOverview } from "@/components/dashboard/elements/StatsOverview";
import { SubmissionStatusCards } from "@/components/dashboard/elements/SubmissionStatusCards";
import { Targets } from "@/components/dashboard/elements/Targets";
import { ToDoList } from "@/components/dashboard/elements/ToDoList";
import { UserCard } from "@/components/dashboard/elements/UserCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className=" h-full w-full flex gap-8 flex-col items-start my-2 overflow-x-hidden ">
      <div className="w-full h-full flex flex-col sm:flex-row gap-4 ">
        <div className="flex flex-col space-y-3">
          <UserCard
            name="Hela"
            surname="Yakoubi"
            activeSince="2023"
            skills={[
              "Storytelling",
              "Consistency",
              "Brief Compliance",
              "Creative",
              "Production Quality",
            ]}
          />
          <AmountCard
            title="Received Amount"
            amount="300 dt"
            percentage="37%"
          />

          <AmountCard
            title="Pending Amount"
            amount="200 dt"
            percentage="-17%"
          />
          <AmountCard
            title="Spent This Week"
            amount="150 dt"
            percentage="+8%"
          />
        </div>

        <div className=" rounded-3xl  shadow-none sm:w-5/6 w-full">
          <StatsOverview />
          <SubmissionStatusCards />
          <div className="flex flex-col sm:flex-row py-4 gap-3">
            <EngagementStats />
            <Targets />
          </div>
          <BrandDeals />
        </div>

        <div className="flex flex-col space-y-4">
          <DateRangeSelector />
          <RecentActivity />
          <ToDoList />
        </div>
      </div>
    </div>
  );
}
