
import React, { useEffect } from 'react';
import './App.css';

function animation() {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
}

function App() {
  useEffect(() => {
    animation();
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div className="container">
    <div className="forms-container">
      <div className="signin-signup">
        <form action="#" className="sign-in-form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          
          <input type="submit" value="Login" className="btn solid" />
          <p className="social-text">Or Sign in with social platforms</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
        <form action="#" className="sign-up-form">
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Co-Password" />
          </div>
          <input type="submit" className="btn" value="Sign up" />
          <p className="social-text">Or Sign up with social platforms</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
    </div>

    
    <div className="panels-container">
      
      <div className="panel left-panel">
        <div className="content">
          
          <h3>New here ?</h3>
          <p>
            Come join us and start cooking your favourite food.
          </p>
          <button className="btn transparent" id="sign-up-btn">
            Sign up
          </button>
        </div>
        <img src="/Logo/second.svg" className="image" alt="" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p>
            Then let's begin cooking your favourite food
          </p>
          <button className="btn transparent" id="sign-in-btn">
            Sign in
          </button>
        </div>
        <img src="/Logo/first.svg" className="image" alt="" />
      </div>
    </div>
  </div>
  );
}

export default App;
