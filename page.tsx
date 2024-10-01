export default function Home() {
  return (
    <>
       {/* Below Code Is With CSS */}
       <div className="homeContainer">
         <div className="childContainer">
           Hey,
          <br />
           My Name is <span className="pinkColor">Hassan Ali Junejo</span>
          <br />I am Next JS Developer
        </div>
         <img src="https://next-js-assignments-xi.vercel.app/profile.png" alt="https://next-js-assignments-xi.vercel.app/profile.png" />

        <div className="childContainer"></div>
       </div>
       <div>
       
       
     </div>
  
      {/* Below Code Is With Tailwind */}
      <div className="flex justify-between items-center">
        <div className="w-fit h-[250px] m-[40px] text-[80px] font-black">
          Hey,
          <br />
          My Name is <span className="blueColor">Hassan Ali Junejo</span>
          <br />I am Front End Developer
        </div>
        <div className=""></div>
        </div> 
    </>
  );
}