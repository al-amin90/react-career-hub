import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <div>
                <h2 className="text-center font-bold text-3xl">Oops!</h2>
                <Link to="/">
                    <button className="btn btn-primary mt-10"> Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;