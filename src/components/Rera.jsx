import React from 'react';
import { assets } from '../assets/assets'

const Rera = () => {
  return (
   <div className="max-w-[75rem] mx-auto w-full px-6 py-10 text-gray-800">
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Registration <span className="underline underline-offset-4 decoration-1 font-light">Details</span>
        </h1>
        <p className="text-gray-500 max-w-80 text-center">
          Verified & Transparent – Built on a Foundation of Trust.
        </p>
      </div>
<br></br>
      <div className="max-w-6xl w-full"> 
        {/* CONTENT WRAPPER */}
        <div className="grid md:grid-cols-2 gap-16 items-center justify-center">
          
          {/* QR SIDE */}
          <div className="flex justify-center">
            <div className="bg-white w-72 h-72 md:w-80 md:h-80
                        rounded-2xl border border-slate-200
                        shadow-md flex items-center justify-center">
              <img 
                src={assets.Legal_Qr}
                alt="MahaRERA QR Code"
                className="w-56 h-56 md:w-64 md:h-64"
              />
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="flex flex-col justify-center text-center md:text-left">
            

            <div className="text-xs md:text-xl tracking-[2px] text-slate-500 font-semibold uppercase">
              OUR MAHARERA REGISTRATION NUMBER
            </div>

            <div className="text-2xl md:text-3xl font-extrabold text-[#0b1f44] mt-3">
              P51700033231
            </div>

            <p className="mt-8 text-slate-500 leading-relaxed md:max-w-md">
              Complete project information including approvals, carpet area and legal compliance is available on the official Maharashtra RERA portal.
            </p>

            <hr className="bg-gray-300 h-[1px] border-0 my-4" />

            <a 
              href="https://maharera.maharashtra.gov.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 md:text-2xl lg:text-3xl break-all hover:underline"
            >
              https://maharera.maharashtra.gov.in/
            </a>
          </div>
         </div>
        </div>
      </div>
  );
};

export default Rera;
