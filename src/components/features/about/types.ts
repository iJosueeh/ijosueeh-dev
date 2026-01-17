export interface AboutStatsProps {
  deploymentsLabel: string;
  uptimeLabel: string;
}

export interface AboutProps {
  onSectionReady?: () => void;
}

export interface AboutContentProps {
  title: string;
  paragraph1: string;
  paragraph2: string;
}
