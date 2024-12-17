
import { infoMenu } from '@/app/constant/infoMenu';
import React from 'react';

const PersonalInfo = () => {
    return (
        <div className="col-span-1 flex flex-col text-center bg-white/10 rounded-lg shadow divide-y divide-pri">
            {/* birthday */}
            <div className="mb-2">{
                infoMenu.map(({id,title,description})=>{
                    return (
                        <div className="flex items-center font-semibold leading-4  transition px-5 py-2  border-b border-pri " key={id}>

                        <span className="text-pri text-sm font-robot"> {title}</span>
                        <span className="text-pri ml-2">:</span>
                        <span className="font-normal ml-auto text-sec text-xs">{description}</span>
                    </div>
                    )
                })}
               
            </div>
           

        </div>
    );
}

export default PersonalInfo;
