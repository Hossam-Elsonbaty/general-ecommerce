import React from 'react';
import signUpSvg from "../Images/Sign up-rafiki.svg"
const SignUp = () => {
  return (
    <main className='sign-up'>
      <section className='svg-container'>
        <img src={signUpSvg} alt="svg" className='svg' />
      </section>
      <section className='form-section'>
        <h1>إنشاء حساب جديد</h1>
        <div className='fields-container'>
          <input type="text" placeholder="الاسم" />
          <input type="text" placeholder="رقم الهاتف" />
          <input type="password" placeholder="كلمة المرور" />
          <input type="password" placeholder="تأكيد كلمة المرور" />
          <button>إنشاء الحساب</button>
        </div>
      </section>
    </main>
  )
}

export default SignUp;