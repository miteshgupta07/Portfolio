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
          About Me
        </span>
        <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
      </div>
      <div className="flex flex-col  lg:flex-row w-full py-10  gap-10">
        <div className="w-full lg:w-[50%] flex flex-col gap-2 order-2 lg:order-1">
          <h1 className="font-bold text-2xl">Core AI & Engineering Skills</h1>
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
          <article className="text-justify">
            I am an AI Engineer with one year of hands-on industry experience, 
            building and deploying real-world AI systems in production environments. 
            I have worked on multiple projects within a professional setting, 
            contributing to end-to-end machine learning and generative AI solutions.
            <br />
            <br />
            My work spans generative AI, machine learning, deep learning, natural 
            language processing, and computer vision, with a strong focus on solving 
            practical business problems. I have experience taking models from 
            experimentation to deployment, working closely with data, APIs, and scalable systems.
            <br />
            <br />
            I enjoy working on complex problems, building reliable AI solutions, and 
            continuously improving systems based on real usage and feedback.
          </article>
        </div>
      </div>
    </section>
  );
};
export default About;
