import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { SlArrowRight } from "react-icons/sl";
import {Link} from 'react-router-dom'

const CourseraNavBar = () => {
  const [exploreDrop,setExploreDrop] = useState(false)
  const [blackDrop,setBlackDrop] = useState(false)
  const [degreeDrop,setDegreeDrop] = useState(false)
  const [certificateDrop,setCertificateDrop] = useState(false)
  const [dataScienceDrop,setDataScienceDrop] = useState(false)
  const [businessDrop,setBusinessDrop] = useState(false)
  const [computerScienceDrop,setComputerScienceDrop] = useState(false)
  const [ictDrop,setIctDrop] = useState(false)
  const [languageDrop,setLanguageDrop] = useState(false)
  const [healthDrop,setHealthDrop] = useState(false)
  const [personalDrop,setPersonalDrop] = useState(false)
  const [physicalDrop,setPhysicalDrop] = useState(false)
  const [socialDrop,setSocialDrop] = useState(false)
  const [artDrop,setArtDrop] = useState(false)
  const [mathDrop,setMathDrop] = useState(false)


  return (
    <div className='py-3 fixed w-[100vw] border bg-white px-4  sm:px-[31vw] md:px-[3vw] lg:px-[4vw]'>
      <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
          <img src={assets.courseraLogo} className='h-5 cursor-pointer' alt="" />

          {/* explore button */}
            <button 
            onMouseEnter={()=>{
              setExploreDrop(true)
              setBlackDrop(true)
            }} 
            className='text-blue-800 ml-2 font-semibold border flex items-center gap-2 border-blue-800 py-2 px-3 rounded'>Explore 
                <span><MdOutlineKeyboardArrowDown className='text-xl text-blue-500'/></span></button>

                {/* serach */}
                <div className='flex w-full'>
                     <div className='flex justify-between pl-3 pr-1 border rounded-full w-[475px] py-1'>
                         <input type="text" placeholder='What do you want to learn?' className='border-none text-sm w-full text-black' />
                            <div className='bg-blue-800 p-2 rounded-full'>
                                <CiSearch className='text-white  text-xl cursor-pointer'/>
                            </div>

                     </div>

                 </div>
        </div>

        <div className='flex gap-3 items-center font-normal text-slate-500 text-[14px]'>
            <p className='cursor-pointer hover:text-blue-800'>Online Degrees</p>
            <p className='cursor-pointer hover:text-blue-800'>Find your New Career</p>
            <p className='text-blue-800 font-normal cursor-pointer hover:underline'>Log In</p>
            <button className='text-blue-800 font-bold border border-blue-800 py-2 px-2 rounded hover:bg-blue-50 transition-all'>Join for Free</button>
        </div>
      </div>

       {/*---------------- black overlay------------------- */}
       <div 
       onMouseEnter={()=>{
        setDegreeDrop(false)
        setCertificateDrop(false)
        setDataScienceDrop(false)
        setBusinessDrop(false)
        setComputerScienceDrop(false)
        setIctDrop(false)
        setLanguageDrop(false)
        setHealthDrop(false)
        setPersonalDrop(false)
        setPhysicalDrop(false)
        setSocialDrop(false)
        setArtDrop(false)
        setMathDrop(false)
      }}
       className={`absolute right-0 top-[70px] left-0 w-[100vw] h-[100vw] bg-black  ${blackDrop ? 'opacity-75 visible' : 'opacity-0 invisible'}`}>
       </div>
     
        {/*----------------------explore dropdown--------------*/}
        <div onMouseLeave={()=>{
          setExploreDrop(false)
          setBlackDrop(false)
        }}
          className={` absolute pt-8 pb-28  top-[70px] left-[100px] bg-slate-100  w-[350px] h-[1000px] max-h-[100vh] overflow-y-scroll ${exploreDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          
          <div className='pb-20'>
              <div className='flex flex-col  pt-4 '>
                <p className='font-semibold text-xl pl-5 pb-1'>Goals</p>
                <p 
                onMouseEnter={()=>setDegreeDrop(false)} 
                className='text-slate-700 cursor-pointer px-5 hover:shadow-sm py-1  hover:text-blue-800  hover:bg-white'>Take a free course</p>
                <p onMouseEnter={()=>{
                  setDegreeDrop(true)
                  setCertificateDrop(false)


                } }
                className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>Earn a Degree <span className='hover:text-blue-800'><SlArrowRight className='text-[14px] hover:text-red-800'/></span></p>
                <p 
                onMouseEnter={()=>{
                  setDegreeDrop(false)
                  setCertificateDrop(true)
                }}
               
                 className='text-slate-700 flex items-center cursor-pointer  hover:text-blue-800 justify-between px-5 hover:shadow-sm py-1 hover:bg-white'>Earn a Certificate <span className='hover:text-blue-800'><SlArrowRight className='text-[14px]'/></span></p>
                <Link to='/' onMouseEnter={()=>
                setCertificateDrop(false)} 
                onClick={()=>{setExploreDrop(false)
                  setBlackDrop(false)
                }}
                className='text-slate-700 cursor-pointer px-5  hover:text-blue-800 hover:shadow-sm py-1 hover:bg-white'>Find your new career</Link>
              </div>
                
              <div className='flex flex-col  py-8'>
              <p 
              onMouseEnter={()=>{
                setCertificateDrop(false)
                setDataScienceDrop(false)
              }}
              className='font-semibold text-xl pl-5 pb-1'>Subjects</p>
             <p 
              onMouseEnter={()=>{
                setDegreeDrop(false)
                setCertificateDrop(false)
                setDataScienceDrop(true)
                setBusinessDrop(false)
              }}
             className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                 Data Science<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
             <p 
             onMouseEnter={()=>{
              setDataScienceDrop(false)
              setBusinessDrop(true)
              setComputerScienceDrop(false)
            }}
             className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Business<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onMouseEnter={()=>{
                    setDataScienceDrop(false)
                    setBusinessDrop(false)
                    setComputerScienceDrop(true)
                    setIctDrop(false)
                  }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Computer Science<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onMouseEnter={()=>{
                    setDataScienceDrop(false)
                    setBusinessDrop(false)
                    setComputerScienceDrop(false)
                    setIctDrop(true)
                    setLanguageDrop(false)
                  }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Information and Technology<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                    onMouseEnter={()=>{
                      setDataScienceDrop(false)
                      setBusinessDrop(false)
                      setComputerScienceDrop(false)
                      setIctDrop(false)
                      setLanguageDrop(true)
                      setHealthDrop(false)
                    }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Language Learning<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onMouseEnter={()=>{
                    setDataScienceDrop(false)
                    setBusinessDrop(false)
                    setComputerScienceDrop(false)
                    setIctDrop(false)
                    setLanguageDrop(false)
                    setHealthDrop(true)
                    setPersonalDrop(false)
                  }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Health<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                    onMouseEnter={()=>{
                      setDataScienceDrop(false)
                      setBusinessDrop(false)
                      setComputerScienceDrop(false)
                      setIctDrop(false)
                      setLanguageDrop(false)
                      setHealthDrop(false)
                      setPersonalDrop(true)
                      setPhysicalDrop(false)
                    }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Personal Development<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onMouseEnter={()=>{
                    setDataScienceDrop(false)
                    setBusinessDrop(false)
                    setComputerScienceDrop(false)
                    setIctDrop(false)
                    setLanguageDrop(false)
                    setHealthDrop(false)
                    setPersonalDrop(false)
                    setPhysicalDrop(true)
                    setSocialDrop(false)
                  }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Physical Science and Engineering<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onMouseEnter={()=>{
                    setDataScienceDrop(false)
                    setBusinessDrop(false)
                    setComputerScienceDrop(false)
                    setIctDrop(false)
                    setLanguageDrop(false)
                    setHealthDrop(false)
                    setPersonalDrop(false)
                    setPhysicalDrop(false)
                    setArtDrop(false)
                    setSocialDrop(true)
                  }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Social Sciences<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onMouseEnter={()=>{
                    setDataScienceDrop(false)
                    setBusinessDrop(false)
                    setComputerScienceDrop(false)
                    setIctDrop(false)
                    setLanguageDrop(false)
                    setHealthDrop(false)
                    setPersonalDrop(false)
                    setPhysicalDrop(false)
                    setSocialDrop(false)
                    setArtDrop(true)
                    setMathDrop(false)
                  }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Art and Humaniities<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p
                   onMouseEnter={()=>{
                    setDataScienceDrop(false)
                    setBusinessDrop(false)
                    setComputerScienceDrop(false)
                    setIctDrop(false)
                    setLanguageDrop(false)
                    setHealthDrop(false)
                    setPersonalDrop(false)
                    setPhysicalDrop(false)
                    setSocialDrop(false)
                    setArtDrop(false)
                    setMathDrop(true)
                   }} 
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Math and Logic<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  
            
              </div>

              <button className='py-1 px-2 border border-blue-800 ml-5 mb-10 rounded text-blue-800  font-medium cursor-pointer transition-all
               hover:bg-blue-800 hover:text-white'> Browse all subjects

              </button>
          </div>

        
        </div>

              {/* ---------------------------earn a degree drop------------------- */}
              <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
              }} 
              onMouseLeave={()=>setDegreeDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${degreeDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>Earn a Degree</p>
                    <p className='text-slate-600 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
                  </div>

                 <div>
                 <div className='flex gap-8'>
      {/* first row */}
        <div className=''>
            <div className='flex flex-col'>
              <p className=' font-bold'>Data Science</p>
              <hr className='border-none h-[1px] w-[400px] bg-slate-400'/>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Louisiana State University</p>
              <p>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Illinois Tech</p>
              <p>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>



                        </div>

                        {/* second row */}
                        
        <div>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Huddersfield</p>
              <p>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>O.P. jindal Global University</p>
              <p>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>GeorgeTown University</p>
              <p>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Colorado Boulder</p>
              <p>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <p className='pt-5 text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>
      </div>



                        </div>
                    </div>

                    {/* second session */}
                    <div className='flex gap-8 pt-20'>
      {/* first row */}
        <div className=''>
            <div className='flex flex-col'>
              <p className=' font-bold'>Computer Science</p>
              <hr className='border-none h-[1px] w-[400px] bg-slate-400'/>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of London</p>
              <p>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Louisiana State University</p>
              <p>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>West Virgina University</p>
              <p>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Colorado Boulder</p>
              <p>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>



                        </div>

                        {/* second row */}
                        
        <div>
            <div className='flex flex-col'>
              <p className=' font-bold'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-12'>
        <div className='flex gap-28'>
          <div className='flex flex-col gap-5 pt-6'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
          </div>
          <div className='flex flex-col gap-5 pt-6'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
          </div>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all hover:text-white hover:bg-blue-800  border w-44 border-blue-800 py-2 px-4'>
          View all degrees
        </button>
        </div>

      
      


                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-16 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
            </div>
        
            {/* ---------------------------earn a certificate drop------------------- */}
            <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
                setDegreeDrop(false)
              }} 
              onMouseLeave={()=>setCertificateDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${certificateDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>Earn a Certificate</p>
                    <p className='text-slate-600 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>
                  </div>

                 <div>
                 <div className='flex gap-8'>
      {/* first row */}
        <div className=''>
            <div className='flex flex-col'>
              <p className=' font-bold'>Data Science</p>
              <hr className='border-none h-[1px] w-[400px] bg-slate-400'/>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.deeplearning} className='h-8 rounded' alt="" />
            <div className='flex'>
              <p>DeepLearning.AI Data Engineering</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Data Analyst</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p >Google Data Analytics</p>
              <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Advanced Data Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.ibm} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
            <p >IBM Data Science</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>  
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Power BI Data Analyst</p>
            </div>
          </div>

          <p className='pt-5 text-blue-800 text-sm cursor-pointer'>View all Business Certificate</p>

      </div>



                        </div>
                        {/* second row */}
                        
        <div>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Project management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Project Management</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

           <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Digital Marketing & E-commerce</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>
          
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.intuit} className='w-8 border py-2 rounded ' alt="" />
            <div className='flex flex-col'>
            <p>Intuit Academy Bookkeeping</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Social Media Marketing</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>

            </div>
          </div>



          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Business Analyst</p>
            </div>
          </div>


         
          <p className='pt-5 text-blue-800 text-sm cursor-pointer'>View all Business Certificate</p>
      </div>



                        </div>
                    </div>

                    {/* second session */}
                    <div className='flex gap-8 pt-20'>
      {/* first row */}
        <div className=''>
            <div className='flex flex-col'>
              <p className=' font-bold'>Computer Science</p>
              <hr className='border-none h-[1px] w-[400px] bg-slate-400'/>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.deeplearning} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p>Generative AI for Software Development</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft IT Support Specialist</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8   rounded flex items-center '>
            <img src={assets.amazonLogo} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Amazon Junior Software Developer</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft UX design</p>
            </div>
          </div>

        
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.meta} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
            <p >Meta Front-End Developer</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>  
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Google Cybersecurity</p>
            </div>
          </div>

          <p className='pt-5 text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>
                        </div>
                      {/* second row */}
                        
        <div>
            <div className='flex flex-col'>
              <p className=' font-bold'>More Certificate Programs</p>
              <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-12'>
        <div className='flex gap-8'>
          <div className='flex flex-col gap-5 pt-6'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Launch your career</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Prepare for a certification</p>
          </div>
          <div className='flex flex-col gap-5 pt-6'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Advance your career</p>
          </div>
        </div>       
        </div>
                        </div>
                    </div>
                 </div>
               </div>
            </div>

              {/* ---------------------------data science drop------------------- */}
              <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
                setDataScienceDrop(true)
                setBusinessDrop(false)
              }} 
              onMouseLeave={()=>setDataScienceDrop(true)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${dataScienceDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>Data Science</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className=' w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Degrees</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Louisiana State University</p>
              <p>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Illinois Tech</p>
              <p>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Computer Science in Data Science</p>
            </div>
          </div>


      </div>
      <button className='cursor-pointer transition-all w-440 px-4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all degrees
                  </button>


                        </div>

                        {/* second row */}
                        
                        <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Certificate programs</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-4 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.deeplearning} className='h-8 rounded' alt="" />
            <div className='flex'>
              <p>DeepLearning.AI Data Engineering</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Data Analyst</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p >Google Data Analytics</p>
              <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Advanced Data Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.ibm} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
            <p >IBM Data Science</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>  
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Power BI Data Analyst</p>
            </div>
          </div>


      </div>
      <button className='cursor-pointer transition-all w-44 px-2 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all certifications
                  </button>


                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[12vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>
            
               {/* ---------------------------business drop------------------- */}
               <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
                setDataScienceDrop(false)
                setBusinessDrop(true)
                setComputerScienceDrop(false)
              }} 
              onMouseLeave={()=>setBusinessDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${businessDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>Business</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Huddersfield</p>
              <p>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>O.P. jindal Global University</p>
              <p>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>GeorgeTown University</p>
              <p>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer pb-16'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Colorado Boulder</p>
              <p>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <button className='cursor-pointer transition-all w-[150px] px-4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all degrees
                  </button>
      </div>



                        </div>

                        {/* second row */}
                        
                        <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Certificate programs</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-4 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.deeplearning} className='h-8 rounded' alt="" />
            <div className='flex'>
              <p>DeepLearning.AI Data Engineering</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Data Analyst</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p >Google Data Analytics</p>
              <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Advanced Data Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.ibm} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
            <p >IBM Data Science</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>  
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Power BI Data Analyst</p>
            </div>
          </div>


      </div>
      <button className='cursor-pointer transition-all w-44 px-2 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all certifications
                  </button>


                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[12vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

               {/* ---------------------------computer sciemce drop------------------- */}
               <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
               setIctDrop(false)
                setBusinessDrop(false)
                setComputerScienceDrop(true)
              }} 
              onMouseLeave={()=>setComputerScienceDrop(true)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${computerScienceDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'> Computer Science</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className=' w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Degrees</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Louisiana State University</p>
              <p>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Illinois Tech</p>
              <p>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Computer Science in Data Science</p>
            </div>
          </div>


      </div>
      <button className='cursor-pointer transition-all w-440 px-4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all degrees
                  </button>


                        </div>

                        {/* second row */}
                        
                        <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Certificate programs</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>

            </div>
        {/* image of institutions */}
        <div className='pb-8'>
           
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Project management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Project Management</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

           <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Digital Marketing & E-commerce</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>
          
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.intuit} className='w-8 border py-2 rounded ' alt="" />
            <div className='flex flex-col'>
            <p>Intuit Academy Bookkeeping</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Social Media Marketing</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>

            </div>
          </div>



          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Business Analyst</p>
            </div>
          </div>
      </div>



                        </div>
      <button className='cursor-pointer transition-all w-44 px-2 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all certifications
                  </button>


                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[12vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

             {/* ---------------------------ict drop------------------- */}
             <div onMouseEnter={()=>{
               setExploreDrop(true)
               setBlackDrop(true)
               setLanguageDrop(false)
               setComputerScienceDrop(false)
               setIctDrop(true)
              }} 
              onMouseLeave={()=>setIctDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${ictDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>  Information and Technology</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Huddersfield</p>
              <p>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>O.P. jindal Global University</p>
              <p>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>GeorgeTown University</p>
              <p>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer pb-16'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Colorado Boulder</p>
              <p>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <button className='cursor-pointer transition-all w-[150px] px-4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all degrees
                  </button>
      </div>



                        </div>

                        {/* second row */}
                        
                        <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Certificate programs</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-4 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.deeplearning} className='h-8 rounded' alt="" />
            <div className='flex'>
              <p>DeepLearning.AI Data Engineering</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Data Analyst</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p >Google Data Analytics</p>
              <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Advanced Data Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.ibm} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
            <p >IBM Data Science</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>  
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Power BI Data Analyst</p>
            </div>
          </div>


      </div>
      <button className='cursor-pointer transition-all w-44 px-2 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all certifications
                  </button>


                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[12vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

              {/* --------------------------- Language Learning drop------------------- */}
              <div onMouseEnter={()=>{
               setExploreDrop(true)
               setBlackDrop(true)
               setHealthDrop(false)
               setIctDrop(false)
               setLanguageDrop(true)
              }} 
              onMouseLeave={()=>setLanguageDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${languageDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>   Language Learning</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className='w-[50vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.arizona} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p>Arizona State University TESOL </p>
              <p className='text-[12px] text-slate-700'>  Certification preparation•Self-paced</p>
            </div>
          </div>

         
         
      </div>

                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[50vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

              {/* --------------------------- health drop------------------- */}
              <div onMouseEnter={()=>{
               setExploreDrop(true)
               setBlackDrop(true)
               setDataScienceDrop(false)
               setLanguageDrop(false)
               setPersonalDrop(false)
               setIctDrop(true)
              }} 
              onMouseLeave={()=>setHealthDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${healthDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>   Health</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className='w-[50vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.imperial} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p> Imperial College London </p>
              <p className='text-[12px] text-slate-700'>Postgraduate Certificate of Public Health</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.imperial} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p>Imperial College London </p>
              <p className='text-[12px] text-slate-700'> Global Master of Public Health  </p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.michigan} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p>University of Michigan </p>
              <p className='text-[12px] text-slate-700'>  Master of Public Health</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 pb-8 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.ponti} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p>Pontificia Universidad Católica de Chile </p>
              <p className='text-[12px] text-slate-700'> Magíster en Salud Pública Global</p>
            </div>
          </div>

         
          <button className='cursor-pointer transition-all w-[150px] text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
          View all degrees
                  </button>





         
      </div>

                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[50vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

               {/* ---------------------------   Personal Development drop------------------- */}
               <div onMouseEnter={()=>{
               setExploreDrop(true)
               setBlackDrop(true)
               setPhysicalDrop(false)
               setHealthDrop(false)
               setIctDrop(true)
              }} 
              onMouseLeave={()=>setPersonalDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${personalDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>    Personal Development</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className='w-[50vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.nexus} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p> CertNexus Certified Ethical Emerging Technologist</p>
              <p className='text-[12px] text-slate-700'>  Certification preparation •Self-paced</p>
            </div>
          </div>

         
         
      </div>

                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[50vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

             {/* --------------------------- Physical Science and Engineering------------------- */}
             <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
                setSocialDrop(false)
                setPersonalDrop(false)
              }} 
              onMouseLeave={()=>setPhysicalDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${physicalDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>Physical Science and Engineering</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Huddersfield</p>
              <p>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>O.P. jindal Global University</p>
              <p>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>GeorgeTown University</p>
              <p>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer pb-16'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Colorado Boulder</p>
              <p>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <button className='cursor-pointer transition-all w-[150px] px-4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all degrees
                  </button>
      </div>



                        </div>

                        {/* second row */}
                        
                        <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Certificate programs</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-4 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.deeplearning} className='h-8 rounded' alt="" />
            <div className='flex'>
              <p>DeepLearning.AI Data Engineering</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Data Analyst</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p >Google Data Analytics</p>
              <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Advanced Data Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.ibm} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
            <p >IBM Data Science</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>  
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Power BI Data Analyst</p>
            </div>
          </div>


      </div>
      <button className='cursor-pointer transition-all w-44 px-2 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all certifications
                  </button>


                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[12vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

               {/* --------------------------- Social Sciences drop------------------- */}
               <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
                setDataScienceDrop(true)
                setPhysicalDrop(false)
                setArtDrop(false)
              }} 
              onMouseLeave={()=>setSocialDrop(true)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${socialDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'> Social Sciences</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className=' w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Degrees</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Louisiana State University</p>
              <p>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Illinois Tech</p>
              <p>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Computer Science in Data Science</p>
            </div>
          </div>


      </div>
      <button className='cursor-pointer transition-all w-440 px-4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all degrees
                  </button>


                        </div>

                        {/* second row */}
                        
                        <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Certificate programs</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-4 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.deeplearning} className='h-8 rounded' alt="" />
            <div className='flex'>
              <p>DeepLearning.AI Data Engineering</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Data Analyst</p>
            </div>
          </div>

      </div>
      <button className='cursor-pointer transition-all w-44 px-2 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all certifications
                  </button>


                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[12vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>
            
              {/* ------------------------- Art and Humaniities drop------------------- */}
              <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
                setSocialDrop(true)
                setBusinessDrop(false)
                setMathDrop(false)
              }} 
              onMouseLeave={()=>setArtDrop(true)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${artDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'> Art and Humaniities</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className=' w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Degrees</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2 pb-8'>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Computer Science in Data Science</p>
            </div>
          </div>


      </div>
     


                        </div>

                        {/* second row */}
                        
                        <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Certificate programs</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-4 pb-8'>
        
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Power BI Data Analyst</p>
            </div>
          </div>


      </div>
                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[12vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

               {/* --------------------------- Math and Logic------------------ */}
               <div onMouseEnter={()=>{
               setExploreDrop(true)
               setBlackDrop(true)
               setArtDrop(false)
               setIctDrop(true)
              }} 
              onMouseLeave={()=>setMathDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${mathDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>    Math and Logic</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className='w-[50vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.imperial} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p> Imperial College London </p>
              <p className='text-[12px] text-slate-700'>Postgraduate Certificate of Public Health</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.imperial} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p>Imperial College London </p>
              <p className='text-[12px] text-slate-700'> Global Master of Public Health  </p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.michigan} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p>University of Michigan </p>
              <p className='text-[12px] text-slate-700'>  Master of Public Health</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 pb-8 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.ponti} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p>Pontificia Universidad Católica de Chile </p>
              <p className='text-[12px] text-slate-700'> Magíster en Salud Pública Global</p>
            </div>
          </div>

         
          <button className='cursor-pointer transition-all w-[150px] text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
          View all degrees
                  </button>





         
      </div>

                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[50vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>
           
            
    </div>
  )
}

export default CourseraNavBar