import React from "react";
import Head from "./Header";
import Ipad from "./ipad";
import Mac from "./Macbook";
import Iphone from "./Iphone";
import Col from "./Columns";
import Notice  from "./Notice";


function App2() {
  return (
    <div style={{padding:0 }}>
    <Head></Head>  
    <Ipad></Ipad>
    <Mac></Mac>
    <Iphone></Iphone>
    <Col></Col>
    <Notice></Notice>
    
    </div>
  )
}
export default App2;
