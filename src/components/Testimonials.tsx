import { Star } from "lucide-react";

const projects = [
  {
    name: "SocialPass",
    description: "A decentralized, full-stack event management system.",
    metric: "Leading Solution"
  },
  {
    name: "Magnify Cash",
    description: "1,000+ loans issued, 3,000+ users onboarded, and $7,000+ distributed—all gas-free, onchain.",
    metric: "Growing Fast"
  },
  {
    name: "Strykr.ai",
    description: "The AI-powered volatility calendar trusted by traders.",
    metric: "Trusted Platform"
  }
];

export const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
            Our Track Record
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real Products, Real Impact
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <div
                key={project.name}
                className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 animate-fadeIn"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div>
                  <div className="flex gap-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-primary"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="mt-6 text-lg leading-7 text-gray-900">
                    {project.description}
                  </p>
                </div>
                <div className="mt-8 border-t border-gray-100 pt-8">
                  <p className="font-semibold text-gray-900">{project.name}</p>
                  <p className="mt-1 text-gray-600">{project.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};