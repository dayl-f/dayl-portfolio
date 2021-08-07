import React, {useEffect, useState} from "react";
import aboutImage from '../static/image/IMG_1193.png';
import projectImage from "../static/image/DELTA_004.png";
import contactImage from "../static/image/DSC01699.jpg"
export class AboutMe extends React.Component{
    
    render(){
        return(
            <div id="about" className="about-section">
                <NameTitle />
                <MyImage image={aboutImage}/>
                <Description scroll={this.props.scrollValue} color="#1F7DC0"/>
            </div>
        )
    }
}
function MyImage(props){
    const [mouseLoc, setMouseLoc] = useState({x:0, y:0});
    const mouseHandler = (event)=>{
        setMouseLoc({x:event.clientX, y:event.clientY}); 
        // max x = 1360
     
        // max y = 680
    }
    useEffect(()=>{
        document.addEventListener('mousemove', mouseHandler,{passive:true})
        return()=>document.removeEventListener("mousemove",mouseHandler)
        
    })
    return(
        <div style={{userSelect:"none"}} className="myimage-cont">
            <img style={{left:"-"+((mouseLoc.x/100)+40)+"%", top:"-"+(mouseLoc.y/50)+"%"}} src={props.image} alt="" className="main-myimage sh0" />
            <img style={{left:"-"+((mouseLoc.x/100)+55)+"%", top:"-"+(mouseLoc.y/100)+"%"}} src={props.image} alt="" className="main-myimage shadow sh1" />
            <img style={{left:"-"+((mouseLoc.x/150)+55)+"%", top:"-"+(mouseLoc.y/125)+"%"}} src={props.image} alt="" className="main-myimage shadow sh2" />            
            <img style={{left:"-"+((mouseLoc.x/200)+55)+"%", top:"-"+(mouseLoc.y/150)+"%"}} src={props.image} alt="" className="main-myimage shadow sh3" />
        </div>
    )
}
function NameTitle(){
    return(
        <div className="main-title-cont">
            <div className="title">
                <h2>DAYL</h2>
                <h1>FERNANDEZ</h1>
            </div>
        </div>
    )
}
function Description(props){
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            height:"100%",
            justifyContent:"center",
            paddingLeft:"5%",
            paddingTop:"10%"
            }} 
            className="description-cont">
            <span style={{
                width:"0",
                height:"2px",
                backgroundColor:props.color,
                }}/>
            <div style={{
                display:"flex",
                flexDirection:"column",
                width:"75%",
                paddingLeft:"15%"
            }} className="main-desc">
                <div className="upper-desc">
                    <p>A photographer, video editor, and graphics designer based in the Philippines</p>
                </div>
                <div style={{fontWeight:"lighter", fontSize:"1vw"}} className="lower-desc">
                    <p>helloworld, here is my description, this is you.</p>
                </div>
            </div>
        </div>
    )
}

export class ProjectSection extends React.Component{
    
    render(){
        return(
            <div id="project" className="project-section">
                <div className="main-content">
                    <div className="left-content">
                        <div className="title">
                            <h1>Let's Conceptualize!</h1>
                            <h3>I make your projects look even better</h3>
                        </div>
                        <div className="button-content">
                            <button>See More Projects</button>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="image-cont">
                            <img style={{opacity:((this.props.scroll-150)/850)}} src={projectImage} alt="" />

                        </div>
                    </div>
                </div>
                <div className="background-project">
                    <Background scroll={this.props.scroll} content="EDITING"/>
                </div>
            </div>
        )
    }
}

function Background(props){
    const scrollValue = props.scroll
    return(
        <div className={"background-cont" }>
            <h1 className={"main-backs" }>{props.content}</h1>
            <h1 className={"main-back back1 " + (scrollValue >= 800 ? "active1":"")}>{props.content}</h1>
            <h1 className={"main-back back2 " + (scrollValue >= 800 ? "active2":"")}>{props.content}</h1>
            <h1 className={"main-back back3 " + (scrollValue >= 800 ? "active3":"")}>{props.content}</h1>
            <h1 className={"main-back back4 " + (scrollValue >= 800 ? "active4":"")}>{props.content}</h1>
            <h1 className={"main-back back5 " + (scrollValue >= 800 ? "active5":"")}>{props.content}</h1>
        </div>
    )
}

export class ContactSection extends React.Component{
    render(){
        return(
            <div id="contact" className="contact-section">
                <div className="main-content">
                <div className="right-content">
                        <div className="image-cont">
                            <CirclePic image={contactImage} firstColor="#AEFAFF" secondColor="#00C4D0" thirdColor="rgba(0, 196, 208, 0.80)"/>
                        </div>
                    </div>
                    <div className="left-content">
                        <div className="title contact">
                            <div className="cont">
                                <span></span>
                                <h2>Interested<b>?</b></h2>

                            </div>
                            <h1>Contact me!</h1>
                        </div>
                        <div className="details">
                            <ul>
                                <li><b>Address:</b> Dasmariñas City, Cavite, Philippines</li>
                                <li><b>Email:</b> daylmavrikfernandez@gmail.com</li>
                                <li><b>Mobile No.:</b> +63 916 207 6266</li>
                            </ul>
                        </div>
                        <div className="button-content" >
                            <SocialMediaCompiled/>
                        </div>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

function CirclePic(props){
    return(
        <div className="contact-image">
            
            <span className="circle-out" style={{width:"30vw", height:"30vw", borderRadius:"50%", backgroundColor:props.thirdColor, display:"flex", justifyContent:"center", alignItems:"center", zIndex:1}}>
                <span className="circle-out" style={{width:"28vw", height:"28vw", borderRadius:"50%", backgroundColor:props.secondColor, display:"flex", justifyContent:"center", alignItems:"center", zIndex:2}}>
                    <span className="circle-out" style={{width:"26vw", height:"26vw", borderRadius:"50%", backgroundColor:props.firstColor, display:"flex", justifyContent:"center", alignItems:"center", zIndex:3}}>
                        <div className="circle" style={{
                        backgroundImage:"url("+props.image+")", 
                        backgroundPosition:"center", 
                        backgroundRepeat:"no-repeat", 
                        backgroundSize:"60vw",
                    
                    }} />
                    </span>

                </span>
            </span>
            
        </div>
       
    )
}

function SocialMediaCompiled(){
    return(
        <ul style={{display:"flex", flexDirection:"row", listStyle:"none", padding:"0", margin:"0", width:"100%"}}>
            <SocialIcon link="https://www.facebook.com/daylmavrikquilit.fernandez" icon="facebook"/>
            <SocialIcon link="https://www.instagram.com/dayl.mavrik_fernandez"icon="instagram"/>
            <SocialIcon link="https://twitter.com/dayl_m" icon="twitter"/>
            <SocialIcon link="https://www.youtube.com/channel/UCdLTvm1g02_u4GYqQ4klfSA" icon="youtube"/>

        </ul>
    )
}

function SocialIcon(props){
    const icons = {
        "twitter":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMzYzMjgxIDAtMjU2IDExNC42MzY3MTktMjU2IDI1NnMxMTQuNjM2NzE5IDI1NiAyNTYgMjU2IDI1Ni0xMTQuNjM2NzE5IDI1Ni0yNTYtMTE0LjYzNjcxOS0yNTYtMjU2LTI1NnptMTE2Ljg4NjcxOSAxOTkuNjAxNTYyYy4xMTMyODEgMi41MTk1MzIuMTY3OTY5IDUuMDUwNzgyLjE2Nzk2OSA3LjU5Mzc1IDAgNzcuNjQ0NTMyLTU5LjEwMTU2MyAxNjcuMTc5Njg4LTE2Ny4xODM1OTQgMTY3LjE4MzU5NGguMDAzOTA2LS4wMDM5MDZjLTMzLjE4MzU5NCAwLTY0LjA2MjUtOS43MjY1NjItOTAuMDY2NDA2LTI2LjM5NDUzMSA0LjU5NzY1Ni41NDI5NjkgOS4yNzczNDMuODEyNSAxNC4wMTU2MjQuODEyNSAyNy41MzEyNSAwIDUyLjg2NzE4OC05LjM5MDYyNSA3Mi45ODA0NjktMjUuMTUyMzQ0LTI1LjcyMjY1Ni0uNDc2NTYyLTQ3LjQxMDE1Ni0xNy40NjQ4NDMtNTQuODk0NTMxLTQwLjgxMjUgMy41ODIwMzEuNjg3NSA3LjI2NTYyNSAxLjA2MjUgMTEuMDQyOTY5IDEuMDYyNSA1LjM2MzI4MSAwIDEwLjU1ODU5My0uNzIyNjU2IDE1LjQ5NjA5My0yLjA3MDMxMi0yNi44ODY3MTgtNS4zODI4MTMtNDcuMTQwNjI0LTI5LjE0NDUzMS00Ny4xNDA2MjQtNTcuNTk3NjU3IDAtLjI2NTYyNCAwLS41MDM5MDYuMDA3ODEyLS43NSA3LjkxNzk2OSA0LjQwMjM0NCAxNi45NzI2NTYgNy4wNTA3ODIgMjYuNjEzMjgxIDcuMzQ3NjU3LTE1Ljc3NzM0My0xMC41MjczNDQtMjYuMTQ4NDM3LTI4LjUyMzQzOC0yNi4xNDg0MzctNDguOTEwMTU3IDAtMTAuNzY1NjI0IDIuOTEwMTU2LTIwLjg1MTU2MiA3Ljk1NzAzMS0yOS41MzUxNTYgMjguOTc2NTYzIDM1LjU1NDY4OCA3Mi4yODEyNSA1OC45Mzc1IDEyMS4xMTcxODcgNjEuMzk0NTMyLTEuMDA3ODEyLTQuMzA0Njg4LTEuNTI3MzQzLTguNzg5MDYzLTEuNTI3MzQzLTEzLjM5ODQzOCAwLTMyLjQzNzUgMjYuMzE2NDA2LTU4Ljc1MzkwNiA1OC43NjU2MjUtNTguNzUzOTA2IDE2LjkwMjM0NCAwIDMyLjE2Nzk2OCA3LjE0NDUzMSA0Mi44OTA2MjUgMTguNTY2NDA2IDEzLjM4NjcxOS0yLjY0MDYyNSAyNS45NTcwMzEtNy41MzEyNSAzNy4zMTI1LTE0LjI2MTcxOS00LjM5NDUzMSAxMy43MTQ4NDQtMTMuNzA3MDMxIDI1LjIyMjY1Ny0yNS44Mzk4NDQgMzIuNSAxMS44ODY3MTktMS40MjE4NzUgMjMuMjE0ODQ0LTQuNTc0MjE5IDMzLjc0MjE4Ny05LjI1MzkwNi03Ljg2MzI4MSAxMS43ODUxNTYtMTcuODM1OTM3IDIyLjEzNjcxOS0yOS4zMDg1OTMgMzAuNDI5Njg3em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9zdmc+",
        "youtube": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ5MC4yNCwxMTMuOTJjLTEzLjg4OC0yNC43MDQtMjguOTYtMjkuMjQ4LTU5LjY0OC0zMC45NzZDMzk5LjkzNiw4MC44NjQsMzIyLjg0OCw4MCwyNTYuMDY0LDgwICAgIGMtNjYuOTEyLDAtMTQ0LjAzMiwwLjg2NC0xNzQuNjU2LDIuOTEyYy0zMC42MjQsMS43Ni00NS43MjgsNi4yNzItNTkuNzQ0LDMxLjAwOEM3LjM2LDEzOC41OTIsMCwxODEuMDg4LDAsMjU1LjkwNCAgICBDMCwyNTUuOTY4LDAsMjU2LDAsMjU2YzAsMC4wNjQsMCwwLjA5NiwwLDAuMDk2djAuMDY0YzAsNzQuNDk2LDcuMzYsMTE3LjMxMiwyMS42NjQsMTQxLjcyOCAgICBjMTQuMDE2LDI0LjcwNCwyOS4wODgsMjkuMTg0LDU5LjcxMiwzMS4yNjRDMTEyLjAzMiw0MzAuOTQ0LDE4OS4xNTIsNDMyLDI1Ni4wNjQsNDMyYzY2Ljc4NCwwLDE0My44NzItMS4wNTYsMTc0LjU2LTIuODE2ICAgIGMzMC42ODgtMi4wOCw0NS43Ni02LjU2LDU5LjY0OC0zMS4yNjRDNTA0LjcwNCwzNzMuNTA0LDUxMiwzMzAuNjg4LDUxMiwyNTYuMTkyYzAsMCwwLTAuMDk2LDAtMC4xNmMwLDAsMC0wLjA2NCwwLTAuMDk2ICAgIEM1MTIsMTgxLjA4OCw1MDQuNzA0LDEzOC41OTIsNDkwLjI0LDExMy45MnogTTE5MiwzNTJWMTYwbDE2MCw5NkwxOTIsMzUyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=",
        "facebook":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTUxMiAyNTZjMC0xNDEuNC0xMTQuNi0yNTYtMjU2LTI1NnMtMjU2IDExNC42LTI1NiAyNTYgMTE0LjYgMjU2IDI1NiAyNTZjMS41IDAgMyAwIDQuNS0uMXYtMTk5LjJoLTU1di02NC4xaDU1di00Ny4yYzAtNTQuNyAzMy40LTg0LjUgODIuMi04NC41IDIzLjQgMCA0My41IDEuNyA0OS4zIDIuNXY1Ny4yaC0zMy42Yy0yNi41IDAtMzEuNyAxMi42LTMxLjcgMzEuMXY0MC44aDYzLjVsLTguMyA2NC4xaC01NS4ydjE4OS41YzEwNy0zMC43IDE4NS4zLTEyOS4yIDE4NS4zLTI0Ni4xeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L3N2Zz4=",
        "instagram":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMwNSAyNTZjMCAyNy4wNjI1LTIxLjkzNzUgNDktNDkgNDlzLTQ5LTIxLjkzNzUtNDktNDkgMjEuOTM3NS00OSA0OS00OSA0OSAyMS45Mzc1IDQ5IDQ5em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zNzAuNTkzNzUgMTY5LjMwNDY4OGMtMi4zNTU0NjktNi4zODI4MTMtNi4xMTMyODEtMTIuMTYwMTU3LTEwLjk5NjA5NC0xNi45MDIzNDQtNC43NDIxODctNC44ODI4MTMtMTAuNTE1NjI1LTguNjQwNjI1LTE2LjkwMjM0NC0xMC45OTYwOTQtNS4xNzk2ODctMi4wMTE3MTktMTIuOTYwOTM3LTQuNDA2MjUtMjcuMjkyOTY4LTUuMDU4NTk0LTE1LjUwMzkwNi0uNzA3MDMxLTIwLjE1MjM0NC0uODU5Mzc1LTU5LjQwMjM0NC0uODU5Mzc1LTM5LjI1MzkwNiAwLTQzLjkwMjM0NC4xNDg0MzgtNTkuNDAyMzQ0Ljg1NTQ2OS0xNC4zMzIwMzEuNjU2MjUtMjIuMTE3MTg3IDMuMDUwNzgxLTI3LjI5Mjk2OCA1LjA2MjUtNi4zODY3MTkgMi4zNTU0NjktMTIuMTY0MDYzIDYuMTEzMjgxLTE2LjkwMjM0NCAxMC45OTYwOTQtNC44ODI4MTMgNC43NDIxODctOC42NDA2MjUgMTAuNTE1NjI1LTExIDE2LjkwMjM0NC0yLjAxMTcxOSA1LjE3OTY4Ny00LjQwNjI1IDEyLjk2NDg0My01LjA1ODU5NCAyNy4yOTY4NzQtLjcwNzAzMSAxNS41LS44NTkzNzUgMjAuMTQ4NDM4LS44NTkzNzUgNTkuNDAyMzQ0IDAgMzkuMjUuMTUyMzQ0IDQzLjg5ODQzOC44NTkzNzUgNTkuNDAyMzQ0LjY1MjM0NCAxNC4zMzIwMzEgMy4wNDY4NzUgMjIuMTEzMjgxIDUuMDU4NTk0IDI3LjI5Mjk2OSAyLjM1OTM3NSA2LjM4NjcxOSA2LjExMzI4MSAxMi4xNjAxNTYgMTAuOTk2MDk0IDE2LjkwMjM0MyA0Ljc0MjE4NyA0Ljg4MjgxMyAxMC41MTU2MjQgOC42NDA2MjYgMTYuOTAyMzQzIDEwLjk5NjA5NCA1LjE3OTY4OCAyLjAxNTYyNSAxMi45NjQ4NDQgNC40MTAxNTYgMjcuMjk2ODc1IDUuMDYyNSAxNS41LjcwNzAzMiAyMC4xNDQ1MzIuODU1NDY5IDU5LjM5ODQzOC44NTU0NjkgMzkuMjU3ODEyIDAgNDMuOTA2MjUtLjE0ODQzNyA1OS40MDIzNDQtLjg1NTQ2OSAxNC4zMzIwMzEtLjY1MjM0NCAyMi4xMTcxODctMy4wNDY4NzUgMjcuMjk2ODc0LTUuMDYyNSAxMi44MjAzMTMtNC45NDUzMTIgMjIuOTUzMTI2LTE1LjA3ODEyNSAyNy44OTg0MzgtMjcuODk4NDM3IDIuMDExNzE5LTUuMTc5Njg4IDQuNDA2MjUtMTIuOTYwOTM4IDUuMDYyNS0yNy4yOTI5NjkuNzA3MDMxLTE1LjUwMzkwNi44NTU0NjktMjAuMTUyMzQ0Ljg1NTQ2OS01OS40MDIzNDQgMC0zOS4yNTM5MDYtLjE0ODQzOC00My45MDIzNDQtLjg1NTQ2OS01OS40MDIzNDQtLjY1MjM0NC0xNC4zMzIwMzEtMy4wNDY4NzUtMjIuMTE3MTg3LTUuMDYyNS0yNy4yOTY4NzR6bS0xMTQuNTkzNzUgMTYyLjE3OTY4N2MtNDEuNjkxNDA2IDAtNzUuNDg4MjgxLTMzLjc5Mjk2OS03NS40ODgyODEtNzUuNDg0Mzc1czMzLjc5Njg3NS03NS40ODQzNzUgNzUuNDg4MjgxLTc1LjQ4NDM3NWM0MS42ODc1IDAgNzUuNDg0Mzc1IDMzLjc5Mjk2OSA3NS40ODQzNzUgNzUuNDg0Mzc1cy0zMy43OTY4NzUgNzUuNDg0Mzc1LTc1LjQ4NDM3NSA3NS40ODQzNzV6bTc4LjQ2ODc1LTEzNi4zMTI1Yy05Ljc0MjE4OCAwLTE3LjY0MDYyNS03Ljg5ODQzNy0xNy42NDA2MjUtMTcuNjQwNjI1czcuODk4NDM3LTE3LjY0MDYyNSAxNy42NDA2MjUtMTcuNjQwNjI1IDE3LjY0MDYyNSA3Ljg5ODQzNyAxNy42NDA2MjUgMTcuNjQwNjI1Yy0uMDAzOTA2IDkuNzQyMTg4LTcuODk4NDM3IDE3LjY0MDYyNS0xNy42NDA2MjUgMTcuNjQwNjI1em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNTYgMGMtMTQxLjM2MzI4MSAwLTI1NiAxMTQuNjM2NzE5LTI1NiAyNTZzMTE0LjYzNjcxOSAyNTYgMjU2IDI1NiAyNTYtMTE0LjYzNjcxOSAyNTYtMjU2LTExNC42MzY3MTktMjU2LTI1Ni0yNTZ6bTE0Ni4xMTMyODEgMzE2LjYwNTQ2OWMtLjcxMDkzNyAxNS42NDg0MzctMy4xOTkyMTkgMjYuMzMyMDMxLTYuODMyMDMxIDM1LjY4MzU5My03LjYzNjcxOSAxOS43NDYwOTQtMjMuMjQ2MDk0IDM1LjM1NTQ2OS00Mi45OTIxODggNDIuOTkyMTg4LTkuMzQ3NjU2IDMuNjMyODEyLTIwLjAzNTE1NiA2LjExNzE4OC0zNS42Nzk2ODcgNi44MzIwMzEtMTUuNjc1NzgxLjcxNDg0NC0yMC42ODM1OTQuODg2NzE5LTYwLjYwNTQ2OS44ODY3MTktMzkuOTI1NzgxIDAtNDQuOTI5Njg3LS4xNzE4NzUtNjAuNjA5Mzc1LS44ODY3MTktMTUuNjQ0NTMxLS43MTQ4NDMtMjYuMzMyMDMxLTMuMTk5MjE5LTM1LjY3OTY4Ny02LjgzMjAzMS05LjgxMjUtMy42OTE0MDYtMTguNjk1MzEzLTkuNDc2NTYyLTI2LjAzOTA2My0xNi45NTcwMzEtNy40NzY1NjItNy4zMzk4NDQtMTMuMjYxNzE5LTE2LjIyNjU2My0xNi45NTMxMjUtMjYuMDM1MTU3LTMuNjMyODEyLTkuMzQ3NjU2LTYuMTIxMDk0LTIwLjAzNTE1Ni02LjgzMjAzMS0zNS42Nzk2ODctLjcyMjY1Ni0xNS42Nzk2ODctLjg5MDYyNS0yMC42ODc1LS44OTA2MjUtNjAuNjA5Mzc1cy4xNjc5NjktNDQuOTI5Njg4Ljg4NjcxOS02MC42MDU0NjljLjcxMDkzNy0xNS42NDg0MzcgMy4xOTUzMTItMjYuMzMyMDMxIDYuODI4MTI1LTM1LjY4MzU5MyAzLjY5MTQwNi05LjgwODU5NCA5LjQ4MDQ2OC0xOC42OTUzMTMgMTYuOTYwOTM3LTI2LjAzNTE1NyA3LjMzOTg0NC03LjQ4MDQ2OSAxNi4yMjY1NjMtMTMuMjY1NjI1IDI2LjAzNTE1Ny0xNi45NTcwMzEgOS4zNTE1NjItMy42MzI4MTIgMjAuMDM1MTU2LTYuMTE3MTg4IDM1LjY4MzU5My02LjgzMjAzMSAxNS42NzU3ODEtLjcxNDg0NCAyMC42ODM1OTQtLjg4NjcxOSA2MC42MDU0NjktLjg4NjcxOXM0NC45Mjk2ODguMTcxODc1IDYwLjYwNTQ2OS44OTA2MjVjMTUuNjQ4NDM3LjcxMDkzNyAyNi4zMzIwMzEgMy4xOTUzMTMgMzUuNjgzNTkzIDYuODI0MjE5IDkuODA4NTk0IDMuNjkxNDA2IDE4LjY5NTMxMyA5LjQ4MDQ2OCAyNi4wMzkwNjMgMTYuOTYwOTM3IDcuNDc2NTYzIDcuMzQzNzUgMTMuMjY1NjI1IDE2LjIyNjU2MyAxNi45NTMxMjUgMjYuMDM1MTU3IDMuNjM2NzE5IDkuMzUxNTYyIDYuMTIxMDk0IDIwLjAzNTE1NiA2LjgzNTkzOCAzNS42ODM1OTMuNzE0ODQzIDE1LjY3NTc4MS44ODI4MTIgMjAuNjgzNTk0Ljg4MjgxMiA2MC42MDU0NjlzLS4xNjc5NjkgNDQuOTI5Njg4LS44ODY3MTkgNjAuNjA1NDY5em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
    }
    const choosen = ()=>{
        const iconChoose = props.icon
        let value = ""
        for(var key in icons){
            const icon = icons[key]
            if (key === iconChoose){
                value = icon
                break
            }
            
        }
        return value
    }
    return(
        <li style={{margin:"1% 4%"}}>
            <a target="_blank" rel="noopener noreferrer" href={props.link}>
                
                <img style={{width:"3vw"}} src={choosen()} alt=""/>
                
            </a>
        </li>
    )
}
