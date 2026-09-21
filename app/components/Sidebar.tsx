import { socialLinks } from "@/datas/data";
import Link from "next/link";

const Sidebar = () => {
  return (
    <section
      className="fixed top-24 bottom-0 left-0 z-10 hidden w-[10%] md:block"
      data-aos="fade-right"
    >
      <nav
        className="social-sidebar h-full w-full overflow-y-auto overflow-x-hidden py-8 [scrollbar-width:thin] [scrollbar-color:#FFD700_transparent]"
        aria-label="Social links"
      >
        <ul className="flex min-h-full flex-col items-center justify-center gap-10">
          {socialLinks.map((socialLink) => (
            <li
              key={socialLink.name}
              className="relative flex cursor-pointer items-center gap-5"
            >
              <Link
                href={socialLink.link}
                target="_blank"
                rel="noopener noreferrer"
                title={socialLink.name}
              >
                <img
                  src={socialLink.simpleIcon}
                  alt={socialLink.name}
                  height={35}
                  width={35}
                  className="transition-all duration-300 ease-out hover:scale-125 hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(248,209,1,0.6)]"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
