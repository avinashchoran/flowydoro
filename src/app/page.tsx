import Image from "next/image";

import Pomo from "@/components/Pomo";
import Timer from "@/components/Timer";
import Tasks from "@/components/Tasks"

export default function Home() {
  return (
    <>
    <div className=" flex justify-center p-12 ">
    <Pomo/>
    </div>
    </>
  );
}
