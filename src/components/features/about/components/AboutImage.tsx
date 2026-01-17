export const AboutImage = () => {
    return (
        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000" />
            <picture>
                <source srcSet="/profile-photo.webp" type="image/webp" />
                <img
                    src="/profile-photo.jpg"
                    alt="Josue Royer - Full-Stack Architect"
                    className="relative rounded-2xl max-w-md w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                />
            </picture>
        </div>
    )
}
