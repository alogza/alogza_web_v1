import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import LinkWithLoading from "./LinkWithLoading";

interface FooterContent {
  sections: {
    homepage: string;
    services: string;
    projects: string;
    company: string;
  };
  links: {
    home: string;
    mobileApp: string;
    modernWeb: string;
    aiApps: string;
    gameDev: string;
    itConsultancy: string;
    uxUiDesign: string;
    aiProjects: string;
    webProjects: string;
    appProjects: string;
    gameProjects: string;
    aboutUs: string;
    contactUs: string;
  };
  contact: {
    email: string;
    phone: string;
  };
}

export default function Footer({ footerContent }: { footerContent: FooterContent }) {
  const footerLinks = [
    {
      title: footerContent.sections.homepage,
      links: [{ name: footerContent.links.home, href: "/" }],
    },
    {
      title: footerContent.sections.services,
      links: [
        { name: footerContent.links.mobileApp, href: "/services/mobileapp" },
        { name: footerContent.links.modernWeb, href: "/services/website" },
        { name: footerContent.links.aiApps, href: "/services/ai" },
        { name: footerContent.links.gameDev, href: "/services/game" },
        {
          name: footerContent.links.itConsultancy,
          href: "/services/itconsultancy",
        },
        { name: footerContent.links.uxUiDesign, href: "/services/design" },
      ],
    },
    {
      title: footerContent.sections.projects,
      links: [
        {
          name: footerContent.links.aiProjects,
          href: "/projects?categories=ai",
        },
        {
          name: footerContent.links.webProjects,
          href: "/projects?categories=web-app",
        },
        {
          name: footerContent.links.appProjects,
          href: "/projects?categories=web-app",
        },
        {
          name: footerContent.links.gameProjects,
          href: "/projects?categories=game-dev",
        },
      ],
    },
    {
      title: footerContent.sections.company,
      links: [
        { name: footerContent.links.aboutUs, href: "/aboutus" },
        { name: footerContent.links.contactUs, href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/alogza.official/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/alogza.official",
    },
    {
      name: "X",
      icon: Twitter,
      href: "https://x.com/alogza_official/",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/@alogza.official/",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/alogza.official",
    },
  ];

  return (
    <footer className="w-full bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between space-y-8 md:flex-row md:space-y-0">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <LinkWithLoading href="/" className="inline-block">
              <Image
                src="/labels/logo_white.png"
                alt="ALOGZA"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </LinkWithLoading>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {footerLinks.map((column) => (
              <div key={column.title} className="flex flex-col space-y-4">
                <h3 className="font-medium text-white">{column.title}</h3>
                <ul className="mt-2 space-y-4">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <LinkWithLoading
                        href={link.href}
                        className="text-sm text-gray-400 transition hover:text-white"
                      >
                        {link.name}
                      </LinkWithLoading>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4 text-sm text-gray-400">
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="transition hover:text-white"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <div>
              <p>
                <span
                  dangerouslySetInnerHTML={{
                    __html: footerContent.contact.email,
                  }}
                />
              </p>
              <p>
                <span
                  dangerouslySetInnerHTML={{
                    __html: footerContent.contact.phone,
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
