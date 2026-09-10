import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {scrollTrigger} from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(scrollTrigger);

const About = () =>{
    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger:"#clip",
                start:"center center",
                end:"+=800 center",
                scrub:0.5,
                pin:true,
                pinSpacing:true,
            },
        });
        clipAnimation.to(".mask-clip-path",{
            width:"100vw",
            height:"100vh",
            borderRadius:0,
        });
    });
    return(
        <div></div>
    )
}