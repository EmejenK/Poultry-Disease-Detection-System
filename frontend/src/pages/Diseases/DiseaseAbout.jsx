import { formateDate } from '../../utils/formateDate';

const VetenaryAbout = () => {
    return (
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                    About of
                    <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                        Mark Thompson
                    </span>
                </h3>
                <p>
                    Dr. Mark Thompson, a distinguished Neurovet, brings unparalleled expertise to our veterinary team.
                    With an impressive average rating of 4.7 based on 250 reviews, he has earned the trust of numerous
                    pet owners. Specializing in neurology, he provides compassionate care at Happy Tails Animal Hospital.
                    Dr. Thompson&rsquo;s commitment extends to the well-being of over 1800 pets, offering exceptional services
                    that contribute to healthier, happier animals in our community.
                </p>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Education
                </h3>

                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                {formateDate("05-07-2019", { month: "short" })} - {formateDate("12-16-2021", { month: "short" })}
                            </span>
                            <p className="text-[15px] leading-6 font-medium text-textColor">
                                PHD in Veterinary Neurology
                            </p>
                        </div>
                        <p className="text-[14px] leading-6 font-medium text-textColor">
                            University Of Nairobi, Nairobi.
                        </p>
                    </li>

                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                {formateDate("01-12-2016", { month: "short" })} - {formateDate("12-14-2018", { month: "short" })}
                            </span>
                            <p className="text-[15px] leading-6 font-medium text-textColor">
                                Masters Degree in Veterinary Neurology
                            </p>
                        </div>
                        <p className="text-[14px] leading-6 font-medium text-textColor">
                            Egerton University, Nakuru.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Experience
                </h3>

                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {formateDate("01-12-2018", { month: "short" })} - {formateDate("02-13-2024", { month: "short" })}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            Veterinary Neurologist
                        </p>
                        <p className="text-[14px] leading-6 font-medium text-textColor">
                            Happy Tails Animal Hospital, Nairobi.
                        </p>
                    </li>

                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {formateDate("01-12-2014", { month: "short" })} - {formateDate("12-14-2017", { month: "short" })}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            Veterinary Neurologist
                        </p>
                        <p className="text-[14px] leading-6 font-medium text-textColor">
                            Paws & Hooves Veterinary Clinic, Nairobi.
                        </p>
                    </li>
                </ul>
            </div>

        </div>
    )
};

export default VetenaryAbout;