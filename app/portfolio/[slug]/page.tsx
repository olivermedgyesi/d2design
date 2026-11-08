import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PortfolioCTA } from "@/components/PortfolioCTA";
import { getProject, projects } from "@/lib/projects";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} | D2 Design Build Calgary`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const body = project.body ?? [project.description];
  const gallery = project.gallery ?? [];

  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/30" />
          <div className="relative z-10 flex h-full w-full items-end">
            <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-20 lg:px-14 lg:pb-24">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-paper/75 md:text-sm">
                {project.label ?? project.category}
              </div>
              <h1 className="mt-4 max-w-4xl text-balance font-display text-5xl leading-[1.05] text-paper md:text-6xl lg:text-7xl">
                {project.name}
              </h1>
              <div className="mt-4 text-base text-paper/80 md:text-lg">
                {project.location}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
            <Link
              href="/portfolio"
              className="inline-flex text-xs font-medium uppercase tracking-[0.18em] text-ink"
            >
              <span className="border-b border-ink pb-1 transition-colors hover:border-terracotta hover:text-terracotta">
                ← All Projects
              </span>
            </Link>

            <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-12 md:gap-x-16">
              <div className="md:col-span-4">
                <dl className="space-y-6 border-t border-ink/15 pt-6">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ink/60">
                      Project Type
                    </dt>
                    <dd className="mt-2 text-base text-ink">
                      {project.label ?? project.category}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ink/60">
                      Location
                    </dt>
                    <dd className="mt-2 text-base text-ink">
                      {project.location}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="space-y-6 md:col-span-8">
                {body.map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-[1.75] text-ink/80 md:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {gallery.length > 0 && (
              <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-28 lg:gap-8">
                {gallery.map((photo) => (
                  <div
                    key={photo.src}
                    className="relative aspect-[4/5] w-full overflow-hidden ring-1 ring-evergreen"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
}
