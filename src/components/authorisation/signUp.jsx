

  export const SignUp = () => {
    return (
         <>
          <div>
            <h1>Sign Up</h1>
          </div>
         <form 
        //  onSubmit={handlerForm}
         >
             <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
               <input 
                //  type="email" 
                //  className="form-control" 
                //  id="exampleInputEmail1"
                //  name='email'
                //  onChange={handleInputs}
                //  value={inputs.email ?? ''}
                //  aria-describedby="emailHelp" 
               />
             </div>
             <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
               <input 
                //  type="password" 
                //  name="password"
                //  className="form-control"
                //  onChange={handleInputs}
                //  value={inputs.password ?? ''}
                //  id="exampleInputPassword1" 
               />
             </div>
           <button type="submit" className="btn btn-primary">Sign Up</button>
         </form>
         {/* {loading && <p>Loading....</p>}
         {error && <p style={{color: 'red'}}>{error.message}</p>} */}
        </>
    );
  }