function About() {
  return (
    <div
      id="about"
      className="max-w-[100%] bg-[#9BABB8] h-auto px-5"
    >
      <div className="flex justify-center">
        <h1 className="text-3xl text-black font-bold text-center my-4">
          About Me
        </h1>
      </div>
      <div className="bg-[#EEE3CB] bg-opacity-50 p-4 rounded-lg my-2 text-black text-justify">
        A skilled and ambitious Bachelor of Science in Information Technology
        graduate proficient in Database Management (PHP, MySQL, Prisma) and
        Programming (Java, Python, C++). Experienced in Web Development (HTML,
        PHP, CSS, JavaScript, Tailwind, React, Typescript, Vite) with strong
        soft skills for effective communication, collaboration, and
        adaptability. Ready to make a meaningful impact in the IT field.
      </div>
      <div>
        <div className="flex justify-between flex-wrap bg-[#EEE3CB] bg-opacity-50 p-4 rounded-lg w-auto">
          <div className="mr-5">
            <h1 className="font-bold text-black text-2xl">Address</h1>
            <h2 className="font-semibold text-1xl text-black">
              Villa Salvacion Sagay City
            </h2>
          </div>
          <div className="mr-5">
            <h1 className="font-bold text-black text-2xl">Phonenumber</h1>
            <h2 className="font-semibold text-1xl text-black">09451479010</h2>
          </div>
          <div className="mr-5">
            <h1 className="font-bold text-black text-2xl">Email</h1>
            <h2 className="font-semibold text-1xl text-black">
              nicoalingasa@yahoo.com.ph
            </h2>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center justify-self-start text-black my-4">
        Educational Background
      </h2>
      <div className="flex flex-col content-between">
        <ol>
        <li className="bg-[#EEE3CB] bg-opacity-50 p-4 rounded-lg my-10">
          <div className="flex flex-wrap gap-4 flex-row items-centered justify-start text-xs md:text-md">
            <span className="inline-block gap-4 px-2 py-1 font-semibold text-black bg-[#967E76] rounded-md">
              Tertiary
            </span>
            <span className="text-lg font-semibold text-black">2019-2023</span>
          </div>
          <div>
            <p className="my-2 text-black text-lg font-normal leading-normal">
              STI West Negros University: Bachelor of Science in Information
              Technology
            </p>
          </div>
        </li>
        <li className="bg-[#EEE3CB] bg-opacity-50 p-4 rounded-lg my-10">
          <div className="flex flex-wrap gap-4 flex-row items-centered justify-start text-xs md:text-md">
            <span className="inline-block gap-4 px-2 py-1 font-semibold text-black bg-[#967E76] rounded-md">
              Tertiary
            </span>
            <span className="text-lg font-semibold text-black">2017-2018</span>
          </div>
          <div>
            <p className="my-2 text-black text-lg font-normal leading-normal">
              Northern Negros State College of Science and Technology: Bachelor
              of Arts in English
            </p>
          </div>
        </li>
        <li className="bg-[#EEE3CB] bg-opacity-50 p-4 rounded-lg ">
          <div className="flex flex-wrap gap-4 flex-row items-centered justify-start text-xs md:text-md">
            <span className="inline-block gap-4 px-2 py-1 font-semibold text-black bg-[#967E76] rounded-md">
              Tertiary
            </span>
            <span className="text-lg font-semibold text-black">2015-2017</span>
          </div>
            <p className="my-2 text-black md:text-md lg:text-lg font-normal leading-normal">
              Northern Negros State College of Science and Technology: Bachelor
              of Science in Information Technology
            </p>
        </li>
        </ol>
      </div>
    </div>
  );
}

export default About;
