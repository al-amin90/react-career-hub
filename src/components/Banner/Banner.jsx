import user from '../../assets/user.png'

const Banner = () => {
    return (
        <div className="grid grid-cols-1 mt-9 md:grid-cols-2">
            <div className='max-w-lg flex items-center justify-center'>
                <div>
                    <h1 className='text-[#1A1919] text-7xl font-bold'>One Step Closer To Your <span className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text'>Dream Job</span></h1>
                    <p className='text-base my-5 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-semibold text-white'>Get Started</button>
                </div>
            </div>
            <div>
                <img className='relative md:-right-20' src={user} alt="" />

            </div>
        </div>
    );
};

export default Banner;