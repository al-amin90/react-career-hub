import { Link, useLoaderData, useParams } from "react-router-dom";
import calender from '../../assets/calendar.png';
import money from '../../assets/money.png';
import address from "../../assets/location2.png";
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utilities/localStroage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const CurrentJob = jobs.find(job => job.id === parseInt(id));

    const { job_title, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = CurrentJob;

    const handleApplyJob = () => {
        toast.success("Your Applied Done!");
        saveJobApplication(parseInt(id))
    }


    return (
        <div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 my-28">
                <div className="col-span-2">
                    <p className="text-[#1A1919] font-bold mb-5 text-base">Job Description: <span className="font-normal text-[#757575]"> {job_description}</span></p>
                    <p className="text-[#1A1919] font-bold mb-5 text-base">Job Responsibility: : <span className="font-normal text-[#757575]"> {job_responsibility}</span></p>
                    <h6 className="text-[#1A1919] font-bold mb-5 text-base">Educational Requirements:
                        <p className="font-normal block mt-3 text-[#757575]"> {educational_requirements}</p>
                    </h6>
                    <h6 className="text-[#1A1919] font-bold mb-5 text-base">Experiences:
                        <p className="font-normal block mt-3 text-[#757575]"> {experiences}</p>
                    </h6>
                </div>
                <div className="col-span-1 ">
                    <div className="p-6 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded-lg mb-5">
                        <h4 className="text-lg font-bold ">Job Details</h4>
                        <div className="bg-gradient-to-r py-[1px] from-[#7E90FE33] to-[#9873FF33] my-5"></div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <img src={money} alt="" />
                                <h3 className="text-lg text-[#474747] font-semibold">Salary: <span className="font-normal">{salary}</span>
                                </h3>
                            </div>
                            <div className="flex items-center gap-2 mb-7">
                                <img src={calender} alt="" />
                                <h3 className="text-lg text-[#474747] font-semibold">Job Title: <span className="font-normal">{job_title}</span>
                                </h3>
                            </div>
                        </div>
                        <h4 className="text-lg font-bold ">Contact Information</h4>
                        <div className="bg-gradient-to-r py-[1px] from-[#7E90FE33] to-[#9873FF33] my-5"></div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <img src={phone} alt="" />
                                <h3 className="text-lg text-[#474747] font-semibold">Phone: <span className="font-normal">{contact_information.phone}</span>
                                </h3>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <img src={email} alt="" />
                                <h3 className="text-lg text-[#474747] font-semibold">Email: <span className="font-normal">{contact_information.email}</span>
                                </h3>
                            </div>
                            <div className="flex items-start gap-2">
                                <img src={address} alt="" />
                                <h3 className="text-lg text-[#474747] font-semibold">Address: <span className="font-normal">{contact_information.address}</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* <Link to={`/applied`}> */}
                    <button
                        onClick={handleApplyJob}
                        className="btn btn-md bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-semibold w-full text-white">Apply Now</button>
                    {/* </Link> */}

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;