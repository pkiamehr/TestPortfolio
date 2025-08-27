import { assets } from "@utils/assets";
import Image from "next/image";
import { useTheme } from "@providers/ThemeProvider";

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className=" mt-20">
      <div className=" text-center">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Website Logo" className=" w-36 mx-auto mb-2" />
        <div className=" w-max flex items-center gap-2 mx-auto ">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="mail icon" className=" w-6" />
          kiamehr.dev@gmail.com
        </div>
      </div>
      <div className=" text-center items-center justify-between border-t border-gray-400 mt-12 py-6 mx-[10%] sm:flex">
        <p>kiamehr.dev@gmail.com</p>
       <ul className=" flex items-center gap-6 justify-center mt-4 sm:mt-0">
  <li>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#"}
      aria-label="Instagram profile (opens in new tab)"
    >
      Instagram
    </a>
  </li>
  <li>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"}
      aria-label="LinkedIn profile (opens in new tab)"
    >
      LinkedIn
    </a>
  </li>
  <li>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
      aria-label="GitHub profile (opens in new tab)"
    >
      GitHub
    </a>
  </li>
  <li>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}` : "#"}
      aria-label="WhatsApp chat (opens in new tab)"
      aria-disabled={!process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
    >
      WhatsApp
    </a>
  </li>
</ul>
      </div>
    </div>
  );
};

export default Footer;
