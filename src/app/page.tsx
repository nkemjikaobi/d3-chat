import WelcomePage from '@/pages/WelcomePage';
import ChatBox from '@/components/re-usables/chat-box';

export default function Home() {
	return (
		<div className='relative container mx-auto h-full pt-20'>
			<WelcomePage />
			<ChatBox />
		</div>
	);
}
