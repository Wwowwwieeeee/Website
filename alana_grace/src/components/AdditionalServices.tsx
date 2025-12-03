const AdditionalServices = () => {
  const services = [
    {
      title: "Yoga Sessions",
      description:
        "As a certified yoga instructor, I offer personalised sessions that blend gentle movement, mindfulness, and somatic awareness. These practices aim to support emotional well-being, reduce stress, and foster a deeper connection between body and mind.",
      image:
        "https://images.squarespace-cdn.com/content/v1/682d3769bbd3b2057519eb1d/b30af2ac-05d1-4c8c-9bee-de30c771c628/beautiful-athletic-female-body-in-a-half-lotus-pos-2025-01-09-15-14-41-utc.jpg",
    },
    {
      title: "Writing Services",
      description:
        "Beyond counselling and movement sessions, I offer storytelling and freelance writing services focused on emotional health and well-being. Whether crafting thoughtful articles, developing resources, or collaborating on meaningful projects, I approach each piece with care, authenticity, and a hope to inspire.",
      image:
        "https://images.squarespace-cdn.com/content/v1/682d3769bbd3b2057519eb1d/a28184d4-112d-4a6f-8b3c-87738f727e9b/Writing.jpg",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-accent/30">
      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-4">
            Beyond Counselling
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Additional Services
          </h2>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-sm overflow-hidden hover-lift"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
