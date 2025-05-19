export interface CardProps {
  image: string;
  title: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}
