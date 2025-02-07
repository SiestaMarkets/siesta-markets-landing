import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/5 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Siesta Markets</span>
              <span className="block text-primary">Where Digital Assets, AI & Finance Converge</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500">
              We <span className="font-semibold">build, invest, and advise</span> at the intersection of <span className="font-semibold">digital assets, AI, and fintech</span>—helping founders, investors, and institutions navigate the next wave of financial innovation.
            </p>
            <div className="mt-8 flex gap-4 sm:justify-center lg:justify-start">
              <Button size="lg" className="group">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
            <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
              <div className="px-4 py-8 sm:px-10">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      From the Minds Behind
                    </span>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    { name: "Magnify Cash", desc: "Instant, gas-free micro-loans using World ID as collateral" },
                    { name: "Strykr.ai", desc: "AI-driven volatility tracking for next-level trading insights" },
                    { name: "SocialPass", desc: "The leading self-hostable solution for event management" },
                    { name: "NFT Lists", desc: "Open-source NFT discoverability at scale" }
                  ].map((project, i) => (
                    <div
                      key={project.name}
                      className="rounded-lg bg-gray-50 p-4 animate-fadeIn"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <h3 className="font-semibold text-gray-900">{project.name}</h3>
                      <p className="text-sm text-gray-600">{project.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};