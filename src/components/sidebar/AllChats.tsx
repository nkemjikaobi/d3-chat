import React from 'react';
import { isToday, parseISO } from 'date-fns';
import { Chat } from '@/types/chat';
import SortedChats from './SortedChats';

const AllChats = () => {
	const todaysChats: Chat[] = chats.filter(chat => {
		const chatDate = parseISO(chat.timestamp);
		return isToday(chatDate);
	});

	const pastChats: Chat[] = chats.filter(chat => {
		const chatDate = parseISO(chat.timestamp);
		return !isToday(chatDate);
	});

	return (
		<div className='flex flex-col gap-4'>
			{todaysChats.length && <SortedChats chats={todaysChats} isToday={true} />}
			{pastChats.length && <SortedChats chats={pastChats} isToday={false} />}
		</div>
	);
};

export default AllChats;

const chats = [
	{
		id: 1,
		timestamp: '2025-06-21 10:00:00',
		title: 'DND drag and drop issue',
		isActive: true,
		isPinned: false,
		messages: [
			{
				id: 1,
				content:
					'I am facing an issue with the DND drag and drop feature. When I try to drag and drop an item, it does not work as expected.',
				sender: 'John Doe',
				timestamp: '2025-06-22 10:00:00',
				isMessageSentByUser: true,
				previousMessageId: null,
				nextMessageId: 2,
			},
			{
				id: 2,
				content: 'Okay let me check your code and see how we can fix it.',
				sender: 'AI',
				timestamp: '2025-06-22 10:01:00',
				isMessageSentByUser: false,
				previousMessageId: 1,
				nextMessageId: 3,
			},
		],
	},
	{
		id: 2,
		timestamp: '2025-06-22 10:00:00',
		title: 'Blog Writing Help',
		isActive: false,
		isPinned: true,
		messages: [
			{
				id: 1,
				content:
					'I need help writing a blog post about the latest trends in technology.',
				sender: 'John Doe',
				timestamp: '2025-06-23 15:00:00',
				isMessageSentByUser: true,
				previousMessageId: null,
				nextMessageId: 2,
			},
			{
				id: 2,
				content:
					'Sure, I can help you with that. What is the topic of the blog post?',
				sender: 'AI',
				timestamp: '2025-06-23 15:01:00',
				isMessageSentByUser: false,
				previousMessageId: 1,
				nextMessageId: 3,
			},
		],
	},
	{
		id: 3,
		timestamp: '2025-06-22 10:00:00',
		title: 'Equal Card Heights Flexbox',
		isActive: false,
		isPinned: false,
		messages: [
			{
				id: 1,
				content:
					'I need help with a flexbox issue. I want to make sure that all the cards have the same height.',
				sender: 'John Doe',
				timestamp: '2025-06-24 10:00:00',
				isMessageSentByUser: true,
				previousMessageId: null,
				nextMessageId: 2,
			},
			{
				id: 2,
				content: 'I can help you with that. What is the issue?',
				sender: 'AI',
				timestamp: '2025-06-24 10:01:00',
				isMessageSentByUser: false,
				previousMessageId: 1,
				nextMessageId: 3,
			},
		],
	},
];
