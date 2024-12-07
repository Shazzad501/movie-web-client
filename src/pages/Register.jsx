import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Typewriter } from 'react-simple-typewriter';

const Register = () => {
  const {newUserSet, setUser, upDateProfile} = useContext(AuthContext);
  const navigate = useNavigate()
  // eye pass show stat
  const [showPass, setShowPass] = useState(false)
  // error state
  const [error, setError]= useState('')
  const location = useLocation()

  // redirect path
  const redirectPath = location?.state?.from?.pathname || '/';

  // handle registration function
  const handleRegister=(e)=>{
    e.preventDefault();
    const form = new FormData(e.target)
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one digit.');
      return;
    }

    // error state reset
    setError('')
    newUserSet(email, password)
    .then(res => {
      setUser(res.user);
      navigate(redirectPath)
      e.target.reset();
      toast.success(`Registration success!!`)

// user profile updation
    upDateProfile({displayName: name, photoURL: photo})
    .then(()=>{})
    .catch((err)=>{
      setError(`${err.message}`)
    })

    })
    .catch(err => setError(`${err.message}`))
  }

  useEffect(()=>{
    // dynamic title
    document.title="Register || Movie Lover"

    // Aos animation
    AOS.init({
      duration: 1500,
    });
  }, [])
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden py-6">
    <div data-aos="fade-down" className="card bg-base-100 w-full max-w-md py-12 px-5 shrink-0 rounded-md border-2">
      <h2 className="font-bold text-xl text-center ">
      <Typewriter
                words={[
                  "Register a new account",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
      </h2>
      <form onSubmit={handleRegister} className="card-body">
        {/* Name filed */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Your Name</span>
          </label>
          <input 
          name='name'
          type="text" 
          placeholder="Enter your name" 
          className="input input-bordered" required />
        </div>
        {/* Name filed */}
        
        {/* photo url filed */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Photo URL</span>
          </label>
          <input 
          name='photo'
          type='url' 
          placeholder="https//demo-photo.png.com" 
          className="input input-bordered" />
        </div>
        {/* photo url filed */}

        {/* Email filed */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Email Address</span>
          </label>
          <input 
          name='email'
          type="email" 
          placeholder="demo.mail@gamil.com" 
          className="input input-bordered" required />
        </div>
        {/* Email filed */}
        {/* password filed */}
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label> 
          <input 
            type={showPass ? 'text' : 'password'}
            name='password' 
            placeholder="demo-@A2ad1" 
            className="input input-bordered" required />
            <button onClick={()=>setShowPass(!showPass)} className='btn btn-xs absolute right-2 top-12'>{showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button>
        </div>
        {/* password filed */}

          <div>
            {
              error &&  <label className="label">
              <span className="label-text font-semibold text-sm text-red-600">{error}</span>
            </label>
            }
          </div>

        <div className="form-control mt-6">
          <button className="btn  font-bold text-base text-white bg-gradient-to-tl from-blue-600 to-blue-800 hover:bg-gradient-to-tr">Register</button>
        </div>
      </form>
      <p className='font-semibold text-sm text-center'>Already Have An Account? <Link to='/login' className='font-semibold text-sm text-green-600 underline'>Login</Link></p>
    </div>
</div>
  );
};

export default Register;