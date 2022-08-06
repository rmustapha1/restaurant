import React from 'react';
import { useState } from 'react';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';
import GoogleButton from 'react-google-button';
import './CreateAccount.css';

const CreateAccount = () => {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [error, setError] = useState(" ");
    const { createAcc } = useUserAuth();
    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        try {
            await createAcc(email, password);
        } catch (err) {
            setError(err.message);
        }
    }



  return (
      <div className='container'>
          
          <div className='row'>
              <div className='col-lg-6'>
                  <div className="shadow-lg p-5 mt-5 rounded form"> 
                      <h1 className="headtext__cormorant">Create an Account</h1>
                      {error && <div className="alert alert-danger">{error}</div>}
                  <form action="#" className="m-3" onSubmit={handleSubmit}>
                      <div className="form-group mb-3">
                          <label htmlFor="Email">
                              <h6 className='text-muted'>Email</h6>
                          </label>
                              <input
                                  type="email"
                                  name="email"
                                  className="form-control"
                                  onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="form-group mb-3">
                          <label htmlFor="Password">
                              <h6 className='text-muted'>Password</h6>
                          </label>
                              <input
                                  type="password"
                                  name="password"
                                  className="form-control"
                                  onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div className="mb-3 text-center">
                          <button type="submit" className="btn btn-primary py-2 w-100" style={{height: "3rem"}}>Create Account</button>
                      </div>
                      <p className="text-inverse text-center mt-3">Already have an account?
                              <Link to="/signin" style={{color: '#333',}}>
                                  Login
                              </Link>
                      </p>
                      </form>
                      <hr />
                      <div className="container">
                         <GoogleButton className="google__button">
                           Sign in with Google
                          </GoogleButton>
                          <p className="text-inverse ms-auto mt-3">Go to
                              <Link to="/signin" style={{color: '#333',}}>
                                  Home
                              </Link>
                      </p>
                      </div>
                        
                 </div>
              </div>
              <div className='col-lg-6'>
                  <div className='app__wrapper_img mt-5'>
                  <img src={images.findus} alt="findus" className="img-fluid" />
                  </div> 
              </div>
          </div>
    </div>
  )
}

export default CreateAccount;