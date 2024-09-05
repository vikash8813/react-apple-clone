import React from "react";
import "../css/Column1.css";
import { useNavigate } from "react-router-dom"

export default function Col1(){
  const navigate = useNavigate();
    return (
        <div style={{display:"flex", alignItems:"center"}}>

          <div className="first" >
            <h1 style={{textAlign:"center",height:20,fontFamily:"Arial",fontSize:40}}>MacBook Air</h1>
            <h3 className="m">Supercharged by M3.</h3>
            <div>
            <button onClick={()=>{navigate("/Store")}}  className="learn1">Learn more</button>
            <button onClick={()=>{navigate("/Macnn")}} className="buy1"> Buy</button>
            </div>
            <img className="img2" src="https://s.yimg.com/ny/api/res/1.2/1I9i47ooISiSqJLhdivSsA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/os/creatr-uploaded-images/2024-03/7095bdc0-da29-11ee-bf4b-7c2ec0555c24"></img>
          </div>

          <div className="second">

            <div style={{display:"flex", alignItems:"center",justifyContent:"center",marginBottom:0}}>
            <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD////7+/vW1tb4+Pjt7e0mJiZfX1/z8/Pi4uJ0dHSrq6vT09PBwcGcnJyzs7OVlZXNzc3d3d1BQUFXV1ejo6NkZGR8fHwNDQ3AwMA4ODghISEvLy9ubm4YGBiHh4dOTk4yMjIbGxs9PT2NjY2CgoI3IbHOAAAEGUlEQVR4nO3c63aiMBQFYFEQFOViVdBqxVbf/xXH1lEhQWmHE7PL7O/njGuZXSCXk0ivR0RERERERERERERERERERERERERERET0f3kbh5PYdiMM2qZ9x3EGtpthymsUOF9mtltiyM5znC4nLGbO1cR2Y0zYOSVT260xIC4HdCLbzZE3rQR0xrbbI04J2F/bbpC0pBqwe11poQTs3GOYe2rCF9tNEharAbs2VszVgE5hu0nCJmrA1HaLhOmX8MN2k4SlXe9Ih30lYOeWhjsloNu1e1SdrzlL2w2Spo723Ztyv1Qew373AvaW5YCjrs3WPo1LAbtZQsxuMxnfdlvMGHcp33CeJUm2rI53/ql7CdJkX/nHfL49JsnYf31m81qaLwbu9X6cJPO3y3/kRfFe+WQRpbcBJJgcfkXns4lG6tzTi2tHdj/WPtmfZPmzG/xDeeiqrT6HXBTVD24OWry/g8jRSsO/Kwvqm/0VMvQv12d4TNUpeDkjbj+01pa3WuPTVTwdPPgznMWgt+qyseXfNts3f93zHcTynbhz23F0oWTAk63tQCqtSNga2MojEg8Itjw+GggIVUnVa4QS4qHtXFf5nelJKx7SuL8wEHCFtNRYGwi4sB2qYtD1gL58QLAajlrlbQ+s1P8iHtBF6mR6JjrSzHYkhbYt3xbYPWrgJoWajvb0wzGtwR3j0zZ120J7CsUfQxetRDMUDoh3NEN83XSwnUilbsy3BlfXFx/vbQfSSBegPNuBNNKDBdqERn5tCDfe92bNjf4RvGsoXYPCOxEtnXBkO5BG+i51bQfSNO4Y/tR783c+l3iRpvtbTqHtRCrxPSe4rkZ+0wntTK38rlNiO5JCfAWMN+aLFxPRdrflB0S4vkb6CMYJ2LGvrLnFPwW2b7GXT4i2hJLvatD2D+W3Dx2wQXHc3N5/sLMdq2RTf2S2LaTftInvzZxN35q/+klET12WeDBLxfWDA83tTFCORclP3G4ZMa6jmd70DOTokNz5bhXKfqmJk3tnIJfQYF+zsR3twsjMzUGan2qvK5HhAr24xsxFRKqdGrmILs45756Ziwi1hOrt5QOiVaTkx0S0E3yv0tUMvFcPCRfdApjB/kZ2JQx3RPFkKFnOwLtHPwnutPWxisJXcoMixsJXJ9af4sy4VUI/n0Eb68tEtvWx34Up8SiiTWaq8vaHFbEm3LpN294GaVFYr2VE/ICnuc2DiH03CAL3QeEKpbj22Ka+CD6KD/7HMD8Nm+v5UX81zRe43yLcU3N8YeUrxd1C/5AH+DKMe/zquVMvqqtd51Hlfu7/hkewZDu5PG1uen8llA0un/JC6HG+1sc4CqerxfbxUnadhatVnPyi+5OIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIzPoDk8E0kPZ3ejUAAAAASUVORK5CYII="></img>
            <h1 className="watch">WATCH</h1>
            </div>
            <p style={{color:"red",textAlign:"center",height:0}}>SERIES 9</p>

            <div className="smart">
                <h2>Smarter.</h2>
                <h2>Brighter.</h2>
                <h2>Mighter.</h2>
            </div>
            <button onClick={()=>{navigate("/Store")}} className="learn3">Learn more</button>
            <button onClick={()=>{navigate("/Watch")}} className="buy3">Buy</button>

            <img className="watch2" src="https://www.apple.com/v/watch/bn/images/overview/welcome/startframe__xspkedg7rsiu_xlarge.jpg"></img>

          </div>
        </div>
    )
}