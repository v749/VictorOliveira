const Principal=document.querySelector(".Principal");
const slider=document.querySelector(".slider");
const headline=document.querySelector(".headline");
const headline2=document.querySelector(".headline2");
               
                
const tl = new TimelineMax();
tl.fromTo(Principal,1,{x: "-100%"}, {x: "0%", ease:Power2.easeInOut}).
fromTo(Principal, 1.2, {width: "20%"}, {width:"90%", ease:Power2.easeInOut, duration: 1}, "-=1.2").
fromTo(slider, 1.2, {x: "-100%"}, {x:"0%", ease:Power2.easeInOut})
                
                
                
                
            