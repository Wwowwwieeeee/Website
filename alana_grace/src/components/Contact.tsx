import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] uppercase opacity-80 font-medium mb-4">
            Begin Your Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
            Ready to take the first step?
          </h2>
          <p className="text-lg opacity-90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're seeking support for anxiety, navigating life transitions, or simply need a compassionate space to process your thoughts, I'm here to help. Book a free 20-minute consultation to see if we're the right fit.
          </p>

          <Button
            variant="secondary"
            size="lg"
            className="text-foreground hover:bg-secondary/90"
            asChild
          >
            <a
              href="https://www.halaxy.com/book/appointment/alana-grace-counselling/location/1244081"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Free Consultation
            </a>
          </Button>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 pt-12 border-t border-primary-foreground/20">
            <div className="flex items-center gap-3 opacity-80">
              <MapPin className="w-5 h-5" />
              <span>Noosa Heads, QLD</span>
            </div>
            <div className="flex items-center gap-3 opacity-80">
              <Mail className="w-5 h-5" />
              <a href="mailto:hello@alanagrace.com.au" className="hover:opacity-100 transition-opacity">
                hello@alanagrace.com.au
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
