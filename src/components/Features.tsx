import { Building, ChartBar, DollarSign } from "lucide-react";

const features = [
  {
    title: "Product & Software Development",
    description: "We take bold ideas from concept to market, leveraging cutting-edge AI, blockchain, and fintech innovations to build products that scale.",
    icon: Building
  },
  {
    title: "Advisory & Consulting",
    description: "From tokenomics design to AI-driven financial modeling, we provide deep expertise to help teams execute, grow, and win.",
    icon: ChartBar
  },
  {
    title: "Investments & Ventures",
    description: "We back standout founders with capital, mentorship, and hands-on support—fueling disruptive ideas that redefine industries.",
    icon: DollarSign
  },
];

export const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            What We Do
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Building the Future of Finance
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, i) => (
              <div 
                key={feature.title} 
                className="flex flex-col animate-fadeIn"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary" />
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};