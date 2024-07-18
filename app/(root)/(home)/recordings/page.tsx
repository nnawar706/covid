"use client"

import PageHeading from '@/components/PageHeading'
import React from 'react'

const Recordings = () => {
    return (
        <section className="flex flex-column gap-10">
            <PageHeading
                title='Recordings'
                back={true}
                subtitle='List of the recordings of meetings that you have previously attended'
            />
        </section>
    )
}

export default Recordings
