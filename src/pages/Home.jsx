import React from "react";

export default function Home() {
  return (
    <div className="w-screen h-auto p-8 ">
      <div className="w-full h-screen flex flex-col">
        <div className="font-oswald flex flex-col ">
          <div className="text-9xl flex w-full items-center gap-9 justify-center">
            <p>YOUR IDEAS</p>
            <img src="https://images.unsplash.com/photo-1526657782461-9fe13402a841?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="icon" className="w-[150px] h-[140px]" />
            <p className="font-light font-poppins text-[1.2rem] w-1/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut totam saepe ea reiciendis explicabo, exercitationem corrupti vel! Veniam voluptatem quo suscipit totam vitae. Doloribus magni quasi nihil officiis unde!</p>
          </div>
          <div className="text-9xl flex w-full items-center gap-9 justify-center">
            <p className="font-light font-poppins text-[1.2rem] w-1/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut totam saepe ea reiciendis explicabo, exercitationem corrupti vel! Veniam voluptatem quo suscipit totam vitae. Doloribus magni quasi nihil officiis unde!</p>
            <p>AMBITIONS</p>
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="icon" className="w-[150px] h-[140px]" />
          </div>
          <div className="text-9xl text-center">TURNED REAL</div>
        </div>
        <div className="flex justify-center items-center gap-4 p-4">
          <div className="flex flex-col items-center justify-center w-[30vw]">
            <img
              src="https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b"
              alt="icon"
              className="w-12 h-12 rounded-full bg-black"
            />
            <p>
              Share your ideas with the world and get them turned into
              reality.Share your ideas with the world and get them turned into
              reality.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30vw]">
            <img
              src="https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b"
              alt="icon"
              className="w-12 h-12 rounded-full bg-black"
            />
            <p>
              Collaborate with other creators and bring your ideas to life.Share
              your ideas with the world and get them turned into reality.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30vw]">
            <img
              src="https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b"
              alt="icon"
              className="w-12 h-12 rounded-full bg-black"
            />
            <p>
              Get your ideas funded and start working on them.Share your ideas
              with the world and get them turned into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
