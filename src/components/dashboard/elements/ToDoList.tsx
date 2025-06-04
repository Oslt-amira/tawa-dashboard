"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle, Clock4, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export const ToDoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Get the verification tick by TAWA content factory",
      time: "1h ago",
      link: "Get Started",
      completed: false,
    },
    {
      id: 2,
      text: "Fill your portfolio to level up your chances",
      time: "1h ago",
      link: "Upload video",
      completed: false,
    },
    {
      id: 3,
      text: "Get the verification tick by TAWA content factory",
      time: "1h ago",
      link: "Get Started",
      completed: false,
    },
  ]);

  const toggleTaskCompletion = (id: number) => {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-4 px-5 border shadow-none rounded-3xl"
    >
      <div>
        <div className="text-muted-foreground font-bold">Recent Activity</div>
        <CardDescription className="text-stone-400">
          Your latest Tasks
        </CardDescription>
      </div>
      <CardContent className="p-0  space-y-4">
        <ScrollArea className=" h-64 py-2 space-y-4 ">
          {todos.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col my-2 border-b border-stone-400/50 rounded-lg"
            >
              <div className="flex items-start gap-3 px-1 py-3">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTaskCompletion(task.id)}
                  className="mt-1 h-4 w-4 border-gray-400 text-stone-800/60 shadow-none data-[state=checked]:border-stone-400 data-[state=checked]:bg-transparent data-[state=checked]:text-stone-400"
                />
                <span
                  className={`text-sm text-muted-foreground font-medium ${
                    task.completed ? "line-through text-stone-300" : ""
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <div className="flex justify-between items-center pl-8 pr-1 text-xs text-gray-400 py-1">
                <span className="flex items-center gap-1">
                  <Clock4 className="h-3.5 w-3.5" strokeWidth={1.25} />
                  {task.time}
                </span>
                <a
                  href="#"
                  className="flex items-center gap-1 font-medium text-gray-500 hover:text-stone-700 hover:scale-[101%] transition-colors"
                >
                  {task.link}
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          ))}
        </ScrollArea>
      </CardContent>
    </motion.div>
  );
};
