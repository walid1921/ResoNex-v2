import { ModeToggle } from "@/components/modeToggle";
import { db } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const tasks = await db.task.findMany({
    where: { title: { contains: "test" } },
  });
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
      <h2>Test</h2>
    </div>
  );
}
