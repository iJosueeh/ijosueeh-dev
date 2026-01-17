export const AboutImage = () => {
    return (
        <div className="relative group animate-slide-up max-w-md mx-auto lg:mx-0" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-violet-500/30 hover:border-violet-400/50 transition-all duration-300">
                <img
                    src="/profile-photo.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>
        </div>
    )
}
