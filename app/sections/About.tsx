const About = () => {
  return (
    <>
      <section
        className="flex flex-col pt-28 lg:pt-48 mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%]"
        id="about"
        data-aos="fade-up"
      >
        <div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-bold">
          <div className="w-[5%%] lg:hidden lg:w-36 border-b-[1px] border-b-[#ffd700]"></div>
          <span className=" font-bold text-lg sm:text-2xl font-idgrotesk">
            About Me
          </span>
          <div className="w-[5%] lg:w-36 border-b-[1px] border-b-[#ffd700]"></div>
        </div>
        <div className="flex flex-col lg:flex-row w-full py-10 gap-10">
          <div className="w-full">
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
    </>
  );
};
export default About;
