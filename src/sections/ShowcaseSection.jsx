import { useRef } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [project1Ref.current, project3Ref.current, project2Ref.current];
    projects.forEach((project, index) => {
    gsap.fromTo(
      project,
      {
        y: 50, opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3 * (index + 1),
        scrollTrigger: {
          trigger: project,
          start: 'top bottom-=100'
        } 
      }
    )
  })
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5}
    )
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
        {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde"/>
            </div>
            <div className="text-content">
              <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App Called Ryde</h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.
              </p>
            </div>
          </div>

          {/*RIGHT*/}
          <div className="project-list-wrapper overflow-hidden">
          <div className="project" ref={project2Ref}>
            {/* Link to movie database */}
            <a href="https://movie.zuhaahmed.com" target="_blank" rel="noopener noreferrer">
            <div className="image-wrapper bg-[#ffefdb]">
              <img src="/images/project4.png" alt="Movie Database Platform" />
            </div>
            <h2> Movie Database Platform</h2>
            </a>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="techstack">React</span>
              <span className="techstack">Next.JS</span>
              <span className="techstack">FastAPI</span>
              <span className="techstack">TailwindCSS</span>
            </div>      
          </div>
          <div className="project" ref={project3Ref}>
            <div className="image-wrapper bg-[#ffe7eb]">
              <img src="/images/project3.png" alt="YC Directory" />
            </div>
            <h2> YC Directory - A Startup Showcase App </h2>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="techstack">React</span>
              <span className="techstack">Next.JS</span>
              <span className="techstack">SEO</span>
              <span className="techstack">TailwindCSS</span>
            </div>
          </div>
         </div>          
       </div>
     </div>
   </section>
  )
}

export default ShowcaseSection