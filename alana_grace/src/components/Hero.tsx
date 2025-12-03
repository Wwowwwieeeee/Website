import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center pt-20 bg-secondary/30">
      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium opacity-0 animate-fade-up" style={{
              animationDelay: "0.1s",
              animationFillMode: "forwards"
            }}>
                Noosa Heads Counsellor
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight opacity-0 animate-fade-up" style={{
              animationDelay: "0.2s",
              animationFillMode: "forwards"
            }}>Alana Grace Counselling in
Noosa Heads</h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg opacity-0 animate-fade-up" style={{
            animationDelay: "0.3s",
            animationFillMode: "forwards"
          }}>Integrative, compassion-focused therapy for emotional well-being.</p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{
            animationDelay: "0.4s",
            animationFillMode: "forwards"
          }}>
              <Button variant="default" size="lg" asChild>
                <a href="https://www.halaxy.com/book/appointment/alana-grace-counselling/location/1244081" target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 opacity-0 animate-fade-up" style={{
          animationDelay: "0.3s",
          animationFillMode: "forwards"
        }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-sm -z-10 transform rotate-2"></div>
              <img alt="Alana Grace - Noosa Heads Counsellor" className="w-full max-w-md mx-auto lg:max-w-full aspect-[4/5] object-cover object-top rounded-sm shadow-elegant" src="https://images.squarespace-cdn.com/content/v1/682d3769bbd3b2057519eb1d/7563d093-78a4-4896-8215-46cb4fd69d53/IMG_4682%281%29.JPG" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;