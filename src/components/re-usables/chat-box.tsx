import React from 'react';
import { Input } from '@/components/ui/input';
import AllModels from '@/components/re-usables/all-models';
import { Globe, Paperclip, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SuggestedPrompt } from '@/types/chat';
import { v4 as uuidv4 } from 'uuid';

interface ChatBoxProps {
	selectedPrompt: SuggestedPrompt | null;
	setSelectedPrompt: React.Dispatch<
		React.SetStateAction<SuggestedPrompt | null>
	>;
}

const ChatBox: React.FC<ChatBoxProps> = ({ selectedPrompt, setSelectedPrompt }) => {
	return (
		<div className='border border-dark-tertiary absolute bottom-0 left-0 right-0 px-2 pt-1 h-40 rounded-xl max-w-3xl mx-auto'>
			<div className='border border-dark h-[95%] rounded-xl bg-dark-secondary flex flex-col'>
				<div className='flex-1'>
					<Input
						placeholder='Ask me anything...'
						className='h-full border-none focus-visible:ring-0 focus-visible:ring-offset-0'
						value={selectedPrompt?.prompt ?? ''}
						onChange={(e) => {
							setSelectedPrompt({
								id: uuidv4(),
								prompt: e.target.value,
							});
						}}
					/>
				</div>
				<div className='h-1/3 px-3 pb-2'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-4'>
							<AllModels />
							<div className='flex items-center gap-2 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer rounded-full px-2 py-1'>
								<Globe className='size-4' />
								<span className='text-sm'>Search</span>
							</div>
							<div className='flex items-center gap-2 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer rounded-full p-2'>
								<Paperclip className='size-4' />
							</div>
						</div>
						<div>
							<Button className='bg-brand-opacity-50 rounded-lg p-2 hover:bg-brand-opacity-75 transition-all duration-300 cursor-pointer'>
								<Send />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBox;
