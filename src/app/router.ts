import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("@/app/root-layout"),
    children: [
      {
        index: true,
        lazy: () => import("@/pages/home"),
      },
      {
        path: "attendance-log",
        lazy: () => import("@/pages/attendance-log"),
      },
    ],
  },
])