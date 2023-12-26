import React,{useState,useEffect} from 'react'
import './Banner.css';
import loki from '../../assets/6160860.jpg';
import lokii from '../../assets/238d2d9c0c14518213cf7a8cb8f5148d68-loki-.1x.rsocial.w1200.webp';
import lokiy from '../../assets/1326003.jpeg';
import { Route, Routes,useNavigate} from 'react-router-dom';



import Signup from '../../Pages/Signup/Signup'






function Banner() {


 


  

  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const backgroundImages = [loki, lokii, lokiy];

    const updateBackgroundImage = () => {
      const randomIndex = Math.floor(Math.random() * backgroundImages.length);
      setBackgroundImage(backgroundImages[randomIndex]);
    };

    // Update the background image every 30 seconds
    const intervalId = setInterval(updateBackgroundImage, 30000);

    // Clear the interval and set a new one every 30 seconds
    const resetInterval = () => {
      clearInterval(intervalId);
      setInterval(updateBackgroundImage, 30000);
    };

    // Set the initial background image
    updateBackgroundImage();

    // Reset the interval after each change
    const resetId = setInterval(resetInterval, 30000);

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
      clearInterval(resetId);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount


  
   

  const navigate = useNavigate();
 
  

   
    
  return (
    <div className='banner'>
       
          
      
      
        <div className="back" style={{ backgroundImage:`url(${backgroundImage})`}}>
          <div className='lol'>
          
           <button >home</button>
          
           <button  
           onClick={()=>{
            setBackgroundImage();
            navigate('/signup')}
            
          } >signup</button>
          
          



          </div>
          

          
          
        


       


          
        
            
           
            
          <div className="content">
            <h1 className="title">Loki</h1>
            <div className="banner-buutons">
                <button onClick={setBackgroundImage} className="btn">in comics</button>
                <button onClick={setBackgroundImage} className="btn">in series</button>
                
            </div>
            <h1 className="disc">Loki is an American television series created by Michael Waldron for the streaming service Disney+, based on Marvel Comics featuring the character of the same name. It is the third television series in th…</h1>
            
          </div>


          
               
               
          

          

          <div className='fade'></div>

        </div>

        <Routes>
         
         <Route path='/signup' exact element={<Signup/>}/>
        </Routes>

        

       
    </div>
  )
}

export default Banner