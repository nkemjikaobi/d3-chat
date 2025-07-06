'use client';
import ChatBox from '@/components/re-usables/chat-box';
import WelcomeOptions from '@/components/welcome/welcome-options';
import { SuggestedPrompt } from '@/types/chat';
import React, { useState } from 'react';

const WelcomePage = () => {
	const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
	const [selectedPrompt, setSelectedPrompt] = useState<SuggestedPrompt | null>(null);

	return (
		<div className='flex flex-col max-w-3xl mx-auto space-y-5'>
			<h1 className='text-2xl font-bold'>How can I help you today?</h1>
			<WelcomeOptions
				selectedOptionId={selectedOptionId}
				setSelectedOptionId={setSelectedOptionId}
				setSelectedPrompt={setSelectedPrompt}
			/>
			<ChatBox
				selectedPrompt={selectedPrompt}
				setSelectedPrompt={setSelectedPrompt}
			/>
		</div>
	);
};

export default WelcomePage;
