import { ReactNode } from "react";

export interface CardProps {
    className: string;
    icon: string;
    title: string;
    description: string;
    handleClick: () => void;
}

export interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: ReactNode;
    handleClick?: () => void;
    buttonText?: string;
    buttonClassName?: string;
    isInstant?: boolean;
    image?: string;
    buttonIcon?: string;
}