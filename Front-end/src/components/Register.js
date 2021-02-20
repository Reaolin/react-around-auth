import { React, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Register (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleRegistration(email, password);
  }

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      history.push('/');
    }
  }, [history])

  return (
    <div className="login">
      <form action="#" onSubmit={handleSubmit} className="form">
        <h2 className="login__title">Sign up</h2>
        <input required className="form__username-input" id="email" name="email" type="email" value={email} placeholder="email" onChange={e => setEmail(e.target.value)} />
        <input required className="form__username-input" id="password" placeholder="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="login__button">Sign up!</button>
        <Link to="/signin" className="login__subtext">Already a member?  Log in here!</Link>
      </form>
    </div>
  )
}

export default Register;