import { Dialog } from 'primereact/dialog';

import { MeetingModalProps } from "@/types";
import { Button } from 'primereact/button';

const MeetingModal = ({ isOpen, onClose, title, className, children, 
        handleClick, buttonText, isInstant, image, buttonClassName, buttonIcon
    }: MeetingModalProps) => {
    return (
        <Dialog visible={isOpen} onHide={onClose}>
            <div className="flex flex-column w-full gap-6 px-2">
                <div className="flex flex-column gap-5">
                    <h1 className={`text-3xl font-bold m-0 ${className}`}>{title}</h1>
                    {children}
                    <Button onClick={handleClick} label={buttonText}></Button>
                </div>
            </div>
        </Dialog>
    )
}

export default MeetingModal;
