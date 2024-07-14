import Image from 'next/image'
import React from 'react'

const Loader = () => {
    return (
        <div className="flex justify-content-center align-items-center h-screen">
            <Image src={"/icons/loading.svg"} alt="loader"
            width={70} height={70}/>
        </div>
    )
}

export default Loader
