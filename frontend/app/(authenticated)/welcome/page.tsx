import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function WelcomePage() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.firstName}!</h1>
      {/* Rest of your welcome page content */}
    </div>
  );
}
