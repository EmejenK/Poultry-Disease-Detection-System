import { useState } from 'react';
import { diseases } from '../../assets/data/diseases';
import DiseaseCard from '../../components/Diseases/DiseaseCard';
import Testimonial from '../../components/Testimonial/Testimonial';

const Diseases = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredDiseases = diseases.filter(disease => {
        return disease.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <>
            <section className="bg-[#fff9ea]">
                <div className="container text-center">
                    <h2 className="heading">Find a Disease</h2>
                    <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center 
                    justify-between">
                        <input
                            type="search"
                            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none 
                            cursor-pointer"
                            placeholder="Search Vetenary"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                        <button className="btn mt-0 rounded-[0px] rounded-r-md">Search</button>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {filteredDiseases.map((disease) => (
                            <DiseaseCard key={disease.id} disease={disease} />
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="lg:w-[470px] mx-auto ">
                        <h2 className="heading text-center">
                            What Our Clients Say
                        </h2>
                        <p className="text__para text-center">
                            Our clients are our biggest supporters. Read what they have to say about us.
                        </p>
                    </div>

                    <Testimonial />
                    
                </div>
            </section>
        </>
    )
};

export default Diseases;
