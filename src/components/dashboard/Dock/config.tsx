export interface MenuItem {
  icon: ReactNode;
  label: string;
  href: string;
}
import {
  LayoutDashboard,
  FolderKanban,
  Hammer,
  CreditCard,
} from "lucide-react";
import { ReactNode } from "react";

export interface MenuItem {
  icon: ReactNode;
  label: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  {
    icon: <LayoutDashboard strokeWidth={1.5} className="h-5 w-5" />,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <FolderKanban strokeWidth={1.5} className="h-5 w-5" />,
    label: "Projects",
    href: "/dashboard/projects",
  },
  {
    icon: <Hammer strokeWidth={1.5} className="h-5 w-5" />,
    label: "Tools",
    href: "/dashboard/tools",
  },
  {
    icon: <CreditCard strokeWidth={1.5} className="h-5 w-5" />,
    label: "Get Paid",
    href: "/dashboard/payment",
  },
];

export const PURPLE_GRADIENT =
  "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)";

export const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

export const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

export const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

export const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};
