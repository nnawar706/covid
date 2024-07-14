import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useGetCall = (id: string | string[]) => {
    const [call, setCall] = useState<Call>()
    const [isCallLoading, setIsCallLoading] = useState<boolean>(true)

    const client = useStreamVideoClient()

    useEffect(() => {
        if (!client) return;

        const loadCall = async () => {
            try {
                const { calls } = await client.queryCalls({ filter_conditions: { id } })

                if (calls.length > 0) setCall(calls[0])
            } catch (error) {
                console.log(error)
            } finally {
                setIsCallLoading(false)
            }
        }

        loadCall()
    }, [client, id])

    return { call, isCallLoading }
} 