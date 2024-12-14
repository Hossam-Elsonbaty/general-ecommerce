import React from 'react';
import LoginSvg from "../Images/Mobile login-bro (1).svg"
const Login = () => {
  return (
    <main className='sign-up'>
      <section className='svg-container'>
        <img src={LoginSvg} alt="svg" className='svg' />
      </section>
      <section className='form-section'>
        <h1>تسجيل الدخول</h1>
        <div className='fields-container'>
          <input type="text" placeholder="رقم الهاتف" />
          <input type="password" placeholder="كلمة المرور" />
          <button>دخول</button>
        </div>
      </section>
    </main>
  )
}

export default Login;