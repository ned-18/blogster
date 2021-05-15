// Contact Me
export interface Mail {
    name: string | null;
    email: string;
    subject: string;
    message: string;
}

export interface MailRespone {
    success: boolean;
    message: string;
}

