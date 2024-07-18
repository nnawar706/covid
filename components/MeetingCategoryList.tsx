"use client"

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from 'primereact/inputtextarea';

import FeatureCard from './FeatureCard';
import { initialValues } from '@/constants';
import MeetingModal from './MeetingModal';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { Toast } from 'primereact/toast';
import { callToast } from '@/utils';
import { Calendar } from 'primereact/calendar';

const MeetingCategoryList = () => {
    const { push } = useRouter();
    const toast = useRef<Toast | null>(null);
    const { user } = useUser();
    const client = useStreamVideoClient();
    const [value, setValue] = useState(initialValues);
    const [callDetail, setCallDetail] = useState<Call>()
    const [meetingState, setMeetingState] = useState<
        'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
    >(undefined);

    const createMeeting = async () => {
        if (!client || !user) {
            callToast(toast, 'error', 'Something went wrong.')
            return
        }

        try {
            const callId = crypto.randomUUID();

            const call = client.call('default', callId)

            if (!call) {
                callToast(toast, 'error', 'Failed to call.')
                return
            }

            await call.getOrCreate({
                data: {
                    starts_at: value.dateTime.toISOString(),
                    custom: {
                        description: value.description
                    }
                }
            })

            setCallDetail(call)

            callToast(toast, 'success', 'New meeting created.')

            if (value.description === '') {
                push(`/meeting/${call.id}`)
            }
        } catch (error) {
            callToast(toast, 'error', 'Something went wrong.')
            console.log(error)
        } finally {
            setValue(initialValues)
        }
    }

    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail?.id}`
    
    return (
        <section className="grid">
            <Toast ref={toast}/>
            <FeatureCard
                icon="pi pi-plus"
                title="New Meeting"
                description="start an instant meeting"
                className="bg-orange-400"
                handleClick={() => setMeetingState('isInstantMeeting')}
            />
            <FeatureCard
                icon="pi pi-users"
                title="Join Meeting"
                description="via invitation link"
                className="bg-cyan-400"
                handleClick={() => setMeetingState('isJoiningMeeting')}
            />
            <FeatureCard
                icon="pi pi-calendar"
                title="Schedule Meeting"
                description="Plan your meeting"
                className="bg-purple-400"
                handleClick={() => setMeetingState('isScheduleMeeting')}
            />
            <FeatureCard
                icon="pi pi-video"
                title="View Recordings"
                description="Meeting recordings"
                className="bg-yellow-400"
                handleClick={() => push('/recordings')}
            />

            {callDetail ? (
                <MeetingModal
                    isOpen={meetingState === 'isScheduleMeeting'}
                    onClose={() => setMeetingState(undefined)}
                    title='Meeting Scheduled'
                    handleClick={() => {
                        navigator.clipboard.writeText(meetingLink)
                        
                        callToast(toast, 'success', 'Meeting link copied.')
                    }}
                    className='text-center'
                    buttonIcon='pi pi-clone'
                    buttonText='Copy Meeting Link'
                />
            ) : (
                <MeetingModal
                    isOpen={meetingState === 'isScheduleMeeting'}
                    onClose={() => setMeetingState(undefined)}
                    title='Schedule Meeting'
                    handleClick={createMeeting}
                    buttonText='Create Meeting'
                >
                    <div className="flex flex-column gap-2">
                        <label className="text-xs">Description</label>
                        <InputTextarea id='description' autoResize rows={5} cols={30} 
                        value={value.description}
                        onChange={(e) => {
                            setValue({ ...value, description: e.target.value })
                        }}/>
                    </div>
                    <div className="flex flex-column gap-2">
                        <label className="text-xs">Date & Time</label>
                        <Calendar value={value.dateTime} showIcon showTime hourFormat='24'
                        onChange={(e) => {
                            setValue({ ...value, dateTime: e.value as Date })
                        }}/>
                    </div>
                </MeetingModal>
            )}

            <MeetingModal
                isOpen={meetingState === 'isInstantMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Start an Instant Meeting"
                buttonText="Start Meeting"
                handleClick={createMeeting}
            />
        </section>
    )
}

export default MeetingCategoryList
