import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h1 className="font-bold text-4xl text-[#1A1919] mt-28">Job Category List</h1>
                <p className='text-base mt-5 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 mt-8 gap-5 md:grid-cols-4">
                {
                    categorys.map(category => <Category
                        key={category.id}
                        category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;