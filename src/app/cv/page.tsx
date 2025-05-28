
import { placeholderCVData } from '@/lib/placeholder-data';
import type { CVData, CVExperience, CVEducation, CVSkill, CVProject } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Linkedin, Github, Link as LinkIcon, Globe, Briefcase, GraduationCap, Lightbulb, PenToolIcon } from 'lucide-react';

const Section: React.FC<{ title: string; icon: React.ElementType; children: React.ReactNode }> = ({ title, icon: Icon, children }) => (
  <section className="mb-8">
    <div className="mb-6 flex items-center">
      <Icon className="mr-3 h-7 w-7 text-primary" />
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
    </div>
    {children}
  </section>
);

const CVContactItem: React.FC<{ icon: React.ElementType; href?: string; text: string; label: string }> = ({ icon: Icon, href, text, label }) => (
  <div className="flex items-center space-x-2">
    <Icon className="h-5 w-5 text-muted-foreground" />
    {href ? (
      <a href={href.startsWith('http') ? href : `mailto:${href}`} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary hover:underline" aria-label={label}>
        {text}
      </a>
    ) : (
      <span className="text-sm text-foreground" aria-label={label}>{text}</span>
    )}
  </div>
);

export default function CVPage() {
  const cv: CVData = placeholderCVData;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
      <header className="mb-12 text-center md:text-left md:flex md:items-center md:gap-8">
        <img
          src="https://picsum.photos/seed/cvavatar/150/150"
          alt={cv.name}
          width={150}
          height={150}
          className="mx-auto md:mx-0 mb-6 md:mb-0 rounded-full shadow-xl border-4 border-primary/20"
          data-ai-hint="professional portrait"
        />
        <div>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">{cv.name}</h1>
          <p className="mt-2 text-2xl text-primary">{cv.title}</p>
          <p className="mt-4 text-base text-muted-foreground">{cv.summary}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-x-12 md:grid-cols-3">
        <aside className="md:col-span-1 mb-8 md:mb-0">
          <Section title="Contact" icon={Mail}>
            <div className="space-y-3">
              <CVContactItem icon={Mail} href={cv.contact.email} text={cv.contact.email} label="Email Address" />
              {cv.contact.phone && <CVContactItem icon={Phone} text={cv.contact.phone} label="Phone Number" />}
              {cv.contact.linkedin && <CVContactItem icon={Linkedin} href={`https://${cv.contact.linkedin}`} text="LinkedIn" label="LinkedIn Profile" />}
              {cv.contact.github && <CVContactItem icon={Github} href={`https://${cv.contact.github}`} text="GitHub" label="GitHub Profile" />}
              {cv.contact.website && <CVContactItem icon={Globe} href={`https://${cv.contact.website}`} text="Website" label="Personal Website"/>}
            </div>
          </Section>

          <Section title="Skills" icon={PenToolIcon}>
            {Object.entries(cv.skills.reduce((acc, skill) => {
              if (!acc[skill.category]) acc[skill.category] = [];
              acc[skill.category].push(skill);
              return acc;
            }, {} as Record<string, CVSkill[]>)).map(([category, skills]) => (
              <div key={category} className="mb-4">
                <h3 className="mb-2 text-sm font-semibold text-muted-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <Badge key={skill.id} variant="secondary" className="font-normal">{skill.name}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </Section>
        </aside>

        <main className="md:col-span-2">
          <Section title="Experience" icon={Briefcase}>
            {cv.experience.map((exp: CVExperience) => (
              <Card key={exp.id} className="mb-6 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <CardDescription className="text-base">
                    {exp.company} {exp.location && `| ${exp.location}`}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-foreground">
                    {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </Section>

          <Section title="Education" icon={GraduationCap}>
            {cv.education.map((edu: CVEducation) => (
              <Card key={edu.id} className="mb-6 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.institution}</CardTitle>
                  <CardDescription className="text-base">{edu.degree}</CardDescription>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </CardHeader>
                {edu.description && edu.description.length > 0 && (
                  <CardContent>
                     <ul className="list-disc space-y-1 pl-5 text-sm text-foreground">
                      {edu.description.map((desc, i) => <li key={i}>{desc}</li>)}
                    </ul>
                  </CardContent>
                )}
              </Card>
            ))}
          </Section>

          <Section title="Projects" icon={Lightbulb}>
            {cv.projects.map((project: CVProject) => (
              <Card key={project.id} className="mb-6 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                     <CardTitle className="text-xl">{project.name}</CardTitle>
                     {project.link && (
                       <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                         <LinkIcon className="h-5 w-5" />
                       </a>
                     )}
                  </div>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="outline" className="font-normal">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </Section>
        </main>
      </div>
    </div>
  );
}
