import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/util.css';
import './css/main.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';
import 'hamburgers/dist/hamburgers.min.css';
import 'animsition/dist/css/animsition.min.css';
import 'select2/dist/css/select2.min.css';
import 'daterangepicker/daterangepicker.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5555/register', { username, firstName, lastName, email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                } else {
                    alert("Registered successfully! Please Login to proceed.");
                    navigate('/login');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="limiter">
            <div
                className="container-login100"
                style={{ backgroundImage: `url('/images/wallpaper.jpg')` }}
            >
                <div className="wrap-login100">
                    <form onSubmit={handleSubmit} className="login100-form validate-form">
                        <span className="login100-form-logo">
                            <img src="./images/logo.png" alt="logo" height="200px" />
                        </span>

                        <span className="login100-form-title p-b-34 p-t-27">
                            Create an Account
                        </span>

                        <div className="wrap-input100 validate-input" data-validate="Enter username">
                            <input
                                className="input100"
                                name="username"
                                placeholder="Username"
                                onChange={(event) => setUsername(event.target.value)}
                                required
                            />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter first name">
                            <input
                                className="input100"
                                name="firstName"
                                placeholder="First Name"
                                onChange={(event) => setFirstName(event.target.value)}
                                required
                            /><span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter last name">
                            <input
                                className="input100"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={(event) => setLastName(event.target.value)}
                                required
                            /><span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter email">
                            <input
                                className="input100"
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <input
                                className="input100"
                                type="password"
                                name="pass"
                                placeholder="Enter Password"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="contact100-form-checkbox">
                            <input
                                className="input-checkbox100"
                                id="ckb1"
                                type="checkbox"
                                name="remember-me"
                            />
                            <label className="label-checkbox100" htmlFor="ckb1">
                                Remember me
                            </label>
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">Register</button>
                        </div>

                        <div className="text-center p-t-90">
                            <Link to="/login" className="txt1">
                                Already have an account? Login here!
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
