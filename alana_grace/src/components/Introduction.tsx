const Introduction = () => {
  const challenges = [
    "Anxiety or depression",
    "Self-doubt or perfectionism",
    "Emotional overwhelm",
    "Relationship challenges",
    "Life transitions or grief",
  ];

  const benefits = [
    "A place to slow down and reconnect",
    "Support as you process emotions",
    "Clarity when feeling lost",
    "Tools for nervous system regulation",
    "A path to building resilience",
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32">
        {/* Main Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-tight">
            A Gentle Space for Healing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In the quiet space between pain and healing lies an invitation — to pause, to feel, and to begin again. Your inner world is met with compassion, and every emotion is honoured. Through somatic therapy and strength‑based counselling, I work alongside you to gently soften the grip of self-doubt and stress, and help you find clarity, emotional understanding, and healing.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Challenges */}
          <div className="bg-card p-8 md:p-10 rounded-sm hover-lift">
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Are you experiencing…
            </h3>
            <ul className="space-y-4">
              {challenges.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-accent/50 p-8 md:p-10 rounded-sm hover-lift">
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              How counselling can help…
            </h3>
            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
