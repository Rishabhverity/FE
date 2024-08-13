import { Input } from 'postcss';
import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState('Assigner');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading } = useState();

    const handleChange = (event) => {
        setUser(event.target.value);
  };
  
  const handleClear = () => {
    setEmail("");
    setPassword("");
  } 

  const handleInput = (e) => {
    setEmail(e.target.value)
  }

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) return;
        login(
          { email, password },
          {
            onSettled: () => {
              setEmail("");
              setPassword("");
            },
          }
        );
      }

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
  <div className='flex flex-col w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-lg p-8'>
    <h1 className='font-bold text-center text-4xl mb-8'>Login as</h1>
    <div className='flex justify-around mb-8 text-xl'>
      <label className='flex items-center'>
        <input 
          type="radio" 
          name="user" 
          value="Assigner" 
          checked={user === 'Assigner'} 
          onChange={handleChange} 
          className='mr-2'
        />
        Assigner
      </label>
      <label className='flex items-center'>
        <input 
          type="radio" 
          name="user" 
          value="Trainer" 
          checked={user === 'Trainer'} 
          onChange={handleChange} 
          className='mr-2'
        />
        Trainer
      </label>
      <label className='flex items-center'>
        <input 
          type="radio" 
          name="user" 
          value="Accounts" 
          checked={user === 'Accounts'} 
          onChange={handleChange} 
          className='mr-2'
        />
        Accounts
      </label>
    </div>
    <div className='flex flex-col mb-6'>
      <div className='flex flex-col mb-4'>
        <label className='mb-1 text-lg'>Email</label>
              <input placeholder='Enter your email' className='border border-gray-300 rounded-md p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={(e)=>handleInput(e)}/>
      </div>
      <div className='flex flex-col'>
        <label className='mb-1 text-lg'>Password</label>
              <input type='password' value={Text} placeholder='Enter password' className='border border-gray-300 rounded-md p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={(e)=>handleInput(e)}/>
      </div>
    </div>
    <div className='flex justify-end space-x-4'>
            <button className='px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100'
            onClick={()=>handleClear()}>Clear</button>
      <button className='px-4 py-2 border border-transparent rounded-md bg-blue-600 text-white hover:bg-blue-700'>Submit</button>
    </div>
  </div>
</div>

    );
};

export default Login;
