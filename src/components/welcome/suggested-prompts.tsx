import React from 'react';

interface SuggestedPromptsProps {
	prompts: Array<{
		id: number;
		prompt: string;
	}>;
}

const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({ prompts }) => {
	return (
		<div className='flex flex-col gap-2 pt-4 '>
			{prompts.map(prompt => (
				<div
					className='hover:bg-brand-opacity-10 cursor-pointer rounded-lg py-2 px-4'
					key={prompt.id}
				>
					{prompt.prompt}
				</div>
			))}
		</div>
	);
};

export default SuggestedPrompts;
