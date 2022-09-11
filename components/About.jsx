import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About Me
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            / / I am a student and a developer
          </p>
          <p className='py-2 text-gray-600'>
            I started my journey during my high school years, where I first was introduced to the concept of using a language to build a variety of different applications, soon after I took it on myself to dive into multiple aspects of computer science, where I explored the fields of web and mobile app development, cloud computing, machine learning, and assembly based coding. I am currently pursuing my Bachelors in Computer Science from the University of Texas at Dallas.
          </p>
          <p className='py-2 text-gray-600'>
            Now as I am coming to part in my education where I get to decide which aspect of computer science I would like to pursue into furthur studies and as a career, I would say that the field of data science, including unsuperivised learning and deep learning, and the field of software development, including web and mobile app development, are the two fields that I am most interested in.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  )
}

export default About;