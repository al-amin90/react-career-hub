

const Category = ({ category }) => {
    const { logo, category_name, availability } = category;

    return (
        <div className="bg-gradient-to-r from-[#7E90FE0D] rounded-lg to-[#9873FF0D] p-9">
            <div className="bg-gradient-to-r from-[#7E90FE1A] rounded-lg to-[#9873FF1A] p-4 w-fit">
                <img src={logo} alt="" />
            </div>
            <h3 className="text-[#474747] font-bold text-lg mt-7">{category_name}</h3>
            <p className='text-base mt-2 text-[#A3A3A3]'>{availability}</p>
        </div>
    );
};

export default Category;