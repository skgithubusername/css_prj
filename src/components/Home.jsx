
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <>
     <div className="container  home">
<h1>Welcome to PopX</h1>
<h4>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. </h4>

<div className="d-grid gap-2">
<Link to="/login" class="btn " style={{ color: 'white', backgroundColor: 'rgb(75, 48, 195)' }} type="button">Create Account</Link>
  <Link  to="/signUp" class="btn " style={{ fontWeight: 600, backgroundColor: 'rgb(174, 134, 211)' }} type="button">Already Registered? Login</Link>
</div>
     </div>
    </>
  )
}

export default Home

