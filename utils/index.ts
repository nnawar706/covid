import { Toast } from "primereact/toast";
import React from "react";

export const callToast = (
    toast: React.RefObject<Toast | null>,
    type: 'warn' | 'success' | 'error',
    message: string
) => {
    if (!toast?.current) return;

    toast.current.show({
        severity: type,
        summary: type === 'warn' ? 'Warning' : (type === 'success' ? 'Successful' : 'Error'),
        detail: message,
        life: 3000
    })
}