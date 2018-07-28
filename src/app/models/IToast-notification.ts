export interface ToastNotificationInterface {
    title: string;
    body: string;
    timeout: number;
    position: number;
    progressBar: boolean;
    closeClick: boolean;
    newTop: boolean;
    maxHeight: number;
    titleMaxLength: number;
    bodyMaxLength: number;
}
