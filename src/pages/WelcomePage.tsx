import WelcomeOptions from '@/components/welcome/welcome-options'
import React from 'react'

const WelcomePage = () => {
  return (
    <div className="container mx-auto">
        <div className="flex flex-col h-screen max-w-2xl mx-auto space-y-5">
            <h1 className="text-2xl font-bold">How can I help you today?</h1>
            <WelcomeOptions />
        </div>
    </div>
  )
}

export default WelcomePage