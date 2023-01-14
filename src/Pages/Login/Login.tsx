import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom"


import Header from "../../Component/Header/Header"

export default function Login() {
  // TODO LOGIN WORK LEFT
  let login = localStorage.getItem('login');

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    const requiredEmail = 'ikamihere@gmail.com';
    const requiredPassword = '123456';
    if (email === requiredEmail && password === requiredPassword) {
      type loginObj = {
        email: string,
        password: string
      }
      const obj: loginObj = {
        email,
        password
      }
      localStorage.setItem('login', JSON.stringify(obj))
      alert('login success');
      navigate('/admin')
      setEmail('');
      setPassword('');

    }

    else {
      alert('Please Enter Correct Details');
      setEmail('');
      setPassword('');
    }

  }

  return (
    <div>
      <Header />

      <div className="login h-full w-full flex justify-center items-center mt-5 text-center">
        <form className=" h-[450px] w-[330px] rounded-lg border-2 flex flex-col justify-around items-center" onSubmit={loginHandler}>
          <h1 className="text-3xl">Login Form</h1>
          <div className="flex flex-col gap-10">
            <input type='email' required placeholder='Enter Your username' className="w-[90%] rounded-md mx-auto" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <input type='password' required placeholder='Enter Your password' className="w-[90%] rounded-md mx-auto" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div>
            <button className="w-28 bg-[#3a9de9] hover:bg-[#0d6db7]  text-white h-11 rounded-md cursor-pointer transition-all ">Login</button>
          </div>

        </form>

      </div>
    </div>
  )
}
