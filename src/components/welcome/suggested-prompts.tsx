import { SuggestedPrompt } from '@/types/chat';
import React from 'react';

interface SuggestedPromptsProps {
	prompts: SuggestedPrompt[];
	setSelectedPrompt: React.Dispatch<
		React.SetStateAction<SuggestedPrompt | null>
	>;
}

const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({ prompts, setSelectedPrompt }) => {
	return (
		<div className='flex flex-col gap-2 pt-4 '>
			{prompts.map(prompt => (
				<div
					className='hover:bg-brand-opacity-10 cursor-pointer rounded-lg py-2 px-4 text-sm'
					key={prompt.id}
					onClick={() => {
						setSelectedPrompt(prompt);
					}}
				>
					{prompt.prompt}
				</div>
			))}
		</div>
	);
};

export default SuggestedPrompts;
