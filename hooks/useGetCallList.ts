import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { Call, CallRecording, useStreamVideoClient } from '@stream-io/video-react-sdk'

const useGetCallList = () => {
  const curTime = new Date()
  const { user } = useUser()
  const client = useStreamVideoClient()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [callList, setCallList] = useState<Call[]>([])

  useEffect(() => {
    const getCalls = async () => {
        
        if (!client || !user?.id) return 

        setIsLoading(true)

        try {
            const { calls } = await client.queryCalls({
                filter_conditions: {
                    starts_at: { $exists: true },
                    $or: [
                        { created_by_user_id: user.id },
                        { members: { $in: [user.id] } }
                    ]
                },
                sort: [
                    { field: 'starts_at', direction: -1 }
                ]
            })

            setCallList(calls)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    getCalls()
  }, [user?.id, client])

  const previousCalls = callList?.filter(({state: { startsAt, endedAt }}: Call) => {
    return startsAt && new Date(startsAt) < curTime && !!endedAt
  })

  const upcomingCalls = callList?.filter(({state: {startsAt}}: Call) => {
    return startsAt && new Date(startsAt) > curTime
  })

  return { previousCalls, upcomingCalls, recordings: callList, isLoading }
}

export default useGetCallList
