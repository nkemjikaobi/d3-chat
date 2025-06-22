export interface Chat {
	id: number;
	timestamp: string;
	title: string;
	isActive: boolean;
	isPinned: boolean;
	messages: Message[];
}

export interface Message {
	id: number;
	content: string;
	sender: string;
	timestamp: string;
	isMessageSentByUser: boolean;
	previousMessageId: number | null;
	nextMessageId: number | null;
}