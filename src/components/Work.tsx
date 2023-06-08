const Work = () => {
  return (
    <div id="work" className="className='grid max-w-[100%] md:pl-20 md:pr-20 bg-[#9BABB8] m-auto">
    <div>
        <h1 className="flex justify-center font-bold text-4xl mb-4">Projects</h1>
        <p className="bg-[#EEE3CB] bg-opacity-50 p-4 rounded-lg mb-4 text-justify mx-4 my-10">During my OJT at Spring Valley Tech Corp, I had the incredible opportunity to actively contribute to a real-world project. This immersive experience exposed me to a dynamic work environment and allowed me to apply my skills in a practical setting. I gained valuable insights into project management, problem-solving, and teamwork, enhancing my professional development significantly. Working alongside seasoned professionals, I acquired a deep understanding of industry best practices and developed a strong foundation for my future career in the IT field.</p>
        <h2 className="flex justify-center font-bold text-2xl mb-4">Pasabay</h2>
        <div>
        </div>
        <div className="flex flex-col max-w-[100%] items-center justify-between pb-4 md:flex-row gap-4">
                <div className=' md:w-2/5 '>
                <img src="/pasabay2.png" alt="image" className="object-cover rounded"/>
            </div>
                <div className=" md:w-1/6">
                <img src="/pasabay1.png" alt="image" className="object-cover rounded"/>
            </div>
            <div className="md:w-1/6 ">
                <img src="/pasabay3.png" alt="image" className="object-cover rounded"/>
            </div>
            <div className="md:w-1/6 ">
                <img src="/pasabay4.png" alt="image" className="object-cover rounded"/>
            </div>
            </div>
    </div>
    <div><p className="bg-[#EEE3CB] bg-opacity-50 p-4 rounded-lg mb-4 text-justify">
    A cloud kitchen app that enables a simple home kitchen to turn into business, it also aims to help citizens cut their daily expenses on food by selecting variation of  specially fresh  home cooked meals be delivered on their doorstep.
    </p></div>
    
    </div>
  )
}

export default Work