
import heroImg01 from '../assets/images/hero-img1.jpg';
import heroImg02 from '../assets/images/hero-img2.jpg';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import featureImg from '../assets/images/feature-img.jpg';
import videoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import faqImg from '../assets/images/faq-img.jpg';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import DiseaseList from '../components/Diseases/DiseaseList';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = () => {

    const openCamera = () => {

        // Run the Streamlit app
        const runStreamlitApp = async () => {
            try {
                const response = await fetch('http://localhost:8501');
                if (!response.ok) {
                    throw new Error('Streamlit app is not running.');
                }
                // Streamlit app is running, do nothing
            } catch (error) {
                // Streamlit app is not running, start it
                window.open('http://localhost:8501', '_blank');
            }
        };

        runStreamlitApp();

    };

    return (
        <>
        
            <>
                {/* ==================== Hero Section Starts ====================*/}
                <section className="hero__section pt-[60px] 2xl:h-[800px]">
                    <div className="container">
                        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

                            {/* ==================== Hero Content ====================*/}
                            <div>
                                <div className="lg:w-[570px]">
                                    <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
                                    md-leading-[70px]">
                                        Ensuring Healthy and Productive Poultry Farming
                                    </h1>
                                    <p className="text__para">
                                        The Poultry Disease Scanning System is a pivotal tool in ensuring the health and productivity
                                        of poultry farming operations. By leveraging advanced technology and machine learning algorithms,
                                        this system swiftly detects and diagnoses potential diseases in poultry flocks.
                                        Through real-time monitoring and analysis, it empowers farmers and veterinarians to take proactive
                                        measures, such as implementing biosecurity protocols and administering vaccinations, thus safeguarding
                                        the well-being of the poultry and optimizing overall farm productivity.
                                    </p>

                                    <button className="btn" onClick={openCamera}>
                                        Scan For Disease
                                    </button>
                                </div>

                                {/* ==================== Hero Counter ====================*/}
                                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                                    <div>
                                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                                        text-headingColor">
                                            3+
                                        </h2>
                                        <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-8px]"></span>
                                        <p className="text__para">Months of Experience</p>
                                    </div>

                                    <div>
                                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                                        text-headingColor">
                                            15+
                                        </h2>
                                        <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-8px]"></span>
                                        <p className="text__para">Clinics Locations</p>
                                    </div>

                                    <div>
                                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                                        text-headingColor">
                                            100%
                                        </h2>
                                        <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-8px]"></span>
                                        <p className="text__para">Vetenarians Satisfaction</p>
                                    </div>
                                    
                                </div>

                            </div>

                            {/* ==================== Hero Content ====================*/}
                            <div className="flex gap-[30px] justify-end">
                                <div>
                                    <img className="w-full" src={heroImg01} alt="" />
                                </div>
                                <div className="mt-[30px]">
                                    <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* ==================== Hero Section Ends ====================*/}

                {/* ==================== Service Section Starts ====================*/}
                <section>
                    <div className="container">
                        <div className="lg:w-[470px] mx-auto ">
                            <h2 className="heading text-center">
                                Providing the best poultry disease detections
                            </h2>
                            <p className="text__para text-center">
                                Delivering top-tier poultry disease detection services, our system employs
                                cutting-edge technology to swiftly identify and mitigate potential health threats,
                                ensuring the well-being of poultry populations.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] 
                        mt-[30px] lg:mt-[55px]">

                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon01} alt="" />
                                </div>

                                <div className="mt-[30px]">
                                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                        Find a Disease
                                    </h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                        Unearth the intricacies of poultry diseases with our comprehensive system.
                                        Equipped with advanced technology, we offer precise disease identification,
                                        empowering poultry farmers to safeguard their flocks effectively.
                                    </p>

                                    <Link to="/diseases" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                                    mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                        <BsArrowRight className="group-hover:text-white w-6 h-5" />
                                    </Link>
                                </div>
                            </div>

                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon02} alt="" />
                                </div>

                                <div className="mt-[30px]">
                                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                        Find a Vaccine
                                    </h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                        Discover the shield for your poultry flock with our potent vaccines.
                                        Designed to combat prevalent diseases, our vaccines offer robust protection,
                                        ensuring the health and vitality of your poultry.
                                    </p>

                                    <Link to="/diseases" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                                    mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                        <BsArrowRight className="group-hover:text-white w-6 h-5" />
                                    </Link>
                                </div>
                            </div>

                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon03} alt="" />
                                </div>

                                <div className="mt-[30px]">
                                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                        Scan for Disease Detection
                                    </h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                        Utilize our cutting-edge disease detection system to safeguard your poultry flock.
                                        Leveraging state-of-the-art technology, our system swiftly identifies potential threats,
                                        enabling prompt intervention and optimal health management for your birds.
                                    </p>

                                    <Link to="https://poultry-disease-detection-by-joshua.netlify.app/" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                                    mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                        <BsArrowRight className="group-hover:text-white w-6 h-5" />
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                {/* ==================== Service Section Ends ====================*/}

                {/* ==================== About Section Starts ====================*/}
                <About />
                {/* ==================== About Section Ends ====================*/}

                {/* ==================== Service Section Starts ====================*/}
                <section>
                    <div className="container">
                        <div className="xl:w-[470px] mx-auto">
                            <h2 className="heading text-center whitespace-nowrap">Our System&apos;s Services</h2>
                            <p className="text__para text-center">
                                Empowering poultry farmers with advanced disease detection, vaccination solutions, and expert consultation to ensure optimal health and productivity of their flocks.
                            </p>
                        </div>

                        <ServiceList />
                    </div>
                </section>
                {/* ==================== Service Section Ends ====================*/}

                {/* ==================== Feature Section Starts ====================*/}
                <section>
                    <div className="container">
                        <div className="flex items-center justify-between flex-col lg:flex-row">

                            {/* ==================== Feature Content ====================*/}
                            <div className="xl:w-[670px]">
                                <h2 className="heading">
                                    
                                </h2>
                                <ul className="pl-4 list-decimal text-justify">
                                    <li className="text__para">
                                        Access our poultry disease detection system 24/7 for peace of mind
                                    </li>
                                    <li className="text__para">
                                        Stay informed with round-the-clock availability of our disease detection.
                                    </li>
                                    <li className="text__para">
                                        Instantly access poultry disease detection services anytime, anywhere.
                                    </li>
                                </ul>

                                <Link to="/">
                                    <button className="btn">
                                        Learn More
                                    </button>
                                </Link>
                            </div>

                            {/* ==================== Feature Image ====================*/}
                            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                                <img src={featureImg} className="w-3/4" alt="" />

                                <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
                                md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[6px] lg:gap-3">
                                            <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                                                Tue, 20
                                            </p>
                                            <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                                                10:00 AM
                                            </p>
                                        </div>
                                        <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center 
                                        bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                                            <img src={videoIcon} alt="" />
                                        </span>
                                    </div>

                                    <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] 
                                    lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                                        Consultation
                                    </div>

                                    <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2  lg:mt-[18px]">
                                        <img src={avatarIcon} alt="" />
                                        <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                                            Wayne Collins
                                        </h4>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* ==================== Feature Section Ends ====================*/}

                {/* ==================== Our Great Vetenaries Starts ====================*/}
                <section>
                    <div className="container">
                        <div className="lg:w-[470px] mx-auto ">
                            <h2 className="heading text-center">
                                Poultry Diseases Detection
                            </h2>
                            <p className="text__para text-center">
                                Utilize our advanced technology for accurate and timely detection of poultry diseases,
                                ensuring the health and productivity of your flock.
                            </p>
                        </div>

                        <DiseaseList />
                    </div>
                </section>
                {/* ==================== Our Great Vetenaries Starts ====================*/}

                {/* ==================== Faq Section Starts ====================*/}
                <section>
                    <div className="container">
                        <div className="flex justify-between gap-[50px] lg:gap-0">
                            <div className="w-1/2 hidden md:block">
                                <img src={faqImg} alt="" />
                            </div>

                            <div className="w-full md:w-1/2">
                                <h2 className="heading mb-8">
                                    Frequently Asked Questions By Our Beloved Clients
                                </h2>

                                <FaqList />

                            </div>
                        </div>
                    </div>
                </section>
                {/* ==================== Faq Section Ends ====================*/}

                {/* ==================== Testimonial Section Starts ====================*/}
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
                {/* ==================== Testimonial Section Ends ====================*/}


            </>
        </>
    );
};

export default Home;