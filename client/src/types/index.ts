export type DummyUser = {
    username: string;
    messages: DummyMessage[];
    sameUser: boolean;
}

export type DummyMessage = {
    body: string;
    createdAt: Date;
}