// import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import {AboutMe, ProjectSection, ContactSection} from './components/MainComponents';


function App() {
  const [active, setActive] = useState({
    act1:true,
    act2:false,
    act3:false,
  });
  const [scrollState, setScrollState] = useState(0);
  const handleScroll = ()=>{
    const position = window.pageYOffset;
    setScrollState(position)
    setActive({
      act1:(scrollState < 626 ? true: false), 
      act2:(scrollState > 626? (scrollState < 1370? true: false): false),
      act3:(scrollState >= 1370? (scrollState < 1683 ? true: false): false)
    })
    console.log(position)
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll,{passive:true});
    return()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  })
  
  return (
    <div style={{width:"100%", height:"100%", position:"relative"}} className="App">
      <nav style={{position:"fixed"}} className="main-nav">
        
        <div className={"logo-container "+(scrollState >= 1616 ? "bottomLoc":"")}>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="200" height="100" viewBox="0 0 494 290">
            <image id="Shape_1_copy_5" data-name="Shape 1 copy 5" x="47" y="29" width="300" height="133" xlinkHref="data:img/png;base64,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"/>
          </svg>

          {/* <div className="logo" style={{backgroundImage:"url("+logo+")", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}/> */}
        </div>
        <ul className="nav-cont">
          <li className={`nav-item `+ (active.act1 === true? "active":"")}>
            <a href="#about" onClick={()=>setActive({act1:true, act2:false, act3:false})}>ABOUT ME</a>
            <span></span>
          </li>
          <li className={`nav-item ` + (active.act2 === true? "active":"")}>
            <a href="#project" onClick={()=>setActive({act2:true, act1:false, act3:false})}>PROJECTS</a>
            <span></span>
          </li>
          <li className={`nav-item ` + (active.act3 === true? "active":"")}>
            <a href="#contact" onClick={()=>setActive({act3:true, act2:false, act1:false})}>CONTACTS</a>
            <span></span>
          </li>
        </ul>
      </nav>
      <div id="main-cont">
        <AboutMe />
        <ProjectSection scroll={scrollState}/>
        <ContactSection scrollValue={scrollState}/>
      </div>
      <footer>
        <p>All Rights Reserverd 2021</p>
      </footer>
    </div>
  );
}

export default App;
