import { Search } from 'lucide-react';
import React from 'react';
import { Input } from '@/components/ui/input';

const SearchChats = () => {
	return (
		<div>
			<div className='flex items-center gap-2 w-full'>
				<Search className='size-4' />
				<Input
					placeholder='Search your chats...'
					className='w-full border border-none focus-visible:ring-0 focus-visible:ring-offset-0'
				/>
			</div>
			<hr className='border-t border-gray-500 opacity-30' />
		</div>
	);
};

export default SearchChats;
