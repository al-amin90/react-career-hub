import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div>
            <div className=" p-9 rounded-lg border border-[#E8E8E8]">
                <figure><img src={logo} alt="" /></figure>
                <div className="space-y-2 mt-7">
                    <h2 className="text-xl text-[#474747] font-bold">{job_title}</h2>
                    <p className="text-[#757575] font-semibold text-base">{company_name}</p>
                    <div className="*:px-5 *:py-2 *:border *:border-[#7E90FE] *:rounded *:font-bold *:text-sm flex gap-3 *:bg-gradient-to-r *:from-[#7E90FE] *:to-[#9873FF] *:text-transparent *:bg-clip-text">
                        <button>{remote_or_onsite}</button>
                        <button>{job_type}</button>
                    </div>
                    <div className="flex flex-col md:flex-row *:flex *:items-center *:gap-2 md:gap-5 text-[#757575] font-semibold text-base">
                        <p ><HiOutlineLocationMarker className="text-xl" /> {location}</p>
                        <p><HiOutlineCurrencyDollar className="text-xl" /> <span>Salary : {salary}</span></p>
                    </div>
                    <div className="card-actions pt-2">
                        <button className="btn btn-md bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-semibold text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Job;