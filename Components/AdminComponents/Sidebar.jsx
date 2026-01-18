import logo from "@/Assets/logo.png";
import { CirclePlus, Mail, SquarePen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SidebarItem({ href, icon: Icon, label }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 font-medium px-3 py-2 bg-white border border-black shadow-[-5px_5px_0px_#000000] transition-shadow duration-300 ease-in-out hover:shadow-[-1px] cursor-pointer hover:bg-slate-200"
    >
      {href ? <Icon width={28} /> : <Icon width={28} />}
      <p>{label}</p>
    </Link>
  );
}

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-slate-100 flex flex-col border-r border-black">
      {/* Logo Section */}
      <div className="px-6 py-4 border-b border-black flex items-center justify-center">
        <Link href="/">
          <Image src={logo} alt="Logo" width={120} />
        </Link>
      </div>

      {/* Navigation Section */}
      <div className="flex flex-col flex-1 px-4 py-6 gap-5">
        <SidebarItem
          href="/admin/addProduct"
          icon={CirclePlus}
          label="Add blogs"
        />

        <SidebarItem
          href="/admin/blogList"
          icon={SquarePen}
          label="Blog List"
        />

        <SidebarItem
          href="/admin/subscriptions"
          icon={Mail}
          label="Subscriptions"
        />
      </div>
    </div>
  );
};

export default Sidebar;
