'use client';
import { Sparkles, FileText, Code, GraduationCap } from 'lucide-react';
import React from 'react';
import SuggestedPrompts from '@/components/welcome/suggested-prompts';
import { SuggestedPrompt } from '@/types/chat';
import { v4 as uuidv4 } from 'uuid';

export const options = [
	{
		id: 1,
		title: 'Create',
		icon: <Sparkles />,
		suggested_prompts: [
			{
				id: uuidv4(),
				prompt: 'Write a short story about how to make a sandwich.',
			},
			{
				id: uuidv4(),
				prompt: 'How can I make my website more accessible?',
			},
			{
				id: uuidv4(),
				prompt: 'What are the best practices for SEO?',
			},
			{
				id: uuidv4(),
				prompt: 'What is the capital of Spain?',
			},
		],
	},
	{
		id: 2,
		title: 'Explore',
		icon: <FileText />,
		suggested_prompts: [
			{
				id: uuidv4(),
				prompt:
					'Tell me about the hidden gems of Tokyo that tourists often miss.',
			},
			{
				id: uuidv4(),
				prompt:
					'What are the most fascinating deep sea creatures we know about?',
			},
			{
				id: uuidv4(),
				prompt:
					'How do ancient civilizations like the Mayans predict solar eclipses?',
			},
			{
				id: uuidv4(),
				prompt: 'What makes the Northern Lights appear in different colors?',
			},
		],
	},
	{
		id: 3,
		title: 'Code',
		icon: <Code />,
		suggested_prompts: [
			{
				id: uuidv4(),
				prompt:
					'Help me debug this React component that keeps re-rendering infinitely.',
			},
			{
				id: uuidv4(),
				prompt:
					'Write a Python script to automatically organize my downloads folder.',
			},
			{
				id: uuidv4(),
				prompt:
					"What's the difference between useState and useReducer in React?",
			},
			{
				id: uuidv4(),
				prompt:
					'How do I implement a custom hook for API calls with loading states?',
			},
		],
	},
	{
		id: 4,
		title: 'Learn',
		icon: <GraduationCap />,
		suggested_prompts: [
			{
				id: uuidv4(),
				prompt: "Explain quantum computing like I'm a high school student.",
			},
			{
				id: uuidv4(),
				prompt: 'Teach me the basics of machine learning in 5 minutes.',
			},
			{
				id: uuidv4(),
				prompt: 'What are the fundamental principles of design thinking?',
			},
			{
				id: uuidv4(),
				prompt: 'How do neural networks actually learn and improve over time?',
			},
		],
	},
];

export const defaultPrompts = [
	{
		id: uuidv4(),
		prompt: 'Negan and Rick are fighting in a bar, who wins?',
	},
	{
		id: uuidv4(),
		prompt: 'Was Shiv Roy a good wife?',
	},
	{
		id: uuidv4(),
		prompt: 'What happened to Raymond Reddington?',
	},
	{
		id: uuidv4(),
		prompt: 'Did Sam Winchester break his shoulder in season 10?',
	},
];

interface WelcomeOptionsProps {
	selectedOptionId: number | null;
	setSelectedOptionId: (id: number) => void;
	setSelectedPrompt: React.Dispatch<
		React.SetStateAction<SuggestedPrompt | null>
	>;
}

const WelcomeOptions: React.FC<WelcomeOptionsProps> = ({
	selectedOptionId,
	setSelectedOptionId,
	setSelectedPrompt,
}) => {
	const suggested_prompts = options.find(
		option => option.id === selectedOptionId
	)?.suggested_prompts;

	return (
		<div className='flex flex-wrap gap-4'>
			{options.map(option => (
				<div
					key={option.title}
					className={`flex items-center space-x-2 bg-brand-opacity-10 hover:bg-brand-opacity-90 cursor-pointer rounded-3xl py-2 px-4 ${
						selectedOptionId === option.id ? 'bg-brand-opacity-50' : ''
					}`}
					onClick={() => setSelectedOptionId(option.id)}
				>
					{option.icon}
					<h2 className='text-xs font-bold'>{option.title}</h2>
				</div>
			))}
			{
				<SuggestedPrompts
					prompts={suggested_prompts ?? defaultPrompts}
					setSelectedPrompt={setSelectedPrompt}
				/>
			}
		</div>
	);
};

export default WelcomeOptions;
