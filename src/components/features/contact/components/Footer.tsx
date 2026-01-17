import { memo } from 'react'
import { useLanguage } from '../../../../context/language'

export const Footer = memo(() => {
    const { t } = useLanguage()

    return (
        <footer className="w-full py-8 text-center text-white/30 text-xs sm:text-sm border-t border-white/5 bg-black">
            <p>{t.contact.copyright}</p>
        </footer>
    )
})
