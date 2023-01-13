export interface IUser {
    id: number;
    username: string;
    fullname: string;
    email: string;
    avatar: string;
    is_email_verified: number;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}
