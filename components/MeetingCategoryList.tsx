import React from 'react'

import FeatureCard from './FeatureCard'

const MeetingCategoryList = () => {
    return (
        <section className="grid">
            <FeatureCard
                icon="pi pi-plus"
                title="New Meeting"
                description="start an instant meeting"
                className="bg-orange-400"
                // handleClick={() => }
            />
            <FeatureCard
                icon="pi pi-users"
                title="Join Meeting"
                description="via invitation link"
                className="bg-cyan-400"
                // handleClick={() => }
            />
            <FeatureCard
                icon="pi pi-calendar"
                title="Schedule Meeting"
                description="Plan your meeting"
                className="bg-purple-400"
                // handleClick={() => }
            />
            <FeatureCard
                icon="pi pi-video"
                title="View Recordings"
                description="Meeting recordings"
                className="bg-yellow-400"
                // handleClick={() => }
            />
        </section>
    )
}

export default MeetingCategoryList
