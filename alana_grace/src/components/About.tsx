import { Button } from "@/components/ui/button";
const About = () => {
  return <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent rounded-sm -z-10 transform -rotate-2"></div>
            <img alt="Alana Grace, Noosa Heads Counsellor" className="w-full aspect-[4/5] object-cover object-top rounded-sm shadow-elegant" src="https://images.squarespace-cdn.com/content/v1/682d3769bbd3b2057519eb1d/7563d093-78a4-4896-8215-46cb4fd69d53/IMG_4682%281%29.JPG" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
              Meet Your Therapist
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
              Hello, it's lovely to meet you.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Alana, a degree-qualified counsellor and integrative therapist based in Noosa Heads. My approach combines evidence-based therapy with holistic practices drawn from over a decade in the healing arts, including yoga, Ayurveda, and meditation.
              </p>
              <p>
                I offer trauma-informed therapy in Noosa, with the hope of creating a compassionate, calm, and centered space where you can explore without judgment or haste. Here, you're gently supported to unravel your thoughts and emotions, finding clarity and balance at your own rhythm.
              </p>
              <p>
                Together, we can untangle the knots of life's complexities, including anxiety, relationship issues, and emotional overwhelm, fostering deep self-understanding, self-trust, and a renewed sense of clarity on your healing journey.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="mt-4">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default About;