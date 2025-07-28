export type RegisterBody = {
    username: string;
    email: string;
    password: string;
}

export type LoginBody = {
    email: string;
    password: string;
}

export type CodeConvertBody = {
    code: string;
    targetLang: string;
}

export type ChatBody = {
    question: string;
}