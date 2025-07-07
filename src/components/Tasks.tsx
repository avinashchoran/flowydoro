"use client"
import { useState } from "react"

import AnimatedList from "@/components/magicui/AnimatedList"
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export default function Tasks() {
    const [tasks, setTasks] = useState<string[]>(["something to do", "another task", "yet another task", "more task", "even more task"]);
    const [inputValue,setInputValue] =  useState("")
    const placeholders = [
        "What's your main goal for today?",
        "Break down your biggest task.",
        "Schedule a 5-minute break.",
        "Read a chapter of a book.",
        "Finish the presentation slides.",
        "Reply to important emails.",
        "Go for a short walk.",
        "Plan your next work session.",
        "Review your progress.",
        "Drink a glass of water.",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(inputValue.trim()!== ""){
            setTasks(prev => [...prev, inputValue.trim() ])
            setInputValue("");
        }
    };

    const handleDelete = (index: number) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }

    return (
        <>
            <div className="flex  flex-col rounded-lg p-3 h-full">

               <div className="grow">
                <AnimatedList
                    items={tasks}
                    onItemSelect={(item, index) => console.log(item, index)}
                    onDeleteItem={handleDelete}
                    showGradients={false}
                    enableArrowNavigation={true}
                    displayScrollbar={false}
                    className = "w-full h-full"
                    itemClassName = "border-2 bg-transparent text-black rounded-lg dark:text-white"
                />

               </div>
             <div className=" my-3">
                <PlaceholdersAndVanishInput
                    placeholders={placeholders}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                    value={inputValue}
                   
                />
             </div>
            </div>
        </>
    )
}