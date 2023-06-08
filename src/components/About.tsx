function About() {

    return (
    <div id='about'className='grid max-w-[100%] md:pl-20 p-3 py-10'>
        <div className='flex justify-center'>
          <h1 className="text-3xl font-bold text-center" >About Me</h1>
        </div>
        <div>
          <div className="flex justify-around flex-wrap">
          <div className="mr-5"><h1>Address</h1><h2>Villa Salvacion Sagay City</h2></div>
          <div className="mr-5"><h1>Phonenumber</h1><h2>09451479010</h2></div>
          <div className="mr-5"><h1>Email</h1><h2>nicoalingasa@yahoo.com.ph</h2></div>
          </div>
</div>
<h2 className='text-3xl font-bold text-center'>Educational Background</h2>
<ol>
<li>
  <p> <span>Tertiary</span> <span>2019-2023</span></p>
  <p>STI West Negros University: Bachelor of Science in Information Technology</p>
</li>
<li>
  <p> <span>Tertiary</span> <span>2017-2018</span></p>
  <p>Northern Negros State College of Science and Technology: Bachelor of Arts in English</p>
</li>
<li>
  <p> <span>Tertiary</span> <span>2015-2017</span></p>
  <p>Northern Negros State College of Science and Technology: Bachelor of Science in Information Technology  </p>
</li>
</ol>
        </div>
  )
}

export default About