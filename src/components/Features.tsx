import { Check } from "lucide-react";

const features = [
  {
    title: "AI Integration",
    description: "Leverage cutting-edge AI technology to automate and optimize your workflows.",
  },
  {
    title: "Blockchain Solutions",
    description: "Build secure, scalable blockchain applications with our expert guidance.",
  },
  {
    title: "Fintech Innovation",
    description: "Transform financial services with our innovative fintech solutions.",
  },
];

export const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to scale your business
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
                  <Check className="h-5 w-5 flex-none text-primary" />
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