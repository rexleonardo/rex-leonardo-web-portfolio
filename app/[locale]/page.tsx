import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { FadeIn } from "@/components/FadeIn";
import { portfolioData } from "@/data/portfolio";
import { AboutModals } from "@/components/AboutModals";
import { ArrowRight, Code2, Briefcase, FolderGit2, Atom, Server, Database, Cloud, GitBranch, Layout, Terminal, Bug, User } from "lucide-react";

const categoryIcons: Record<string, typeof Code2> = {
  "Frontend Technologies": Atom,
  "Backend & APIs": Server,
  "Databases": Database,
  "Cloud, Hosting & Deployment": Cloud,
  "Version Control": GitBranch,
  "Design & Project Management": Layout,
  "Development Tools & Environment": Terminal,
  "Testing, Debugging & Accessibility": Bug,
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "en" | "ja" }>;
}) {
  const t = await getTranslations("Index");
  const { locale } = await params;

  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1 -mt-[88px]">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-[88px]">
          {/* Background Video */}
          <div className="absolute inset-0 w-full h-full -z-10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full pointer-events-none"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-zinc-50/50 dark:bg-zinc-950/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50 dark:to-zinc-950" />
          </div>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col items-center text-center relative z-10">
            <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
              {t("hero.greeting")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-900 dark:from-zinc-400 dark:to-zinc-100">
                {t("hero.role")}
              </span>
              <span>
                {t("hero.suffix")}
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-[600px] mb-8">
              {t("hero.description")}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 dark:bg-zinc-50 px-8 py-3 text-sm font-medium text-zinc-50 dark:text-zinc-900 transition-colors cursor-pointer hover:bg-zinc-800 dark:hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
              >
                {t("hero.viewWork")} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </FadeIn>
          </div>
        </section>

        {/* About & Experience Section */}
        <section className="container mx-auto px-4 md:px-6 py-20 border-t border-zinc-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {/* About */}
            <div id="about" className="lg:col-span-1">
              <FadeIn>
                <div className="flex items-center gap-3 mb-8">
                  <User className="h-6 w-6" />
                  <h2 className="text-3xl font-bold tracking-tighter">
                    {t("about.title")}
                  </h2>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="mb-8">
                  <Image
                    src="/profile.jpeg"
                    alt="Profile photo"
                    width={120}
                    height={120}
                    className="rounded-full aspect-square object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="prose prose-zinc dark:prose-invert max-w-none mb-8">
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {t("about.description")}
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">{t("about.languages.title")}</h3>
                  <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      {t("about.languages.english")}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      {t("about.languages.japanese")}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      {t("about.languages.filipino")}
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">{t("about.contact.title")}</h3>
                  <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">{t("about.contact.email")}</span>
                      <a href="mailto:rexpleonardo@gmail.com" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">rexpleonardo@gmail.com</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">{t("about.contact.linkedin")}</span>
                      <a href="https://www.linkedin.com/in/rex-leonardo-2a521b16a/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Rex Leonardo</a>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <AboutModals />
              </FadeIn>
            </div>

            {/* Experience */}
            <div id="experience" className="lg:col-span-2">
              <FadeIn>
                <div className="flex items-center gap-3 mb-8">
                  <Briefcase className="h-6 w-6" />
                  <h2 className="text-3xl font-bold tracking-tighter">
                    {t("experience.title")}
                  </h2>
                </div>
              </FadeIn>
              <div className="space-y-12 border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 pl-8">
                {portfolioData.experience.map((exp, index) => (
                  <FadeIn key={exp.id} delay={index * 0.1} direction="left">
                    <div className="relative">
                      <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-zinc-900 dark:bg-zinc-50 border-4 border-white dark:border-zinc-950" />
                      <h3 className="text-xl font-bold">{exp.role.title[locale]}</h3>
                      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">{exp.role.subheading[locale]}</p>
                      <div className="space-y-8">
                        {exp.companies.map((company, companyIndex) => (
                          <div key={companyIndex}>
                            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                                {company.name[locale]}
                              </span>
                              <span>•</span>
                              <span>{company.period[locale]}</span>
                            </div>
                            {Array.isArray(company.description[locale]) ? (
                              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
                                {(company.description[locale] as string[]).map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
                                {company.description[locale]}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-4 md:px-6 py-20 border-t border-zinc-200 dark:border-zinc-800">
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <Code2 className="h-6 w-6" />
              <h2 className="text-3xl font-bold tracking-tighter">
                {t("skills.title")}
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.skills.map((category, index) => {
              const Icon = categoryIcons[category.category.en] || Code2;
              return (
                <FadeIn key={category.category.en} delay={index * 0.05}>
                  <div className="group flex flex-col gap-4 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-sm h-full">
                    <div className="flex items-center gap-3">
                      <div className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">{category.category[locale]}</h3>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{category.description[locale]}</p>
                    <div className="space-y-4 mt-2">
                      {category.subcategories.map((sub) => (
                        <div key={sub.name.en}>
                          <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2">{sub.name[locale]}</h4>
                          <div className="flex flex-wrap gap-2">
                            {sub.skills.map((skill) => (
                              <span
                                key={skill}
                                className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:text-zinc-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="container mx-auto px-4 md:px-6 py-20 border-t border-zinc-200 dark:border-zinc-800"
        >
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <FolderGit2 className="h-6 w-6" />
              <h2 className="text-3xl font-bold tracking-tighter">
                {t("projects.title")}
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-all cursor-pointer hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md"
                >
                  <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <Image
                      src={project.image}
                      alt={project.title[locale]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {project.title[locale]}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-1">
                    {project.description[locale]}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Rex Leonardo. All rights reserved.</p>
      </footer>
    </div>
  );
}
