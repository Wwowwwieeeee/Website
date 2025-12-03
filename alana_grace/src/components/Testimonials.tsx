import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Alana has an amazing ability to help me shift my perspective and look at situations with positive energy. She always followed up after sessions with helpful, relevant resources. She went above and beyond to help me explore career options and potential education/work opportunities. She was incredibly reassuring and validating as I navigated my path. I really believe she is going to help a lot of people.",
      author: "Anonymous Client",
    },
    {
      quote:
        "Alana's ability to listen without judgment and provide honest feedback has helped me navigate my feelings of self-doubt and stress. I always leave my time with her feeling empowered and understood. Alana's calm presence and genuine care make her an exceptional counsellor.",
      author: "Anonymous Client",
    },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-4">
            Client Experiences
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Words of Trust
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 md:p-10 rounded-sm relative"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-6" />
              <blockquote className="text-foreground leading-relaxed mb-6 italic font-serif text-lg">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-sm text-muted-foreground font-medium">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
