import { projects } from "@/data"
import { PinContainer } from "./ui/3dPin"

const RecentProjects = () => {
  return (
    <div>
        <h1 className="heading my-10">
            A small selection of {'  '}
            <span className="text-purple"> recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map(({id, title, des, img, iconLists, link}) => (
            <div
             key={id}
             className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
              <PinContainer 
              title={link} 
              href={link}
              className="sm:w-[600px] max-w-[398px] h-[398px] sm:rounded-[23px] rounded-[12px] border-1 border-white bg-gradient-to-r from-[#04071D] to-[#0C0E23] mb-5">
                <div className="relative flex flex-col  items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[50vh]">
                  <img src={img} alt={title} className="w-full h-4/5 object-cover object-center rounded-lg" />
                  <h2 className="text-white text-lg font-bold mt-4">{title}</h2>
                  <p>{des}</p>
                  <div className="flex justify-between items-center mt-7 mb-3">
                      <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div 
                          key={index}
                          className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`
                          }}
                        >
                          <img src={icon} alt={icon} className="w-6 h-6 mx-2" />
                        </div>
                        ))}
                      </div>
                    <div>
                      <h1 className="text-purple"><a href={link}>Check live site</a></h1>
                    </div>
                </div>
                </div>
              </PinContainer>
          
        </div>
        ))}
    </div>
    </div>
    )
  }
    
export default RecentProjects  