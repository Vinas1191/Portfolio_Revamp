import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image from '../assets/headFirstLogo.png';
import casestudy from '../assets/casestudy.png';
import screens from '../assets/version1.png';
import oldscreens from '../assets/oldscreen.png';
import screens2 from '../assets/version2.png';
import flowchart from '../assets/HeadFirstFlow.png'
import features from '../assets/features.png'
import homescreen from '../assets/homescreenhfc.png'
import Symptom from '../assets/symptomcard.png'
import accomodation from  '../assets/Frame 1171275229.png'
import faq from '../assets/Frame 1171275227.png'
import trackingscreen from '../assets/trackingscreenhfc.png'
import clientframe from '../assets/clientframe.png'
import iteration1 from '../assets/it1.png'
import iteration2 from '../assets/it2.png'
import iteration3 from '../assets/it3.png'
import iteration4 from '../assets/it4.png'
import trends from '../assets/trends.png'
import archive from '../assets/archivescreen.png'
import annoted from '../assets/annoted.png'
import ContactUs from '../components/ContactUs';

gsap.registerPlugin(ScrollTrigger);

const HeadFirstCaseStudy = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    // Animate sections on scroll
    const sections = page.querySelectorAll('.case-study-section');
    
    sections.forEach((section, index) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div ref={pageRef} className="mt-40">
      {/* Hero Section */}
      
      <section className="case-study-section text-center py-14 px-4">
        <div className=" flex-col max-w-4xl mx-auto justify-center">
            <div className="flex justify-center">
                <img className="w-[160px] h-auto " src={image} alt="" />
            </div>
          <p className="font-secondary text-[24px] md:text-4xl text-black mb-2  pt-8 pb-2">
            Designing a Healthcare Portal for Concussion Recovery
          </p>
          <p className="font-primary font-medium text-xl max-sm:text-lg">
            MVP Design for an Early-Stage Health-Tech Startup
          </p>
        </div>
      </section>

      {/* Mobile Mockups Section */}
      <section className="case-study-section py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <img src={casestudy} className="w-full h-auto" alt="" />
        </div>
      </section>

      <section className='case-study-section py-20'>
      {/* Project Overview */}
      <section className=" py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="font-secondary text-black text-sm mb-2">1. Project Overview</div>
          <h2 className="font-secondary text-2xl md:text-3xl font-bold text-black mb-6">About Head First</h2>
          <p className="text-gray-700 font-primary-medium text-md leading-relaxed">
          Head First is an early-stage health-tech startup focused on improving concussion recovery management for students. The startup’s mission is to reduce the mental and logistical burden of recovery by providing tools to track symptoms, monitor progress, and request academic accommodations.
           </p>
        </div>
      </section>

      {/* Constraints */}
      <section className=" py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="font-secondary text-[#BFBFBF] text-sm mb-2">Constraints</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white max-sm:p-0 pr-4 rounded-lg">
              <div className="font-secondary max-sm:text-lg text-2xl pb-6 max-sm:pb-4 font-semibold text-gray-900">Timeline</div>
              <div className="text-gray-600">5 weeks</div>
            </div>
            <div className="bg-white max-sm:p-0 px-4 rounded-lg">
              <div className="font-secondary max-sm:text-lg text-2xl pb-6  max-sm:pb-4 font-semibold text-gray-900">Role</div>
              <div className="text-gray-600">UX Designer</div>
            </div>
            <div className="bg-white max-sm:p-0 px-4 rounded-lg">
              <div className="font-secondary max-sm:text-lg text-2xl pb-6 max-sm:pb-4  font-semibold text-gray-900">Team</div>
              <div className="text-gray-600">Sole Designer, 2 SDEs, 1 PM</div>
            </div>
            <div className="bg-white max-sm:p-0 px-4 rounded-lg">
              <div className="font-secondary max-sm:text-lg text-2xl pb-6 max-sm:pb-4 font-semibold text-gray-900">Tools/Skills</div>
              <div className="text-gray-600">Figma, Canva, UXR, Stockholder Management</div>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className=" py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="font-secondary text-[#BFBFBF] text-sm mb-2">The Ask</div>

          <h2 className="font-secondary text-2xl md:text-3xl font-bold text-black mb-6">Conversation with the founder</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
          When I joined, the Head First team had already completed user research and developed rough wireframes for their MVP. My responsibility was to transform these concepts into a developer-ready, high-fidelity product design that prioritized usability, accessibility, and technical feasibility. As the design objectives were:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white max-sm:p-0 pr-4 pt-10 rounded-lg flex">
              <span className="text-black flex font-secondary max-sm:text-lg text-2xl mr-2">1.</span>
              <div className="font-secondary max-sm:text-lg text-2xl pb-6 max-sm:pb-1 font-semibold text-gray-900">Design weekly insights into recovery trends</div>
            </div>
            <div className="bg-white max-sm:p-0 px-4 pt-10 rounded-lg flex">
              <span className="text-black flex font-secondary max-sm:text-lg text-2xl mr-2">2.</span>
              <div className="font-secondary max-sm:text-lg text-2xl pb-6  max-sm:pb-1 font-semibold text-gray-900">Simplify daily symptom tracking</div>
            </div>
            <div className="bg-white max-sm:p-0 px-4 pt-10 rounded-lg flex">
              <span className="text-black flex font-secondary max-sm:text-lg text-2xl mr-2">3.</span>
              <div className="font-secondary max-sm:text-lg text-2xl pb-6 max-sm:pb-1  font-semibold text-gray-900">Annotated designs for developer implementation</div>
            </div>
          </div>

          {/* bullet pointers */}
          {/* <div className="space-y-3">
            <div className="flex items-start">
              <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
              <span className="text-gray-700">Simplify daily symptom tracking</span>
            </div>
            <div className="flex items-start">
              <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
              <span className="text-gray-700">Offer weekly insights into recovery trends</span>
            </div>
            <div className="flex items-start">
              <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
              <span className="text-gray-700">Annotated designs for developer implementation</span>
            </div>
          </div> */}
        </div>
      </section>

      </section>

      {/* Understanding the Starting Point */}
      <section className="case-study-section py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="font-secondary text-black text-sm mb-2">2. Understanding the Starting Point</div>
          <h2 className="font-secondary text-2xl md:text-3xl font-bold text-black mb-6">Need Finding</h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-gray-900 mb-3">When I joined the project, the Head First team had already laid a strong foundation through user research and early wireframes. They provided a research summary that highlighted core pain points. the need for symptom tracking, progress monitoring, and academic accommodations. along with rough wireframes that outlined how these features might come together in the MVP.</h3>

              {/* green pointes  */}
              {/* <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  A research summary detailing user pain points and MVP feature priorities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Initial wireframes that outlined the basic flows for symptom tracking, progress monitoring, and accommodation requests
                </li>
              </ul> */}
            </div>

            <div className="flex max-md:flex-col lg:gap-14 max-w-4xl mx-auto">
            <div className="lg:w-4/7 my-4 p-8 rounded-[20px] border border-[#6ABF8B] ">
              <img src={oldscreens} className="w-full h-auto" alt="" />
            </div>
            <div className="lg:w-3/7 my-4 rounded-[20px] border overflow-hidden  border-[#6ABF8B]">
              <img src={screens2} className="w-full h-auto object-cover" alt="" />
            </div>
          </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">While useful as a starting point, the initial wireframes revealed several gaps:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  They did not account for edge cases such as empty states or error handling.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  The visual hierarchy was unclear, raising accessibility concerns for users experiencing cognitive fatigue.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  The flows lacked a consistent design system, making it difficult to scale beyond the MVP.
                </li>
              </ul>
            </div>

            <div className="max-w-4xl mx-auto mt-10 p-6 rounded-[20px] border border-[#6ABF8B]">
              <h1 className="font-secondary text-[#BFBFBF] text-sm">User Flow before intervention</h1>
              <img src={flowchart} className="w-full h-auto" alt="" />
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
            These early files gave me a good sense of where the product was headed, but they also showed that a lot of details were still missing. My job was to take the rough ideas and turn them into something clear and ready to build. That meant filling in gaps like empty states, refining the flows, and making sure the design would be easy for students to use during recovery, while still giving caregivers and school staff the information they need. This step set the stage for moving from rough sketches to a polished, developer-ready MVP.</p>

          
          </div>
        </div>
      </section>


    {/* challenges */}
      <section className="case-study-section py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="font-secondary text-black text-sm mb-2">3. The Challenge</div>
          <h2 className="font-secondary text-2xl md:text-3xl font-bold text-black mb-6">Things to consider</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
          As I started refining the designs, it became clear that the project had several important challenges to address. The product had to serve students recovering from concussions, which meant accessibility and simplicity were critical. At the same time, I needed to make sure the designs aligned with the technical limits of the chosen stack (Supabase and Next.js). The initial wireframes also left out key parts of the user journey, so I had to define missing flows while keeping everything consistent across the different features. Balancing all these needs was essential to move from rough concepts to a build-ready MVP.
          </p>
            <div className='grid lg:grid-cols-2 lg:gap-14'>
              <div className="flex flex-col items-start pt-6">
              <span className="font-secondary text-2xl md:text-3xl font-bold text-black">1.</span>
                <span className="font-secondary text-2xl md:text-3xl font-bold text-black my-4">Accessibility for users with cognitive fatigue</span>
                <span className="text-gray-900 mb-3">Students recovering from concussions often struggle with screen glare, visual clutter, and long forms. The UI needed to be low-stimulation and easy to scan.</span>
              </div>

              <div className="flex flex-col items-start pt-6">
              <span className="font-secondary text-2xl md:text-3xl font-bold text-black">2.</span>
              
              <span className="font-secondary text-2xl md:text-3xl font-bold text-black my-4">Developer constraints</span>
              <span className="text-gray-900 mb-3">The design needed to work within the limitations of Supabase (backend) and Next.js (frontend). This meant keeping patterns lightweight and avoiding unnecessary complexity.</span>
              </div>
            </div>
        
            <div className='grid lg:grid-cols-2 lg:gap-14'>
              <div className="flex flex-col items-start pt-6">
              <span className="font-secondary text-2xl md:text-3xl font-bold text-black">3.</span>
                <span className="font-secondary text-2xl md:text-3xl font-bold text-black my-4">Incomplete flows</span>
                <span className="text-gray-900 mb-3">The initial wireframes didn’t account for essential states like onboarding, no-data screens, or progress visualization. These had to be designed from scratch to create a seamless experience.</span>
              </div>

              <div className="flex flex-col items-start pt-6">
              <span className="font-secondary text-2xl md:text-3xl font-bold text-black">4.</span>
              
              <span className="font-secondary text-2xl md:text-3xl font-bold text-black my-4">Consistency across features</span>
              <span className="text-gray-900 mb-3">Symptom tracking, progress monitoring, and accommodations had to feel like parts of the same system, not three separate tools stitched together. Creating a consistent design system was key.</span>
              </div>
            </div>
        </div>
      </section>

      {/* Exploration */}
      {/* full image div  */}
      {/* <section className="case-study-section py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="font-secondary text-[#BFBFBF] text-sm mb-2">Exploration</div>
          <h2 className="font-secondary text-2xl md:text-3xl font-bold text-black mb-6">Solution Crafting</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
          After understanding all the constrains, i combined all the pieces together and try to solve and refrain the things. lauren has rough wireframes of what they need. which helped to build on it.
          </p>
          <div className="font-secondary text-[#BFBFBF] text-sm mb-2">raw wireframes from canva</div>

          <div className="max-w-4xl mx-auto my-4 p-8 rounded-[20px] border border-[#6ABF8B] ">
          <img src={screens} className="w-full h-auto" alt="" />
        </div>
        </div>
      </section> */}


      <section className="case-study-section py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="font-secondary text-black text-sm mb-2">4. The Solution</div>
          <h2 className="font-secondary text-2xl md:text-3xl font-bold text-black mb-6">Opportunities</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
          One of the first issues I noticed was the home screen navigation. In the initial design, each button pushed users forward into multiple branches of new screens. This created a confusing, inconsistent flow and required extra steps to access core features.</p>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white max-sm:p-0 pr-4 pt-10  flex border-b-4 border-black">
              <span className="text-black flex font-secondary max-sm:text-lg text-2xl mr-2">1.</span>
              <div className="font-secondary max-sm:text-lg text-2xl pb-6 max-sm:pb-1 font-semibold text-gray-900">Design weekly insights into recovery trends</div>
            </div>
            <div className="bg-white max-sm:p-0 px-4 pt-10 flex text-[#E5E5E5] border-b-4 border-[#E5E5E5]">
              <span className="flex font-secondary max-sm:text-lg text-2xl mr-2">2.</span>
              <div className="font-secondary max-sm:text-lg text-2xl pb-6  max-sm:pb-1 font-semibold">Simplify daily symptom tracking</div>
            </div>
            <div className="bg-white max-sm:p-0 px-4 pt-10 flex text-[#E5E5E5] border-b-4 border-[#E5E5E5]">
              <span className="flex font-secondary max-sm:text-lg text-2xl mr-2">3.</span>
              <div className="font-secondary max-sm:text-lg text-2xl pb-6 max-sm:pb-1  font-semibold">Annotated designs for developer implementation</div>
            </div>
          </div>

          <div className="flex gap-14 pt-[200px] max-w-4xl mx-auto max-sm:flex-col-reverse max-sm:pt-[100px] items-center justify-center">
            <div className="lg:w-4/7 my-4">
              <h2 className="font-secondary text-2xl md:text-6xl font-bold text-black mb-6">New weekly insights page</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
              The previous design forced users through multiple screens to view their weekly recovery trends. I consolidated these features on the home screen, allowing users to view progress and navigate easily without losing context. 
              </p>
            </div>
            <div className="lg:w-3/7 flex justify-center lg:justify-end">
              <img src={homescreen} className="w-3/4 h-auto object-cover" alt="" />
            </div>
          </div>

          <div className="flex gap-14 lg:pt-[200px] max-sm:pt-14 max-sm:gap-4 max-w-4xl mx-auto max-sm:flex-col items-center justify-center">
            <div className="lg:w-3/6 flex max-sm:justify-center">
              <img src={Symptom} className="w-5/6 h-auto object-cover" alt="" />
            </div>
            <div className="lg:w-3/6 my-4">
              <h2 className="font-secondary text-2xl font-bold text-black mb-6">Symptom Progress Card</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
              On the redesigned home screen, I introduced a Symptom Progress Card that provides a snapshot of the student’s recovery. The card compares last week’s symptoms with the current week, giving a clear sense of progress at a glance. From this card, users can either log new symptoms or dive deeper into detailed weekly progress charts.
              </p>
            </div>
          </div>

          <div className="flex gap-14 pt-[130px] max-sm:pt-14 max-sm:gap-4 max-w-4xl mx-auto max-sm:flex-col-reverse items-center justify-center">
            <div className="lg:w-3/6 my-4">
              <h2 className="font-secondary text-2xl font-bold text-black mb-6">Appointment and Accomodation Cards</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
              Originally, accommodations required multiple steps: tapping a button on the home screen, then choosing between “Doctor’s Appointment” or “Request Accommodation” on a separate page. To streamline this, I moved both options directly onto the home screen as individual cards. This way, students can request accommodations or book an appointment without extra navigation.
              </p>
            </div>
            <div className="lg:w-3/6 flex justify-end max-sm:justify-center">
              <img src={accomodation} className="w-5/6 h-auto object-cover" alt="" />
            </div>
          </div>

          <div className="flex gap-14 pt-[130px] max-sm:pt-14 max-sm:gap-4 max-w-4xl mx-auto max-sm:flex-col items-center justify-center">
            <div className="lg:w-3/6 flex max-sm:justify-center">
              <img src={faq} className="w-5/6 h-auto object-cover" alt="" />
            </div>
            <div className="lg:w-3/6 my-4">
              <h2 className="font-secondary text-2xl font-bold text-black mb-6">Articles, FAQs, and Community Support</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
              In the earlier design, articles and FAQs were buried under a single button that led to yet another menu. I simplified this by placing them as separate cards on the home screen. This reduces unnecessary clicks and makes support resources easier to find when students need them.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 pt-[150px] md:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white max-sm:p-0 pr-4 pt-10  flex border-b-4 border-[#E5E5E5]">
              <span className="text-[#E5E5E5] flex font-secondary max-sm:text-lg text-2xl mr-2">1.</span>
              <div className="font-secondary max-sm:text-lg text-2xl pb-6 max-sm:pb-1 font-semibold text-[#E5E5E5]">Design weekly insights into recovery trends</div>
            </div>
            <div className="bg-white max-sm:p-0 px-4 pt-10 flex text-black border-b-4 border-black">
              <span className="flex font-secondary max-sm:text-lg text-2xl mr-2">2.</span>
              <div className="font-secondary max-sm:text-lg text-2xl pb-6  max-sm:pb-1 font-semibold">Simplify daily symptom tracking</div>
            </div>
            <div className="bg-white max-sm:p-0 px-4 pt-10 flex text-[#E5E5E5] border-b-4 border-[#E5E5E5]">
              <span className="flex font-secondary max-sm:text-lg text-2xl mr-2">3.</span>
              <div className="font-secondary max-sm:text-lg text-2xl pb-6 max-sm:pb-1  font-semibold">Annotated designs for developer implementation</div>
            </div>
          </div>

          <div className="flex gap-14 pt-[200px] max-w-4xl mx-auto max-sm:flex-col-reverse items-center justify-center max-sm:pt-[100px]">
            <div className="lg:w-4/7 my-4">
              <h2 className="font-secondary text-2xl md:text-6xl font-bold text-black mb-6">Simplified daily symptom tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
              The original symptom tracking flow was functional but overwhelming. For user recovering from concussions, even small amounts of screen glare or clutter can feel exhausting. My goal was to design a low-stimulation, easy-to-scan interface that encouraged consistent logging without adding cognitive strain.
              </p>
              </div>
            <div className="lg:w-3/7 flex justify-center lg:justify-end">
              <img src={trackingscreen} className="w-3/4 h-auto object-cover" alt="" />
            </div>
          </div>

          <div className="flex pt-[130px] max-sm:pt-10 max-w-4xl mx-auto flex-col">
            <h2 className="font-secondary text-md md:text-xl font-bold text-black mb-6">Different Iterations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
            The design went through several iterations before reaching the final version. With feedback from the PM and team, I refined details such as input layout, color contrast, and iconography to balance clarity, accessibility, and efficiency. Each iteration moved the design closer to a system that user could use daily without fatigue.
             </p>
             <p className="text-gray-700 leading-relaxed mb-10">
             The final version presented a streamlined form where user could log symptoms quickly, see their progress immediately, and feel confident that their inputs were recorded accurately.
            </p>

            <div className="flex w-auto gap-x-4 max-sm:flex-col max-sm:items-center max-sm:gap-y-10">

              <div className='w-1/5 max-sm:w-3/5 flex flex-col'>
                <h2 className="font-secondary text-[#BFBFBF] text-sm mb-2 max-sm:text-center">old wireframe</h2>
                <img src={clientframe} className="w-auto h-auto object-cover" alt="" />
              </div>

              <div className='w-3/5 flex flex-col items-center'>
                <h2 className="font-secondary text-[#BFBFBF] text-sm mb-2">mid-fidelity iterations</h2>
                <div className='flex max-sm:flex-col gap-x-2 max-sm:gap-y-4'>
                  <img src={iteration1} className="flex-1 w-1/3 max-sm:w-full h-auto object-cover grayscale" alt="" />
                  <img src={iteration2} className="flex-1 w-1/3 max-sm:w-full h-auto object-cover grayscale" alt="" />
                  <img src={iteration3} className="flex-1 w-1/3 max-sm:w-full h-auto object-cover grayscale" alt="" />
                </div>
              </div>

              <div className='w-1/5 max-sm:w-3/5 ml-4 flex flex-col'>
                <h2 className="font-secondary text-[#BFBFBF] text-sm mb-2 max-sm:text-center">final Version</h2>
                <img src={iteration4} className="w-auto h-auto object-cover" alt="" />
              </div>

            </div>

            <div className="grid grid-cols-1 pt-[150px] md:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white max-sm:p-0 pr-4 pt-10  flex border-b-4 border-[#E5E5E5]">
              <span className="text-[#E5E5E5] flex font-secondary max-sm:text-lg text-2xl mr-2">1.</span>
              <div className="font-secondary max-sm:text-lg text-2xl pb-6 max-sm:pb-1 font-semibold text-[#E5E5E5]">Design weekly insights into recovery trends</div>
            </div>
            <div className="bg-white max-sm:p-0 px-4 pt-10 flex border-b-4 border-[#E5E5E5]">
              <span className="text-[#E5E5E5] flex font-secondary max-sm:text-lg text-2xl mr-2">2.</span>
              <div className="font-secondary max-sm:text-lg text-2xl pb-6  max-sm:pb-1 font-semibold text-[#E5E5E5]">Simplify daily symptom tracking</div>
            </div>
            <div className="bg-white max-sm:p-0 px-4 pt-10 flex text-black border-b-4 border-black">
              <span className="flex font-secondary max-sm:text-lg text-2xl mr-2">3.</span>
              <div className="font-secondary max-sm:text-lg text-2xl pb-6 max-sm:pb-1  font-semibold">Annotated designs for developer implementation</div>
            </div>
          </div>

          <div className="flex lg:gap-20 pt-[200px] max-w-4xl mx-auto max-sm:flex-col-reverse items-center justify-center max-sm:pt-[100px] max-sm:gap-10">
            <div className="lg:w-4/7 my-4">
              <h2 className="font-secondary text-2xl md:text-6xl font-bold text-black mb-6">Annotated designs</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
              One of my responsibilities was to make sure the developers could build the MVP smoothly without second-guessing design details. To do this, I created annotated designs that explained layout rules, interactions, and edge cases directly in Figma.
              </p>
              </div>
            <div className="lg:w-3/7 flex justify-end">
              <img src={annoted} className="w-full h-auto object-cover" alt="" />
            </div>
          </div>
          </div>

          <div className='flex flex-col pt-[150px]'>
            <h2 className="font-secondary text-2xl md:text-3xl font-bold text-black mb-6">Other Highlights</h2>
            
            <div className='flex justify-between lg:gap-20 max-md:flex-col'>

            <div className="flex flex-col pt-10 max-sm:pt-4 mx-auto max-sm:flex-col-reverse items-center justify-center">
              <div className="">
                <img src={trends} className="w-full h-auto object-cover" alt="" />
              </div>
              <div className="flex flex-col">
                <h2 className="font-secondary text-md md:text-xl font-bold text-black mt-4 mb-6">Weekly symptom trends</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                Shows trends by combining Total number of symptoms logged, Symptom severity score, Trend visualization data points as students can easily see if their condition is improving, while caregivers and staff get a quick snapshot of progress to guide support decisions.
                </p>
              </div>
            </div>

            <div className="flex flex-col pt-10 mx-auto max-sm:flex-col-reverse items-center justify-center">
              <div className="">
                <img src={archive} className="w-full h-auto object-cover" alt="" />
              </div>
              <div className="flex flex-col">
                <h2 className="font-secondary text-md md:text-xl font-bold text-black mt-4 mb-6">Symptom entry archive</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                The Progress Archive allows students to view their entire symptom history in one place. Instead of relying only on weekly snapshots, users can scroll back through past entries to identify long-term patterns or share comprehensive data with caregivers and school staff.
                </p>
              </div>
            </div>
            </div>

            

          </div>

        </div>
      </section>

      <section className="case-study-section py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="font-secondary text-[#BFBFBF] text-sm mb-2">Learnings</div>
          <h2 className="font-secondary text-2xl md:text-3xl font-bold text-black mb-6">Learnings</h2>
          <p className="text-gray-700 leading-relaxed mb-10">
          Working on Head First gave me the opportunity to take a set of rough research insights and wireframes and turn them into a developer-ready MVP. As the sole designer, I had to balance usability, accessibility, and feasibility under tight timelines. Key learnings from this project include:
          </p>

          <div className='pb-4'>
            <h2 className="font-secondary text-md md:text-xl font-bold text-black mb-4">#1 Accessibility Means Designing with Empathy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
            Simplifying daily symptom tracking taught me how to look beyond aesthetics and design for real cognitive challenges. Students recovering from concussions often face fatigue, glare sensitivity, and difficulty with complex interfaces. I learned that creating a low-stimulation, easy-to-scan UI required restraint in color usage, clear hierarchy, and minimal interactions — design decisions that directly support user well-being.
            </p>  
          </div>

          <div className='pb-4'>
            <h2 className="font-secondary text-md md:text-xl font-bold text-black mb-4">#2 Feasibility Shapes Better Design Decisions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
            Working within the constraints of Supabase and Next.js showed me that good design isn’t just about what looks or feels ideal, but about what can realistically be built and maintained. By aligning my designs with the technical stack early on and annotating developer handoff files, I reduced rework later and strengthened trust with engineers.
            </p>  
          </div>

          <div className='pb-4'>
            <h2 className="font-secondary text-md md:text-xl font-bold text-black mb-4">#3 Iteration Builds Usability and Alignment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
            I went through multiple design iterations, refining layouts and flows based on feedback from the PM and developer team. This taught me that iteration is not just about improving usability for end users, but also about building alignment within the product team. Each round of refinement made the product stronger and the team more confident in moving forward.
            </p>  
          </div>

          <div className='pb-4'>
            <h2 className="font-secondary text-md md:text-xl font-bold text-black mb-4">#4 Systems Thinking Creates Cohesion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
            The MVP included three major features - symptom tracking, weekly progress, and accommodations. Initially, these felt like separate tools. Through consistent use of components, patterns, and hierarchy, I learned how to create a unified experience that felt seamless to students. This reinforced the value of design systems in making products scalable and cohesive.
            </p>  
          </div>
            
        </div>
      </section>

      <ContactUs />
    </div>
  );
};

export default HeadFirstCaseStudy; 