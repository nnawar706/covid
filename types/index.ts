export interface CardProps {
    className?: string;
    icon: string;
    title: string;
    description: string;
    handleClick?: () => void;
}