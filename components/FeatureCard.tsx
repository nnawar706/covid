"use client"

import Image from 'next/image';

import { CardProps } from '@/types';

const FeatureCard = ({ className, icon, title, description, handleClick }: CardProps) => {
    return (
        <section className="col-12 md:col-6 xl:col-3">
            <div className={`p-4 w-full border-round cursor-pointer ${className}`}
                onClick={handleClick}
            >
                <div className="border-rounded pb-5">
                    <i className={`bg-cyan-600 p-2 border-round text-100 font-bold ${icon}`}></i>
                </div>

                <div className="flex flex-column gap-2">
                    <h1 className="text-2xl lg:text-3xl font-bold text-100 m-0">{title}</h1>
                    <p className="text-md font-normal text-200 m-0">{description}</p>
                </div>
            </div>
        </section>
    )
}

export default FeatureCard;
