import Header from "@/components/Header";
import { Task, useGetTasksQuery } from "@/state/api";
import React from "react";
import TaskCard from "@/components/TaskCard";

type Props = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const ListView = ({ id, setIsModalNewTaskOpen }: Props) => {

  const {
    data: tasks,
    isLoading,
    error,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occured while loading tasks</div>;
  
  return (
    <div className="px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header name="List"/>
      </div>

      <div className="grid gird-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {tasks?.map((task: Task) => <TaskCard key={task.id} task={task}/>)}
      </div>
    </div>
  );
};

export default ListView;
