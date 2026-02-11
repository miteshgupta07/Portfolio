import { technologies } from "@/datas/data";

const Skill = () => {
  return (
    <section
      className="flex flex-col pt-20 lg:pt-32 mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%]"
      id="skills"
      data-aos="fade-up"
    >
<header className="flex items-center justify-center gap-4 font-bold">
  <div className="w-10 sm:w-64 border-b border-[#ffd700]"></div>

  <span className="text-lg sm:text-2xl font-idgrotesk whitespace-nowrap">
    Skills & Tech Stack
  </span>

  <div className="w-10 sm:w-64 border-b border-[#ffd700]"></div>
</header>



      <div className="py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-[#262626] dark:bg-[#1a1a1a] rounded-lg p-6 
                         shadow-lg hover:shadow-2xl hover:shadow-secondary-color-3/20 
                         transition-all duration-300 ease-in-out
                         hover:-translate-y-2 hover:scale-105
                         border border-transparent hover:border-secondary-color-3/50
                         flex flex-col items-center justify-center gap-4
                         cursor-pointer backdrop-blur-sm"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-secondary-color-3/0 to-secondary-color-3/0 
                            group-hover:from-secondary-color-3/10 group-hover:to-secondary-color-3/5 
                            transition-all duration-300 pointer-events-none"></div>
              
              {/* Icon */}
              <div className="relative z-10 filter grayscale group-hover:grayscale-0 
                            dark:filter dark:brightness-50 dark:invert 
                            group-hover:dark:brightness-100 group-hover:dark:invert-0
                            transition-all duration-300">
                <img
                  src={tech.iconLink}
                  alt={tech.name}
                  height={50}
                  width={50}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                />
              </div>
              
              {/* Name */}
              <span className="relative z-10 font-idgrotesk text-white dark:text-white 
                             text-sm sm:text-base font-medium text-center
                             group-hover:text-secondary-color-3 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
