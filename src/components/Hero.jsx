import { useRef, useEffect } from "react";

const Hero = () => {
  const viedoRef = useRef();

  useEffect(()=>{
    if(viedoRef.current) viedoRef.current.playbackRate = 2;
  }),[]
    
  return (
    <section id="hero">
    <div>
      <h1>MacBook Pro</h1>
      <img src="title.png" alt="title" />
    </div>
    <div>
        <video ref={viedoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>
        <button>Buy</button>
        <p>From $1599 or $133.25/mo. For 12 mo.</p>
    </div>
    </section>
  );
};

export default Hero;