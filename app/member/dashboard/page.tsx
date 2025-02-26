import Card from "@/app/components/card";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <Card
            href="/member/consultation"
            mainImage="/images/consult.png"
            title="Daily Progress"
            description="This is your personalized session. Here you can measure your daily progress and see your goal getting ever closer. Together, we will see you through this process of re-designing and activating the best version of yourself and help
            you manifest wealth, purpose, influence, peace, joy, leadership, dominion, and affluence."
          />
          <h2 className="text-lg font-semibold mb-2">Daily Progress</h2>
          <p className="text-gray-600">5/7 days completed</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <Card
             href="/"
             mainImage="/images/recent.png"
             title="Recent Activities"
             description="You can see all your recent activities here, you can even choose to revisit any of them"
          />
          <h2 className="text-lg font-semibold mb-2">Recent Activities</h2>
          <ul className="text-gray-600 list-disc pl-4">
            <li>Morning Meditation (10min)</li>
            <li>Sleep Story (25min)</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <Card
            href="/"
            mainImage="/images/achievements.png"
            title="Achievements"
            description="Great job you have done so far, there is still a little more to achievement up the road"
          />
          <h2 className="text-lg font-semibold mb-2">Achievements</h2>
          <div className="flex gap-2">
            <span className="bg-primary text-white px-2 py-1 rounded-full text-sm">
              Beginner
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}