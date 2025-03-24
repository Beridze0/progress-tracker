import { gainXP } from "@/redux/levelSlice";
import { useDispatch } from "react-redux";

export const dailyQuests = [
    { id: 1, title: "Code for 1 hour", xp: 100 },
    { id: 2, title: "Solve 3 coding challenges", xp: 150 },
    { id: 3, title: "Read 10 pages of a book", xp: 50 },
    { id: 4, title: "Go to the gym", xp: 100 },
    { id: 5, title: "Write a technical blog post", xp: 200 },
    { id: 6, title: "Watch a React/TypeScript tutorial (30 min)", xp: 80 },
    { id: 7, title: "Refactor some old code", xp: 120 },
    { id: 8, title: "Contribute to an open-source project", xp: 200 },
    { id: 9, title: "Meditate for 10 minutes", xp: 50 },
    { id: 10, title: "Take notes on what you learned today", xp: 100 },
  ];
  
  export const weeklyQuests = [
    { id: 1, title: "Build a small React project", xp: 500 },
    { id: 2, title: "Learn a new Redux concept", xp: 300 },
    { id: 3, title: "Workout 4 times this week", xp: 400 },
    { id: 4, title: "Complete a TypeScript challenge", xp: 350 },
    { id: 5, title: "Read a full chapter from a technical book", xp: 300 },
    { id: 6, title: "Refactor and optimize an old project", xp: 450 },
    { id: 7, title: "Learn a new design pattern", xp: 400 },
    { id: 8, title: "Write 3 blog posts on Medium or personal blog", xp: 500 },
    { id: 9, title: "Implement a complex UI component from scratch", xp: 600 },
    { id: 10, title: "Teach someone a programming concept", xp: 350 },
  ];
  
  export const legendaryQuests = [
    { id: 1, title: "Build and deploy a full-stack project", xp: 3000 },
    { id: 2, title: "Contribute significantly to open source", xp: 2500 },
    { id: 3, title: "Solve 50 coding challenges in a week", xp: 2000 },
    { id: 4, title: "Create a YouTube tutorial series", xp: 3500 },
    { id: 5, title: "Develop an advanced feature for your project", xp: 2800 },
    { id: 6, title: "Get your first paid freelance gig", xp: 4000 },
    { id: 7, title: "Master an advanced concept (e.g., GraphQL, WebSockets)", xp: 3000 },
    { id: 8, title: "Go on a full 30-day streak of coding", xp: 5000 },
    { id: 9, title: "Complete a marathon (or similar extreme fitness goal)", xp: 4500 },
    { id: 10, title: "Create a SaaS MVP and get first user", xp: 6000 },
  ];
  

const Quests = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col p-5 ">
      <h1 className="self-center text-xl font-semibold">Quests</h1>

      <div className="flex gap-5 h-full">
        <div className="w-fit flex flex-col gap-1.5">
          <h1 className="font-bold text-lg self-center">Daily Quests</h1>
          {
            dailyQuests.map((quest)=>(
                <button className="border text-start py-1.5 px-3 rounded-md text-sm cursor-pointer" key={quest.id}
                onClick={() => dispatch(gainXP(quest.xp))}>{quest.title} + {quest.xp}</button>
            ))
          }
        </div>
        <div className="w-fit flex flex-col gap-1.5 h-full ">
          <h1 className="font-bold text-lg self-center">Weekly Quests</h1>
          {
            weeklyQuests.map((quest)=>(
                <button className="border text-start py-1.5 px-3 rounded-md text-sm cursor-pointer" key={quest.id} onClick={() => dispatch(gainXP(quest.xp))}>{quest.title} + {quest.xp}</button>
            ))
          }
        </div>
        <div className="w-fit flex flex-col gap-1.5 h-full ">
          <h1 className="font-bold text-lg self-center">Legendary Quests</h1>
          {
            legendaryQuests.map((quest)=>(
                <button className="border text-start py-1.5 px-3 rounded-md text-sm cursor-pointer" key={quest.id} onClick={() => dispatch(gainXP(quest.xp))}>{quest.title} + {quest.xp}</button>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Quests;
