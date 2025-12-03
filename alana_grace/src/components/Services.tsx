import { MapPin, Video, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const Services = () => {
  const services = [{
    icon: MapPin,
    title: "In-Person Counselling",
    location: "Noosa Heads",
    description: "Meet in a warm, private space in Noosa Heads for one-to-one therapy that supports emotional healing and personal growth. I also see clients across the Sunshine Coast, including Peregian Beach, Coolum, and Maroochydore.",
    image: "https://images.squarespace-cdn.com/content/v1/682d3769bbd3b2057519eb1d/089cd114-c88c-4bd9-af69-d72d691b20fc/young-caucasian-woman-communicating-with-her-psych-2024-12-05-12-10-42-utc.jpg"
  }, {
    icon: Video,
    title: "Online Counselling",
    location: "Australia & Worldwide",
    description: "Access professional counselling online from wherever you are. Secure video or phone sessions provide flexible, confidential support from the comfort of your home.",
    image: "https://images.squarespace-cdn.com/content/v1/682d3769bbd3b2057519eb1d/30c7cff5-1883-4ad9-8071-4b948efd637d/casual-young-woman-sitting-on-the-couch-working-on-2024-12-05-18-26-18-utc.jpg"
  }, {
    icon: Phone,
    title: "Free Consultation",
    location: "20-Minute Call",
    description: "Book a complimentary 20-minute call to ask questions, explore your needs, and see if we're the right fit — no pressure, just connection.",
    image: "https://images.squarespace-cdn.com/content/v1/682d3769bbd3b2057519eb1d/cb69174e-864f-4ef2-9332-57cb39213fe4/relaxing-on-couch-young-woman-in-casual-clothes-e-2025-04-04-23-55-05-utc.jpg"
  }];
  return <section id="services" className="py-24 md:py-32 bg-background">
      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-4">WAYS TO WORK TOGETHER</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Counselling Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="group bg-card rounded-sm overflow-hidden hover-lift">
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <service.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{service.location}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>)}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <a href="https://www.halaxy.com/book/appointment/alana-grace-counselling/location/1244081" target="_blank" rel="noopener noreferrer">
              Book Your Session
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default Services;