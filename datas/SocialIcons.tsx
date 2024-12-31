import React from "react";
import { socialLinks } from "../datas/data";

export const SocialIcons = () => (
  <div className="flex space-x-4">
    {socialLinks.map(({ name, link, Icon }) => (
      <a
        key={name}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80"
      >
        {Icon && <Icon className="text-2xl" />} {/* Render Icon */}
      </a>
    ))}
  </div>
);
