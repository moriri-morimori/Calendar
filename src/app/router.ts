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
        path: "income-expenses-log",
        lazy: () => import("@/pages/income-expenses-log"),
      },
    ],
  },
])