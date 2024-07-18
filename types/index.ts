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

export interface MeetingSetupProps {
    setIsSetupComplete: (value: boolean) => void
}

export interface MeetingListProps {
    type: 'Upcoming' | 'Recording' | 'Previous'
}

export interface PageHeadingProps {
    title: string;
    subtitle?: string;
    back: boolean
}

export interface MeetingCardProps {
    icon: string;
    title: string;
    date: Date;
    isPrevious: boolean;
    link: string;
    buttonIcon?: string;
    buttonText?: string;
    handleClick: () => void;
}