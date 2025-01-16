import Footer from "@/components/footer";
import NavbarMain from "@/components/Navbarmain";
import TermsAndConditions from "@/components/privacy";
import React from "react";


const privacy = () =>{
    return(
        <>
        <NavbarMain/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <TermsAndConditions/>
        </div>
        <Footer/>
        </>
    )
}

export default privacy;