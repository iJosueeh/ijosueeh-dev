import { useLanguage } from '../../../context/language'
import { SkillCategory } from './components/SkillCategory'
import type { SkillCategoryData } from './types'

export const Skills = () => {
    const { t } = useLanguage()

    const categories: SkillCategoryData[] = [
        {
            title: t.skills.categories.languages,
            skills: [
                { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
                { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            ]
        },
        {
            title: t.skills.categories.frameworks,
            skills: [
                { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
                { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
                { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
            ]
        },
        {
            title: t.skills.categories.database,
            skills: [
                { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            ]
        },
        {
            title: t.skills.categories.tools,
            skills: [
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
                { name: 'Scrum', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' } // Using Jira as proxy for Agile/Scrum visually
            ]
        }
    ]

    return (
        <section id="skills-section" className="relative py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white inline-block">
                        {t.skills.title}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mt-4 rounded-full" />
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
                    {categories.map((category, index) => (
                        <SkillCategory
                            key={category.title}
                            title={category.title}
                            skills={category.skills}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
        </section>
    )
}
