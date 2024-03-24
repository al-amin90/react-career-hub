import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStroagedJobApplication } from "../../utilities/localStroage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    useEffect(() => {
        const storedJobIds = getStroagedJobApplication();

        if (jobs.length > 0) {
            // const jobAppieds = jobs.filter(job => storedJobIds.includes(job.id))

            const jobAppieds = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                jobAppieds.push(job)
            }
            setAppliedJobs(jobAppieds);
            setDisplayJobs(jobAppieds);

        }
    }, [jobs])

    const handleDisplay = filter => {
        if (filter === "all") {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === "remote") {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        }
        else if (filter === "onsite") {
            const onSiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onSiteJobs);
        }
    }

    return (
        <div>
            <div className="my-28 flex flex-col gap-5">
                <div>
                    <label className="flex justify-end mb-3">
                        <select defaultValue={"all"} onChange={(e) => handleDisplay(e.target.value)} className="select bg-[#F4F4F4] text-base font-medium">
                            <option disabled selected>Filter By</option>
                            <option
                                value="all">All</option>
                            <option
                                value="remote">Remote</option>
                            <option
                                value="onsite">Onsite</option>
                        </select>
                    </label>
                    {/* <div className="dropdown flex justify-end ">
                        <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>All</a></li>
                            <li><a>Remote</a></li>
                            <li><a>Onsite</a></li>
                        </ul>
                    </div> */}
                </div>
                {
                    displayJobs.map(job => <AppliedJob
                        key={job.id}
                        job={job}></AppliedJob>)
                }
            </div>
        </div >
    );
};

export default AppliedJobs;