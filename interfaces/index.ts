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
export interface PropertyProps {
  id: number;
  name: string;
  address: string;
  rating: number;
  category: string;
  price: string;
  offers: string;
  image: string;
}
