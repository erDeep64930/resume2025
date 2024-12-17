
import Image from 'next/image';


import { skillApps } from '../constant/appSkill';

const RotatedAppSkill = () => {
    return (
  
            <div className="relative left-1/2 flex w-[22.5rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
                <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                    <div className="w-[5.75rem] aspect-square m-auto p-[0.1875rem]  rounded-full">
                        <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                            <p className='text-gradient font-rye text-lg font-semibold'>My Skills</p>
                        </div>
                    </div>
                </div>
                <ul>
                    {skillApps.map((app, index) => (
                        <li
                            className={`absolute top-0 left-1/2 h-1/2 -ml-[1.625rem] ${index === 1 && "rotate-[45deg]"
                                } ${index === 2 && "rotate-[90deg]"} ${index === 3 && "rotate-[135deg]"
                                } ${index === 4 && "rotate-[180deg]"} ${index === 5 && "rotate-[225deg]"
                                } ${index === 6 && "rotate-[270deg]"} ${index === 7 && "rotate-[315deg]"
                                } origin-bottom`}
                            key={app.id}
                        >
                            <div
                                className={`relative -top-[1.625rem] flex w-[3.25rem] h-[3.25rem] bg-n-7 border border-n-1/15 rounded-xl shadow-md shadow-sec hover:scale-105 transition-all duration-300 ${index === 1 && "-rotate-[45deg]"
                                    } ${index === 2 && "-rotate-[90deg]"
                                    } ${index === 3 &&
                                    "-rotate-[135deg]"
                                    } ${index === 4 &&
                                    "-rotate-[180deg]"
                                    } ${index === 5 &&
                                    "-rotate-[225deg]"
                                    } ${index === 6 &&
                                    "-rotate-[270deg]"
                                    } ${index === 7 &&
                                    "-rotate-[315deg]"
                                    }`}
                            >
                                <Image
                                    className="m-auto "
                                    src={app.icon}
                                    width={app.width}
                                    height={app.height}
                                    alt={app.title}
                                   

                                   
                                />
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
      
    );
}

export default RotatedAppSkill;
