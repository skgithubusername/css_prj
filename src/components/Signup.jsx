import { Link } from 'react-router-dom'; 



const Signup = () => {
  return (
    <>
       <div className="container login  ">
      <div>
        <h1>Create your  </h1>
        <h1>PopX account</h1>
      
      </div>
      <div className="d-flex  mt-4 flex-column ">
        <form action="">
          <div className="form">
            <input
              type="text"
              id="email"
              className="form__input"
              autoComplete="off"
              placeholder=" "
              required 
            />
            <label htmlFor="email" className="form__label">
             Full Name <span className="required">*</span>
            </label>
          </div>
          <div className="form mt-4">
            <input
              type="text"
              id="email"
              className="form__input"
              autoComplete="off"
              placeholder=" "
              required 
            />
            <label htmlFor="email" className="form__label">
              Phone number <span className="required">*</span>
            </label>
          </div>
          <div className="form mt-4">
            <input
              type="text"
              id="email"
              className="form__input"
              autoComplete="off"
              placeholder=" "
              required 
            />
            <label htmlFor="email" className="form__label">
              Email address <span className="required">*</span>
            </label>
          </div>
          <div className="form mt-4">
            <input
              type="text"
              id="email"
              className="form__input"
              autoComplete="off"
              placeholder=" "
              required 
            />
            <label htmlFor="email" className="form__label">
              Password <span className="required">*</span>
            </label>
          </div>
          <div className="form mt-4">
            <input
              type="text"
              id="email"
              className="form__input"
              autoComplete="off"
              placeholder=" "
              
            />
            <label htmlFor="email" className="form__label">
              Company name
            </label>
          </div>

          <div className='d-flex  mt-4 flex-column'>
          <label  required >
             Are you an Agency? <span className="required">*</span>
            </label>
      <div>
              
  <div className="form-check form-check-inline">
  <label className="form-check-label" htmlFor="inlineRadio1">
      Yes
    </label>
    <input
      className="form-check-input"
      type="radio"
      name="inlineRadioOptions"
      id="inlineRadio1"
      defaultValue="option1"
    />
    
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="inlineRadioOptions"
      id="inlineRadio2"
      defaultValue="option2"
    />
    <label className="form-check-label" htmlFor="inlineRadio2">
     No
    </label>
  </div>
      </div>


          </div>

          <Link
            to="/profile"
            class="btn mt-4 "
            style={{
              fontWeight: 600,
              backgroundColor: "rgb(205, 199, 199)",
              color: "white",
              width: "320px",
            }}
            type="button"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
    </>
  );
};

export default Signup;
