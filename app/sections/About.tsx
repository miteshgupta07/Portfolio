import { technologies } from "@/datas/data";

const About = () => {
  return (
    <section
      className="flex flex-col pt-28 lg:pt-48 mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%]"
      id="about"
      data-aos="fade-up"
    >
      <div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-bold">
        <div className="w-[5%%] lg:hidden lg:w-36 border-b-[1px] border-b-border-color"></div>
        <span className=" font-bold text-lg sm:text-2xl font-idgrotesk">
          01. About Me
        </span>
        <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
      </div>
      <div className="flex flex-col  lg:flex-row w-full py-10  gap-10">
        <div className="w-full lg:w-[50%] flex flex-col gap-2 order-2 lg:order-1">
          <h4 className="font-bold ">Technologies i work with</h4>
          <div style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}>
            <ul className="px-8 py-8 flex flex-row  h-auto sm:flex-col gap-4 sm:h-80 lg:gap-2 lg:h-72  flex-wrap w-full font-idgrotesk">
              {technologies.map((tech) => (
                <li className="flex filter grayscale hover:grayscale-0  items-center cursor-pointer gap-5 transition-all duration-300 dark:filter dark:brightness-50 dark:invert hover:dark:brightness-100 hover:dark:invert-0">
                  <img
                    src={tech.iconLink}
                    alt={tech.name}
                    height={50}
                    width={50}
                    className=""
                  />
                  <span className="hidden sm:inline-block">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%] order-1 lg:order-2">
          <article>
            Hi, I am Mitesh Gupta, an experienced AI Developer and Data Scientist
            with a proven track record of delivering innovative solutions across more 
            than 25 projects. I specialize in building AI-driven applications that 
            transform complex data into impactful insights. My work spans natural 
            language processing, computer vision, and predictive analytics, enabling 
            organizations to leverage the power of artificial intelligence effectively.
            <br />
            <br />
            I have worked on numerous projects independently, focusing on areas such as 
            Generative AI, Data Science, and Automation. Passionate about continuous 
            learning, I stay updated on the latest technological advancements in AI and 
            machine learning, applying them to solve real-world challenges.
          </article>
        </div>
      </div>
    </section>
  );
};
export default About;
