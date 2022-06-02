import React, {useState} from  'react';

function SignUp() {
    const [errors,setErrors]= useState({});
    const handleChange =(e)=>{
        setValues({
            ...values,[e.target.name]:e.target.value,
        });
    }
    const [values,setValues] = useState("")
const handleFormSubmit =(e)=>{
    e.preventDefault();

}

  return (
    <div className='container'>
        <div className='app-wrapper'>
           <h2 className='title'>Create Account</h2>
           <form className='form-wrapper'>
         <div className='Name'>
    <label className='label'>Full Name</label>
    <input className='input' type="text"  name='full name' value={values.fullname} onChange={handleChange} />
</div>
<div className='email'>
    <label className='label'>Email</label>
    <input className='input' type="email"   name='email' value={values.emal} onChange={handleChange} />
</div>
<div className='password'>
    <label className='label'>password</label>
    <input className='input' type="password"  name='password'value={values.password} onChange={handleChange} />
</div>
<div>
    <button className='submit' onClick={handleFormSubmit}>SignUp</button>
</div>
</form>
        </div>
       
      
    </div>
  )
}

export default SignUp
