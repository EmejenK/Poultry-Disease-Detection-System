import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const DiseaseCard = ({ disease }) => {
    
    const { name, characteristics, preventiveMeasures, vaccines, photo } = disease;

    return (
        <div className="p-3 lg:p-5">
            <div>
                <img src={photo} className="w-full" alt={name} />
            </div>

            <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
                {name}
            </h2>

            <div className="mt-2 lg:mt-4">
                <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
                    Characteristics:
                </h3>
                <p className="text-[14px] leading-6 font-[400] text-textColor mt-1">{characteristics}</p>
            </div>

            <div className="mt-2 lg:mt-4 flex items-center justify-between">
                <div>
                    <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
                        Preventive Measures:
                    </h3>
                    <p className="text-[14px] leading-6 font-[400] text-textColor mt-1">{preventiveMeasures}</p>
                </div>
            </div>

            <div className="mt-2 lg:mt-4">
                <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
                    Vaccines:
                </h3>
                <p className="text-[14px] leading-6 font-[400] text-textColor mt-1">{vaccines}</p>
            </div>

            <Link to="/diseases" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
            flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
            </Link>
        </div>

    )
};

export default DiseaseCard;