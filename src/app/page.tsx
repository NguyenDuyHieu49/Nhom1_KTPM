'use client';
import Link from "next/link"; //
import { GoHome } from "react-icons/go";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { CiMail, CiBookmark, CiUser } from "react-icons/ci"; //
import { BsTwitter } from "react-icons/bs";
const NAVIGATION_ITEMS = [
  { title: 'Home', icon: GoHome },
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
        <section className="fixed w-72 flex flex-col h-screen space-y-2 my-4">
        <Link href="/" className="py-2 px-6 text-2xl">
          <BsTwitter />
        </Link>
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              href={`/${item.title.toLowerCase()}`}
              key={item.title}
              className="hover:bg-white/10 duration-200 text-xl flex items-center justify-start w-fit space-x-2 rounded-3xl p-4 hover:bg-white/70 transition py-2 px-6"
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
