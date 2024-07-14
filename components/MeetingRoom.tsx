import { callLayoutOptions } from '@/constants'
import { CallControls, CallingState, CallParticipantsList, CallStatsButton, PaginatedGridLayout, SpeakerLayout, useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import React, { useState } from 'react'
import Loader from './Loader'

const MeetingRoom = () => {
  const call = useCall()
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const isPersonalRoom = !!searchParams.get('is_personal')
  const { useLocalParticipant } = useCallStateHooks()
  const localParticipant = useLocalParticipant()
  const { useCallCallingState } = useCallStateHooks()
  const callingState = useCallCallingState()
  const [callLayout, setCallLayout] = useState<"grid" | "speaker-left" | "speaker-right">("speaker-left")
  const [showParticipant, setShowParticipant] = useState<boolean>(false)

  const isMeetingOwner = isPersonalRoom ? localParticipant && 
                          call?.state.createdBy && 
                          localParticipant.userId === call.state.createdBy.id : false

  if (callingState !== CallingState.JOINED) return <Loader/>
  
  const CallLayout = () => {
    switch(callLayout) {
      case "grid":
        return <PaginatedGridLayout/> 
      case "speaker-left":
        return <SpeakerLayout participantsBarPosition="right"/>
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition="left"/>
      default:
        return
    }
  }

  const onEndCall = async () => {
    await call?.endCall()
    push('/')
  }

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4">
      
      <div className="flex justify-content-end mb-4">
      <Dropdown value={callLayout} 
        options={callLayoutOptions} 
        placeholder='Select a Layout'
        className="w-14rem" 
        onChange={(e) => setCallLayout(e.value)}/>
      </div>

      <div className="relative flex align-items-center justify-content-center">
        <div className="flex w-full align-items-center">
          <CallLayout/>
        </div>
        <div className={`h-[calc(00vh-86px)] ml-2 ${showParticipant ? 'block' : 'hidden'}`}>
          <CallParticipantsList onClose={() => setShowParticipant(false)}/>
        </div>
      </div>

      <div className="fixed bottom-0 flex flex-wrap w-full align-items-center 
      justify-content-center gap-3">
        <CallControls onLeave={() => push('/')}/>
        <CallStatsButton/>

        <Button icon="pi pi-users" rounded 
        onClick={() => setShowParticipant(!showParticipant)}/>

        {!isPersonalRoom && isMeetingOwner && <Button label='End call for everyone'
        onClick={onEndCall} severity='danger'/>}
      </div>
    </section>
  )
}

export default MeetingRoom
