export interface HeroTitleProps {
  texts: string[];
}

export interface HeroSubtitleProps {
  parts: {
    subtitle: string;
    technologies: string;
    subtitleEnd: string;
    interfaces: string;
    interfacesEnd: string;
  };
}

export interface HeroActionsProps {
  primaryText: string;
  secondaryText: string;
}

export interface HeroBadgeProps {
  text: string;
}

export interface HeroCertificationsProps {
  certifications: {
    aws: string;
    postman: string;
    scrum: string;
  };
}

export interface HeroScrollIndicatorProps {
  text: string;
}
