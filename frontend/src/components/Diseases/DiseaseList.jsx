import React from 'react';
import { diseases } from '../../assets/data/diseases';
import DiseaseCard from './DiseaseCard';

const DiseaseList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] 
        lg:mt-[55px]">
            {diseases.map((disease) => (
                <DiseaseCard key={disease.id} disease={disease} />
            ))}
        </div>
    );
};

export default DiseaseList;