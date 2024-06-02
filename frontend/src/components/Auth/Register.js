import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Register = () => {
  const [user, setUser] = useState({ username: '', email: '', password: '', password2: '' });
  const { username, email, password, password2 } = user;
  const authContext = useContext(AuthContext);
  const history = useNavigate();

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert('Passwords do not match');
    } else {
      await authContext.register({ username, email, password });
      history('/');
    }
  };

  return (
    <div className="form-container" style={{ justifyContent: "center", display: "flex", background: "gray", width: "400px", height: "280px", marginRight:"25%",marginBottom:"0%", marginTop: "15%",marginLeft:"38%" }}>
      <div>
      <h1 style={{marginLeft:"15px",color:"blue"}}>Account <span className="text-primary">Register</span></h1>
      <form onSubmit={onSubmit}>
        <div className="form-group" style={{margin:"5px"}}>
          <label htmlFor="username" style={{color:"white"}}>Name</label>
          <input type="text" name="username" value={username} onChange={onChange} required style={{marginLeft:"92px"}}/>
        </div>
        <div className="form-group" style={{margin:"5px"}}>
          <label htmlFor="email" style={{color:"white"}}>Email</label>
          <input type="email" name="email" value={email} onChange={onChange} required style={{marginLeft:"92px"}}/>
        </div>
        <div className="form-group" style={{margin:"5px"}}>
          <label htmlFor="password" style={{color:"white"}}>Password</label>
          <input type="password" name="password" value={password} onChange={onChange} required style={{marginLeft:"69px"}}/>
        </div>
        <div className="form-group" style={{margin:"5px"}}>
          <label htmlFor="password2" style={{color:"white"}}>Confirm Password</label>
          <input type="password" name="password2" value={password2} onChange={onChange} required style={{marginLeft:"10px"}}/>
        </div>
        <input type="submit" value="Register" className="btn btn-primary btn-block" style={{ marginLeft: "30%", marginTop: "2%", background:"green" }}/>
      </form>
      <p style={{color:"cyan"}}>Already have an account? <Link to="/login">Login</Link></p>
    </div>
    </div>
  );
};

export default Register;
