import type { Metadata } from "next";
import { Roboto, Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import { PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchChats from "@/components/sidebar/SearchChats";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D3 Chat",
  description: "AI powered chatbot",
};

export default function RootLayout({  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='en'>
			<body
				className={`${roboto.variable} ${montserrat.variable} ${nunito.variable} antialiased`}
			>
				<div className='flex h-screen w-full'>
					<aside className='flex flex-col p-4 space-y-3 w-1/4'>
						<div className='gap-2 flex items-center justify-center w-full relative'>
							<PanelLeft className='size-4 absolute left-0' />
							<h1 className='text-lg font-montserrat font-bold'>D3.Chat</h1>
						</div>
						<Button className='bg-brand-opacity-50 hover:bg-brand-opacity-75 capitalize text-white w-full rounded-lg shadow-md'>
							new chat
						</Button>
						<SearchChats />
					</aside>
					<main className='flex-1 p-4'>{children}</main>
				</div>
			</body>
		</html>
	);
}
