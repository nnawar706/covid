"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

import FeatureCard from './FeatureCard';
import { initialValues } from '@/constants';
import MeetingModal from './MeetingModal';

const MeetingCategoryList = () => {
    const { user } = useUser();
    const { push } = useRouter();
    const [value, setValue] = useState(initialValues);
    const [meetingState, setMeetingState] = useState<
        'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
    >(undefined);

    const createMeeting = () => {}
    
    return (
        <section className="grid">
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
