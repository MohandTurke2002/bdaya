import React from "react"
import Topbar from "@/components/topbar"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({children}:LayoutProps){
  return (
    <div className="grid grid-rows-[60px_1fr] grid-cols-1 md:grid-cols-[250px_1fr] h-screen">
      <Topbar className="md:col-start-2 row-end" />
      <main className="md:col-start-2 row-start-2 bg-white p-4">{children}</main>
    </div>
  )
}
