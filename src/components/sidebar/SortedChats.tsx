import { cn } from '@/lib/utils';
import { Chat } from '@/types/chat';
import Link from 'next/link';
import React from 'react';

interface SortedChatsProps {
	chats: Chat[];
	isToday: boolean;
}

const SortedChats: React.FC<SortedChatsProps> = ({
	chats,
	isToday = false,
}) => {
	return (
		<div>
			<h4 className='text-brand-secondary text-xs font-montserrat capitalize font-semibold'>
				{isToday ? 'today' : 'past'}
			</h4>
			<div className='flex flex-col space-y-2 pt-2'>
				{chats.map(chat => (
					<Link
						href='#'
						className={cn(
							'px-3 hover:bg-brand-opacity-10 rounded-md py-1',
							chat.isActive && 'bg-brand-opacity-10 rounded-md'
						)}
						key={chat.id}
					>
						<p className='text-sm'>{chat.title}</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default SortedChats;
