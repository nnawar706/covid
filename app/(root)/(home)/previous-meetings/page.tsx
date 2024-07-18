"use client"

import MeetingList from '@/components/MeetingList'
import PageHeading from '@/components/PageHeading'
import React from 'react'

const Previous = () => {
    return (
        <section className="flex flex-column gap-10">
            <PageHeading
                title='Previous Meetings'
                back={true}
                subtitle='List of the meetings that you have previously attended'
            />

            <MeetingList type='Previous'/>
        </section>
    )
}

export default Previous
