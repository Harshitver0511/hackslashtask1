
import './App.css';
import Comp from './component/Comp';
import imm from './1.jpeg';
import imm2 from './2.jpeg';
import imm3 from './3.jpeg';
import imm4 from './4.jpeg';
import React from 'react';

function App() {
  const [toggle,setToggle]=React.useState(false)
  function toggletheme(){
    setToggle(preve=>preve=!preve)
  }
  const styles={
    backgroundColor:"rgb(33,37,41)",
    color:"white"
}
const style2={
  backgroundColor:"rgb(33,37,41)",
  color:"white",
  border:"1px solid white"

}
// style={toggle?styles:{backgroundColor:"rgb(240,248,255)",color:"black"}}
  return (
  <div className='harshit' style={toggle?styles:{backgroundColor:"rgb(240,248,255)",color:"black"}} >
  <h4>Lets Collaborate</h4>
  <div className="main" >

  <Comp 
     head2="AI + RPA is what we do"
     para="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience" 
     head3="AI + RPA Automation"
     source={imm}
     sac={toggle}
   />


  <Comp 
     head2="Make Bolder Choices" 
     para="Digital focused strategies to realize market-changing ideas" 
     head3="Build Better Apps"
     source={imm2}
     sac={toggle}
  />

  <Comp 
    head2="Innovate With Speed" 
    para="Create higher quality software, deliver on customer expectations and business goals" 
    head3="Devops"
    source={imm3}
    sac={toggle}
  />

  <Comp 
    head2="Embrace Cloud" 
    para="With Cloud-First accelerate innovation and optimize performance" 
    head3="Cloud Services"
    source={imm4}
    sac={toggle}
  />
   
    
  </div>
 
  <button style={toggle?style2:{backgroundColor:"rgb(33,37,41)",color:"white"}} onClick={toggletheme}>Toggle Night Mode</button>
</div>
  );
}

export default App;
