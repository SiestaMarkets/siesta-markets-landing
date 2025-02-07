import { Star } from "lucide-react";

const testimonials = [
  {
    content: "The team delivered beyond our expectations. Our AI integration has transformed our business.",
    author: "Sarah Johnson",
    role: "CTO at TechCorp",
  },
  {
    content: "Outstanding blockchain solutions that helped us scale efficiently and securely.",
    author: "Michael Chen",
    role: "Founder at BlockFin",
  },
  {
    content: "Their fintech expertise has been invaluable to our growth strategy.",
    author: "Lisa Rodriguez",
    role: "CEO at PayFlow",
  },
];

export const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by industry leaders
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.author}
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
                    {testimonial.content}
                  </p>
                </div>
                <div className="mt-8 border-t border-gray-100 pt-8">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="mt-1 text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};