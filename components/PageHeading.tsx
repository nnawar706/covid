import { PageHeadingProps } from '@/types'
import { useRouter } from 'next/navigation'
import { Button } from 'primereact/button'
import React from 'react'

const PageHeading = ({ title, subtitle, back }: PageHeadingProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-row mb-4 gap-1">
      {back && (
        <Button type='button' icon='pi pi-chevron-left' text 
        onClick={() => router.back()}/>
      )}
      <div className='flex flex-column justify-content-center gap-1'>
        <span className="block text-gray-800 font-semibold">{title}</span>
        {subtitle && <span className="text-xs text-600">{subtitle}</span>}
      </div>
    </div>
  )
}

export default PageHeading
