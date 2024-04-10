import img from './img/user1.jpg';

const Profile = () => {
  return (
   <>
        <div >
        <div style={{ backgroundColor: 'white', width: '100%', padding:'10px' }}>
          <h2>Account Setting</h2>
        </div>
        <div className='profile px-4"' >
          <div className="d-flex mt-4 ">
            <img src={img} alt="error" />
            <div className="mt-4">
              <p>
                <strong>Marry Doe</strong> <br /> Marry@Gmail.com
              </p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum repudiandae blanditiis quidem. Expedita, accusamus
              totam illum delectus error ipsum maxime neque nulla, quaerat at
              consequatur aspernatur laudantium nihil tenetur ad?
            </p>
          </div>
          
<hr/>
        </div>
        </div>
        
        

       
      
    
    </>
  );
};

export default Profile;