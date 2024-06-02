import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const { email, password } = user;
  const authContext = useContext(AuthContext);
  const history = useNavigate();

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await authContext.login({ email, password });
    history('/');
  };

  return (
    <div className="form-container" style={{ justifyContent: "center", display: "flex", background: "gray", width: "400px", height: "230px", marginRight:"25%",marginBottom:"0%", marginTop: "15%",marginLeft:"38%" }}>
      <div>
        <h1 style={{ marginLeft: "15px",color:"blue" }}>Account <span className="text-primary">Login</span></h1>
        <form onSubmit={onSubmit}>
          <div className="form-group" style={{ margin: "2px" }}>
            <label htmlFor="email" style={{color:"white"}}>Email</label>
            <input type="email" name="email" value={email} onChange={onChange} required style={{ marginLeft: "33px" }} />
          </div>
          <div className="form-group" style={{ margin: "2px" }}>
            <label htmlFor="password" style={{color:"white"}}>Password</label>
            <input type="password" name="password" value={password} onChange={onChange} required style={{ marginLeft: "10px" }} />
          </div>
          <input type="submit" value="Login" className="btn btn-primary btn-block" style={{ marginLeft: "50%", marginTop: "5%" }} />
        </form>
        <p style={{color:"cyan"}}>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
