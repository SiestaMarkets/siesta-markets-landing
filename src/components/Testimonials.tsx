
import { Trophy, Users, ArrowUpRight, Star } from "lucide-react";

const achievements = [
  {
    name: "$7M+ Processed",
    description: "Over $7 million in loan volume processed through Magnify Cash, demonstrating strong market adoption and trust.",
    icon: ArrowUpRight,
    metric: "Volume Achievement"
  },
  {
    name: "3,000+ Users",
    description: "Successfully onboarded over 3,000 active users across our platforms, with a focus on retention and engagement.",
    icon: Users,
    metric: "User Milestone"
  },
  {
    name: "Industry Recognition",
    description: "Featured in leading blockchain publications and recognized for innovative DeFi solutions.",
    icon: Trophy,
    metric: "Market Leadership"
  }
];

export const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
            Our Achievements
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Milestones & Recognition
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, i) => (
              <div
                key={achievement.name}
                className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 animate-fadeIn hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div>
                  <div className="flex items-center gap-x-2">
                    <achievement.icon className="h-6 w-6 text-primary" />
                    <div className="flex gap-x-1">
                      {[...Array(3)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-primary"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-6 text-lg leading-7 text-gray-900">
                    {achievement.description}
                  </p>
                </div>
                <div className="mt-8 border-t border-gray-100 pt-8">
                  <p className="font-semibold text-gray-900">{achievement.name}</p>
                  <p className="mt-1 text-gray-600">{achievement.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
