'use client';
import Link from "next/link"; //
import { GoHome } from "react-icons/go";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { CiMail, CiBookmark, CiUser } from "react-icons/ci"; //
const NAVIGATION_ITEMS = [
  { title: 'HOME', icon: GoHome },
  { title: 'Explore', icon: FaMagnifyingGlass },
  { title: 'Notification', icon: FaRegBell },
  { title: 'Messages', icon: CiMail },
  { title: 'BookMarks', icon: CiBookmark },
  { title: 'Profile', icon: CiUser }
];

const Page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* Left sidebar NAVIGATION */}
        <section className="fixed w-72 flex flex-col space-y-2 p-4">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              href={`/${item.title.toLowerCase()}`}
              key={item.title}
              className="bg-white/50 flex items-center space-x-2 rounded-3xl p-4 hover:bg-white/70 transition"
            >
              <item.icon className="text-xl" />
              <span>{item.title}</span>
            </Link>
          ))}
        </section>
        
        <main className="flex-1 ml-72 p-8">Home timeline</main>
        <section className="hidden md:block p-8">Right section</section>
      </div>
    </div>
  );
};

export default Page;
