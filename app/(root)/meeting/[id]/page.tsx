"use client"

import Loader from '@/components/Loader'
import MeetingRoom from '@/components/MeetingRoom'
import MeetingSetup from '@/components/MeetingSetup'
import { useGetCall } from '@/hooks/useGetCall'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const Meeting = () => {
    const { id } = useParams()
    const { isLoaded, user } = useUser()
    const { call, isCallLoading } = useGetCall(id)
    const [isSetUpComplete, setIsSetUpComplete] = useState<boolean>(false)
    
    if (isCallLoading || !isLoaded) return <Loader/>

    return (
        <section className="w-full h-screen">
            <StreamCall call={call}>
                <StreamTheme className='light'>
                    {!isSetUpComplete ? <MeetingSetup setIsSetupComplete={setIsSetUpComplete}/> : <MeetingRoom/>}
                </StreamTheme>
            </StreamCall>
        </section>
    )
}

export default Meeting
