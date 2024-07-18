"use client"

import PageHeading from '@/components/PageHeading'
import React from 'react'

const Upcoming = () => {
    return (
        <section className="flex flex-column gap-10">
            <PageHeading
                title='Upcoming Meetings'
                back={true}
                subtitle='List of the scheduled meetings'
            />
        </section>
    )
}

export default Upcoming
