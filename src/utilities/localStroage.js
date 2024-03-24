

const getStroagedJobApplication = () => {
    const storedJobApplication = localStorage.getItem("job-application");
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    else{
        return []
    }
}

const saveJobApplication = id =>{
    const storedJobApplication = getStroagedJobApplication();
    const exits = storedJobApplication.find(jobId => jobId === id)
    if(!exits){
        storedJobApplication.push(id)
        localStorage.setItem("job-application", JSON.stringify(storedJobApplication))
    }

}

export {saveJobApplication, getStroagedJobApplication}