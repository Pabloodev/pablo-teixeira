import {
  Github,
  Disc as Discord,
  Twitter,
  Linkedin,
  Globe2,
  Send,
  Timer,
  Facebook,
  Instagram,
} from "lucide-react";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
              © {currentYear} Pablo Teixeira. Todos direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
              pabloteixeira591@gmail.com
            </p>
          </div>

          <div className="flex space-x-4">
            <Link target="_blank" rel="noopener noreferrer"  href="https://github.com/Pabloodev" className="text-gray-400 hover:text-white">
              <Github className="w-5 h-5" />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pabloteixeiraimproving/" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
