import { useState, useEffect, useMemo } from 'react'
import { translation } from '../../constants/translations'
import { LanguageContext } from './LanguageContext'

type Language = 'es' | 'en'

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem('language')
        return (saved === 'es' || saved === 'en') ? saved : 'es'
    })

    useEffect(() => {
        localStorage.setItem('language', language)
    }, [language])

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'es' ? 'en' : 'es'))
    }

    const value = useMemo(() => ({
        language,
        toggleLanguage,
        setLanguage,
        t: translation[language]
    }), [language])

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}
