function About() {

    return (
    <div id='about'className='grid max-w-[100%] md:pl-20 md:pr-20 bg-[#9BABB8] h-screen'>
        <div className='flex justify-center'>
          <h1 className="text-3xl text-white font-bold text-center mb-0" >About Me</h1>
        </div>
        <div className="bg-[#EEE3CB] bg-opacity-50 p-4 rounded-lg mb-2 text-white text-md text-justify">
A skilled and ambitious Bachelor of Science in Information Technology graduate proficient in Database Management (PHP, MySQL, Prisma) and Programming (Java, Python, C++). Experienced in Web Development (HTML, PHP, CSS, JavaScript, Tailwind, React, Typescript, Vite) with strong soft skills for effective communication, collaboration, and adaptability. Ready to make a meaningful impact in the IT field.
</div>
        <div>
          <div className="flex justify-around flex-wrap bg-[#EEE3CB] bg-opacity-50 p-4 rounded-lg w-auto">
          <div className="mr-5"><h1 className="font-bold text-white text-2xl">Address</h1><h2 className="font-semibold text-1xl text-white">Villa Salvacion Sagay City</h2></div>
          <div className="mr-5"><h1 className="font-bold text-white text-2xl">Phonenumber</h1><h2 className="font-semibold text-1xl text-white">09451479010</h2></div>
          <div className="mr-5"><h1 className="font-bold text-white text-2xl">Email</h1><h2 className="font-semibold text-1xl text-white" >nicoalingasa@yahoo.com.ph</h2></div>
          </div>
</div>

<h2 className='text-3xl font-bold text-center justify-self-start text-white mb-4'>Educational Background</h2>
<ol>
<li className="bg-[#EEE3CB] bg-opacity-50 p-4 rounded-lg mb-4">
  <p className="flex flex-wrap gap-4 flex-row items-centered justify-start text-xs md:text-sm"> <span className="inline-block gap-4 px-2 py-1 font-semibold text-white bg-[#967E76] rounded-md">Tertiary</span> <span className="text-lg font-semibold text-white">2019-2023</span></p>
  <p className="my-2 text-white text-lg font-normal leading-normal">STI West Negros University: Bachelor of Science in Information Technology</p>
</li>
<li className="bg-[#EEE3CB] bg-opacity-50 p-4 rounded-lg mb-4">
  <p className="flex flex-wrap gap-4 flex-row items-centered justify-start text-xs md:text-sm"> <span className="inline-block gap-4 px-2 py-1 font-semibold text-white bg-[#967E76] rounded-md">Tertiary</span> <span className="text-lg font-semibold text-white">2017-2018</span></p>
  <p className="my-2 text-white text-lg font-normal leading-normal">Northern Negros State College of Science and Technology: Bachelor of Arts in English</p>
</li>
<li className="bg-[#EEE3CB] bg-opacity-50 p-4 rounded-lg mb-4">
  <p className="flex flex-wrap gap-4 flex-row items-centered justify-start text-xs md:text-sm"> <span className="inline-block gap-4 px-2 py-1 font-semibold text-white bg-[#967E76] rounded-md">Tertiary</span > <span className="text-lg font-semibold text-white">2015-2017</span></p>
  <p className="my-2 text-white text-lg font-normal leading-normal">Northern Negros State College of Science and Technology: Bachelor of Science in Information Technology  </p>
</li>
</ol>
        </div>
  )
}

export default About