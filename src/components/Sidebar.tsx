import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import ThemeToggleButton from "./ThemeToggleButton";


export default function Sidebar() {
    return (
        <div className="fixed bottom-0 left-0 sm:static flex flex-row sm:flex-col h-14 sm:w-14 w-screen sm:h-screen items-center justify-between gap-7 p-2 sm:py-10  bg-[#23223c] dark:bg-body-background dark:border-t sm:dark:border-r">
            <FaRegUserCircle className="fill-white size-6"  />
            <div className="flex sm:flex-col justify-center items-center gap-7">
            <Link href="/" className="text-lg focus:bg-[#3c3b53] p-2 rounded-lg">
                <IoMdHome className="fill-white size-6" />
            </Link>
            <Link href="/settings" className="text-lg focus:bg-[#3c3b53] p-2 rounded-lg">
                <IoSettingsSharp className="fill-white size-5" />
            </Link>
            </div>
            
            <ThemeToggleButton />
        </div>
    );
}