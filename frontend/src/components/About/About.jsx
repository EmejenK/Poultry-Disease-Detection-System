import aboutImg from '../../assets/images/about.jpg';
import aboutCardImg from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

                    {/* ==================== About Img ====================*/}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <img src={aboutImg} alt="" />
                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] 
                        lg:right-[22%]">
                            <img src={aboutCardImg} alt="" />
                        </div>
                    </div>

                    {/* ==================== About Content ====================*/}
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className="heading">
                            Empowering Veterinarians with Advanced Poultry Disease Detection
                        </h2>
                        <p className="text__para" style={{ textAlign: 'justify' }}>
                            Our innovative poultry disease detection system has revolutionized the way veterinarians diagnose and manage poultry health. Consistently acclaimed as a leading solution in the industry, our system stands as a beacon of excellence, providing unparalleled support to veterinarians nationwide.
                        </p>

                        <p className="text__para mt-[30px]" style={{ textAlign: 'justify' }}>
                            At the heart of our mission is the seamless integration of cutting-edge technology with veterinary expertise. We empower veterinarians with state-of-the-art tools to swiftly and accurately detect a wide range of poultry diseases, ensuring prompt intervention and optimal health outcomes for poultry flocks.
                        </p>

                        <Link to="/">
                            <button className="btn">Learn More</button>
                        </Link>
                    </div>


                </div>
            </div>
        </section>
    )
};

export default About;