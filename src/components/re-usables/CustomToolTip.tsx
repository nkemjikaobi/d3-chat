'use client';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import React from 'react';

interface CustomToolTipProps {
	trigger: React.ReactNode;
	content: string;
}

const CustomToolTip: React.FC<CustomToolTipProps> = ({ trigger, content }) => {
	return (
		<Tooltip>
			<TooltipTrigger className='cursor-pointer hover:bg-brand-opacity-10 rounded-full p-2'>
				{trigger}
			</TooltipTrigger>
			<TooltipContent>
				<div className='text-xs bg-background rounded-lg p-2'>{content}</div>
			</TooltipContent>
		</Tooltip>
	);
};

export default CustomToolTip;
