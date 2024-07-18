"use client"

import useGetCallList from '@/hooks/useGetCallList'
import { MeetingListProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import Loader from './Loader'
import { Call, CallRecording } from '@stream-io/video-react-sdk'
import MeetingCard from './MeetingCard'

const MeetingList = ({ type }: MeetingListProps) => {
  const router = useRouter()
  const { previousCalls, upcomingCalls, recordings, isLoading } = useGetCallList()
  
  const getCalls = () => {
    switch (type) {
      case 'Previous': 
        return previousCalls
      case 'Recording':
        return recordings
      case 'Upcoming':
        return upcomingCalls
      default:
        return []
    }
  }

  const callList = getCalls()

  return isLoading ? <Loader/> : (
    <section className="grid gap-5">
      {/* {callList && callList.length == 0 ? (<></>) : 
      (callList.map((call: Call | CallRecording) => (
        <MeetingCard
          key={(call as Call).id}
          icon={''}
        />
      )))} */}
    </section>
  )
}

export default MeetingList
