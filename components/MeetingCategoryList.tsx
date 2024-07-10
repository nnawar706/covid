"use client"

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

import FeatureCard from './FeatureCard';
import { initialValues } from '@/constants';
import MeetingModal from './MeetingModal';
import { useStreamVideoClient } from '@stream-io/video-react-sdk';
import { Toast } from 'primereact/toast';
import { callToast } from '@/utils';

const MeetingCategoryList = () => {
    const { push } = useRouter();
    const toast = useRef<Toast | null>(null);
    const { user } = useUser();
    const client = useStreamVideoClient();
    const [value, setValue] = useState(initialValues);
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
        } catch (error) {
            callToast(toast, 'error', 'Something went wrong.')
            console.log(error)
        }
    }
    
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
