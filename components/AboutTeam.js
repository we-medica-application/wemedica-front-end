


import { staticImage } from "../lib/assets";

export default function AboutTeam() {
    return (
  
<div>


<div className="bg-white">
  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="text-center text-2xl font-extrabold tracking-tight text-gray-900">Our Team</h2>

    <div className="columns-4 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src={staticImage("Fasial.jpg")} alt="Fasial" className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="https://www.linkedin.com/in/faisal-kushha-mpa-bb8129b1/">
                <span aria-hidden="true" class="absolute inset-0"></span>
                Faisal Kushha
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Software Developer</p>
          </div>
        
        </div>
      </div>

       <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src={staticImage("Jehad.jpg")} alt="Jehad" className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="https://jehadabuawwad.netlify.app/">
                <span aria-hidden="true" class="absolute inset-0"></span>
                Jehad Abu Awwad
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Software Developer</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src={staticImage("Musab.jpg")} alt="Musab." className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="https://www.linkedin.com/in/musaabshalaldeh/">
                <span aria-hidden="true" class="absolute inset-0"></span>
                Musa'b Shalaldeh
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Software Developer</p>
          </div>
        
        </div>
      </div>

     
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src={staticImage("shahdalkha.jpg")} alt="shahed" className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="https://www.linkedin.com/in/shahd-alkhateib1995/">
                <span aria-hidden="true" class="absolute inset-0"></span>
                Shahed Alkhatib
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Software Developer</p>
          </div>
         
        </div>
 
   
      
   
   
   
    </div>
 
 
 
 
 
  </div>

</div>


 
</div>
</div>







    );}