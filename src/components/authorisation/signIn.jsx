import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signIn } from "../../services/firebase"


  export const SignIn = () => {
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({email: '', password: ''})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleInputs = (e) => {
      setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handlerForm = async (event) => {
      event.preventDefault()
      try {
        setError('')
        setLoading(true)
        await signIn(inputs.email, inputs.password)
        navigate('/profile/login')
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
        setInputs({email: '', password: ''})
      }
    }


    return (
         <>
         <div>
            <h1>Sign In</h1>
        </div>
         <form
         onSubmit={handlerForm}
         >
             <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
               <input 
                 type="email" 
                 className="form-control" 
                 id="exampleInputEmail1"
                 name='email'
                 onChange={handleInputs}
                 value={inputs.email ?? ''}
                 aria-describedby="emailHelp" 
               />
             </div>
             <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
               <input 
                 type="password" 
                 name="password"
                 className="form-control"
                 onChange={handleInputs}
                 value={inputs.password ?? ''}
                 id="exampleInputPassword1" 
               />
             </div>
           <button type="submit" className="btn btn-primary">Sign In</button>
         </form>
         {loading && <p>Loading....</p>}
         {error && <p style={{color: 'red'}}>Incorrect input {error.message}</p>}
        </>
    );
  }