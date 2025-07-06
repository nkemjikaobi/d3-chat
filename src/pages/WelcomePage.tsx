import WelcomeOptions from '@/components/welcome/welcome-options';
import React from 'react';

const WelcomePage = () => {
	return (
		<div className='flex flex-col max-w-3xl mx-auto space-y-5'>
			<h1 className='text-2xl font-bold'>How can I help you today?</h1>
			<WelcomeOptions />
		</div>
	);
};

export default WelcomePage;
