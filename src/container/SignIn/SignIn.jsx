import React from 'react';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  return (
      <div className='app__bg app__wrapper section__padding'>
      <div className="row">
        <div className="col-lg-7 app__form bg-black">
          <div className="text-center">
            <h1 className="headtext__cormorant">Login</h1>
            <img src={images.spoon} alt="spoon" />
          </div>
        <form className="signin__form m-5">
             <div className="form-floating mb-3">
               <input type="email" className="form-control" id="floatingInput" />
               <label for="floatingInput">Email address</label>
             </div>
             <div className="form-floating mb-4">
                <input type="password" className="form-control" id="floatingPassword" />
                <label for="floatingPassword">Password</label>
            </div>
            <div className="text-center">
            <button type="submit" className="custom__button w-100">Login</button>
            </div>
            
          </form>
          <div className="text-center">
            <p className="p__opensans">Have an account? 
              <Link to="/create" className='signup__link'>
              Create one
              </Link>
            </p>
            
            <p className="p__opensans">Retun
              <Link to="/" className='home__link'> 
              Home
              </Link>
              </p>
          </div>
        </div>

        <div className="col-lg-5">
        <div className="app__wrapper_img">
        <img src={images.findus} alt="login" />
        </div>
        </div>
          </div>

      
      </div>
      
  );
}

export default SignIn;
