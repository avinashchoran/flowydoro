import { Tabs } from "./ui/tabs";
import Timer from "./Timer"
import Tasks from "./Tasks"
import { RippleButton } from "@/components/magicui/ripple-button";
export default function Pomo(){

     const tabs = [
    {
      title: "Timer",
      value: "Timer",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-3  text-white bg-gradient-to-br from-purple-100 to-white border-4 dark:border-2 dark:from-body-background dark:to-body-background">
        <Timer/>
        </div>
      ),
    },
    {
      title: "Tasks",
      value: "Tasks",
      content: (
        <div className="w-full  relative h-full rounded-2xl  text-white bg-gradient-to-br from-purple-100 to-white border-4 dark:border-2 dark:from-body-background dark:to-body-background">
          <Tasks/>
        </div>
      ),
    },
    
  ];
    return(
        <div className=" h-[490px] w-[500px] ">
      <Tabs tabs={tabs} 
      
      />
    </div>
    )
}