"use client"

import { MeetingSetupProps } from '@/types'
import { DeviceSelectorAudioInput, DeviceSelectorVideo, DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'
import React, { useEffect, useState } from 'react'

const MeetingSetup = ({ setIsSetupComplete }: MeetingSetupProps) => {
  const call = useCall()
  const [isChecked, setIsChecked] = useState<boolean>(false)

  useEffect(() => {
    if (isChecked) {
      call?.camera.disable()
      call?.microphone.disable()
    } else {
      call?.camera.enable()
      call?.microphone.enable()
    }
  }, [isChecked, call?.camera, call?.microphone])

  return (
    <div className="flex h-screen w-full flex-column align-items-center justify-content-center gap-3">
      <h1 className="text-center text-2xl font-bold text-gray-800">Setup</h1>
      <VideoPreview/>
      <div className="flex align-items-center justify-content-center gap-2">
        <span className="flex align-items-center gap-2">
          <Checkbox value={""} onChange={() => setIsChecked(!isChecked)} checked={isChecked}/>
          <label className="text-sm">Join with mic and camera off</label>
        </span>
        <DeviceSettings/>
      </div>
      <Button label="Join Meeting"
      onClick={() => {
        setIsSetupComplete(true)
        call?.join()
      }}/>
    </div>
  )
}

export default MeetingSetup
