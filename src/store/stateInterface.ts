export interface StateInterface {
    entities?: StateEntitiesInterface
}

export interface StateEntitiesInterface {
    words?: WordsInterface,
    users?: UsersInterface,
}

export interface WordsInterface {
    entities?: Record<string, WordInterface>,
    ids?: number[],
    status?: string,
}

export interface WordInterface {
    id: number,
    english: string,
    russian: string
}

export interface UsersInterface {
    entities?: UserInterface[],
    ids?: number[],
    status?: string,
}

export interface UserInterface {
    id: string,
    login: string,
    password: string
}

