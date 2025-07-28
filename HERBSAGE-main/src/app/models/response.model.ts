export type RegisterResponse = {
    success: boolean;
    message: string;
}

export type LoginResponse = {
    success: boolean;
    message: string;
    token: string;
}

export type CodeConvertResponse = {
    success: boolean;
    convertedCode: string;
}

export type ChatResponse = {
    success: boolean;
    question: string;
    reply: string;
}

type User = {
    _id:string;
    username:string;
    email: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export type GetMeResponse = {
    success: boolean;
    user: User
}

export type LogoutResponse = {
    success: boolean;
    message: string;
}