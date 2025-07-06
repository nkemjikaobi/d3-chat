import React from 'react';
import { Input } from '@/components/ui/input';

const ChatBox = () => {
	return (
		<div className='border border-dark-tertiary absolute bottom-0 left-0 right-0 px-2 pt-1 h-40 rounded-xl max-w-3xl mx-auto'>
			<div className='border border-dark h-[95%] rounded-xl bg-dark-secondary flex flex-col'>
				<div className='flex-1'>
					<Input
						placeholder='Ask me anything...'
						className='h-full border-none focus-visible:ring-0 focus-visible:ring-offset-0'
					/>
				</div>
				<div className='h-1/4 px-3'>models etc</div>
			</div>
		</div>
	);
};

export default ChatBox;
