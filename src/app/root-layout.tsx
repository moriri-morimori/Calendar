import { Outlet, NavLink } from "react-router-dom"

export function Component() {
  return (
    <div className="min-h-screen pb-16">
      {/* 子ページ表示エリア */}
      <Outlet />

      {/* 下固定バー */}
      <div className="fixed bottom-0 left-0 w-full h-16 border-t bg-white flex">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex-1 flex items-center justify-center ${
              isActive ? "text-blue-600 font-bold" : "text-gray-500"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/attendance-log"
          className={({ isActive }) =>
            `flex-1 flex items-center justify-center ${
              isActive ? "text-blue-600 font-bold" : "text-gray-500"
            }`
          }
        >
          Log
        </NavLink>
      </div>
    </div>
  )
}