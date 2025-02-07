import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-primary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Build the Future?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
            We help innovators, investors, and institutions capitalize on AI, digital assets, and fintech to drive the next wave of financial transformation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-primary hover:bg-gray-100"
            >
              Book a Call Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="mt-8 flex justify-center gap-x-8">
            <p className="text-gray-100">✓ Need expert advisory?</p>
            <p className="text-gray-100">✓ Looking for investment?</p>
            <p className="text-gray-100">✓ Want to build something groundbreaking?</p>
          </div>
        </div>
      </div>
    </div>
  );
};