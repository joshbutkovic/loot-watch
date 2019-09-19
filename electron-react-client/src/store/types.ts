// Our chat-level state object
export interface ErrorState {
    error: string;
}

// Feel free to include more types for good measure.

export interface UserInfo {
    name: string;
    id: number;
}

export interface TemplateItem {
    item: string;
    text: string;
}

export interface MessagePayload {
    timestamp: Date;
    user: string;
    message: {
        type: 'text' | 'template';
        content?: string;
        items?: TemplateItem[];
    };
}
