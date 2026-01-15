import { useLanguage } from '../../context/language'

export const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage()

    return (
        <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-transparent border border-violet-500/30 text-violet-400 rounded hover:bg-violet-500/10 transition-all duration-300 font-mono text-sm"
            aria-label="Toggle language"
        >
            {language === 'es' ? 'EN' : 'ES'}
        </button>
    )
}
