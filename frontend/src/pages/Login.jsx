import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import { authContext } from '../context/AuthContext.jsx';
import HashLoader from 'react-spinners/HashLoader';

// Login component
const Login = () => {

    //use state to store the form data
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    //loading state to show loading spinner
    const [loading, setLoading] = useState(false);

    //use navigate to redirect to another page
    const navigate = useNavigate();

    //use context
    const { dispatch } = useContext(authContext);

    //handle input change
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    //handle form submit
    const submitHandler = async (event) => {

        event.preventDefault();

        setLoading(true);

        try {
            
            //fetch data from the server and send the form data
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            //get the response from the server
            const result = await res.json();
            
            if(!res.ok) {
                throw new Error(result.message);
            }

            //dispatch the user data to the context provider 
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: {
                    user: result.data,
                    role: result.role,
                    token: result.token,
                },
            });

            console.log(result, "login data");

            setLoading(false);
            toast.success(result.message);
            navigate("/home");

        } catch (err) {
            toast.error(err.message);
            setLoading(false);
        }
    };

    return (
        <section className="px-5 lg:px-0">
            <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
                <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
                    Hello <span>Welcome</span> Back 👋
                </h3>

                <form className="py-4 md:py-0" onSubmit={submitHandler}>
                    <div className="mb-5">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
                            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
                            placeholder:text-textColor cursor-pointer"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
                            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
                            placeholder:text-textColor cursor-pointer"
                            required
                        />
                    </div>

                    <div className="mt-7">
                        <button type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] 
                        rounded-lg px-4 py-3">
                            { loading ? <HashLoader size={25} color="#fff" /> : "Login" }
                        </button>
                    </div>

                    <p className="mt-5 text-textColor text-center">
                        Don&apos;t have an account?{" "}
                        <Link to="/register" className="text-primaryColor font-medium ml-1">
                            Register
                        </Link>
                    </p>

                </form>
            </div>
        </section>
    );
};

export default Login;