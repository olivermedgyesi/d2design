import Image from "next/image";

type Member = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  bio: string[];
};

const members: Member[] = [
  {
    name: "Raj Dhaliwal",
    role: "Co-Founder",
    image: "/photos/brandmark-embossed.png",
    imageAlt: "Portrait placeholder — photo to come",
    bio: [
      "I'm Raj Dhaliwal, co-founder of D2 Design Build. My background spans over 25 years in real estate, land analysis, market strategy, and business development — experience that gives me a uniquely grounded perspective on what makes a project viable, valuable, and worth doing right.",
      "I started my career as a residential and land appraiser, which sharpened my ability to read a property, understand its potential, and see what others often overlook. That foundation in valuation and feasibility has shaped how I approach every renovation — not just as a construction project, but as a meaningful investment in a home and the people living in it.",
      "Over the years I've worked alongside major developers and local builders, supporting everything from market studies and competitive analysis to full development strategy. That kind of exposure taught me how projects succeed at scale, and I bring those same principles of planning, foresight, and execution to the renovation work we do at D2.",
      "At D2, I focus on the strategic side of each project — helping clients understand scope, value, and opportunity from the very beginning. I believe a great renovation starts well before anyone picks up a tool. It starts with asking the right questions, setting clear expectations, and building a plan that actually reflects how you want to live.",
      "What motivates me most is using everything I've learned across real estate, development, and business to help homeowners make smart, confident decisions about their spaces. Whether it's a full renovation or a focused transformation, I'm here to make sure every project is approached with intention and delivered with integrity.",
    ],
  },
  {
    name: "Christian Dracek",
    role: "Co-Founder",
    image: "/photos/brandmark-embossed.png",
    imageAlt: "Portrait placeholder — photo to come",
    bio: [
      "I'm Christian Dracek, co-founder of D2 Design Build. My background is in construction, project execution, and problem solving, with a strong focus on creating spaces that feel intentional, functional, and built to last. I've always been drawn to the balance between craftsmanship and design, finding ways to combine technical execution with creative thinking to deliver projects that feel unique to each client.",
      "At D2, I take a hands-on role throughout the entire process, from planning and site coordination to construction and finishing details. I believe the best projects come from direct involvement, strong communication, and refusing to cut corners for the sake of speed or convenience.",
      "What drives me most is building spaces that genuinely improve how people live. Whether it's a full home renovation, a custom feature, or a highly personalized \"You Space,\" I enjoy helping clients bring ideas to life that go beyond the standard approach to construction.",
      "Outside of construction, I'm passionate about creativity, branding, film, and design, all of which influence how I approach projects and the experience we create for clients.",
    ],
  },
  {
    name: "Designer",
    role: "To Be Announced",
    image: "/photos/brandmark-embossed.png",
    imageAlt: "Portrait placeholder — photo to come",
    bio: ["The third member of the D2 team will be introduced here."],
  },
];

export function TeamMembers() {
  return (
    <section className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <div className="divide-y divide-ink/15">
          {members.map((member, index) => (
            <article
              key={member.name}
              className={[
                "py-20 md:py-24 lg:py-28",
                index === 0 ? "pt-0 md:pt-0 lg:pt-0" : "",
              ].join(" ")}
            >
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
                <div className="md:col-span-5">
                  <h2 className="font-display text-3xl leading-[1.1] text-ink md:text-4xl lg:text-5xl">
                    {member.name}
                  </h2>
                  <div className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
                    {member.role}
                  </div>

                  <div className="relative mt-8 aspect-[4/5] w-full overflow-hidden ring-1 ring-evergreen md:mt-10">
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <div className="space-y-5 text-base leading-relaxed text-ink/80 md:text-lg">
                    {member.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
