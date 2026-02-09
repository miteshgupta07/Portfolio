import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between mx-0 my-24 items-center pt-20 lg:pt-24 bg-center xl:mx-[10%] lg:mx-[7%] md:mx-[7%] ">
      <section
        className=" w-full  xl:w-[70%] relative pb-10   flex flex-col gap-4 lg:w-[70%]"
        data-aos="fade-right"
      >
        <div className="flex flex-col gap-2">
          <span className=" font-medium text-lg">Hi, I'm ✋</span>
          <h1 className=" font-bold  text-6xl md:text-7xl font-grotesk">
            Mitesh Gupta
          </h1>
        </div>
        <div className="relative">
          <Badge
          variant={"secondary"}
          className="font-grotesk text-bases sm:text-xl hover:!bg-[#FFD700] hover:!text-[#121212]"
            >
          AI Engineer
        </Badge>
          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
            I build and deploy end-to-end intelligent AI systems that solve real-world problems using machine learning and generative AI.
          </p>
        </div>
        <Button asChild variant={"outline"}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"mailto:miteshgupta2711@gmail.com"}
            className="flex items-center border-[#FFD700] dark:border-[#FFD700] justify-center gap-3 px-10 py-6  font-bold w-max dark:hover:bg-[#FFD700] border-[4px]  mt-5 "
          >
            Get in Touch
            <Image
              alt="message"
              src={"/svgs/message-programming.svg"}
              width={25}
              height={25}
            />{" "}
          </Link>
        </Button>
      </section>
      <section
        className=" w-full justify-center md:justify-center relative flex lg:justify-end items-center xl:w-[30%] h-[25rem] bg-center lg:bg-right bg-contain bg-no-repeat lg:w-[30%]"
        style={{ backgroundImage: "url('svgs/profile-bg.png')" }}
        data-aos="zoom-in"
      >
        <div className="relative h-[18rem] w-[18rem] lg:h-[17rem] lg:w-[17rem]">
        </div>
      </section>
    </header>
  );
};
export default Header;
