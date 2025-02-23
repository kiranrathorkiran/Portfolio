import { useRef, useState, useEffect } from "react";
import LinkedInImage from "../assets/linkedin.png";
import GitHubImage from "../assets/github.png";
import MailImage from "../assets/mail.png";
import ResumePDF from "../assets/Kiran.pdf";
import LeetCodeImage from "../assets/LeetCode.png";
import GeeksforGeeksImage from "../assets/gfg.png";

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-white dark:bg-black text-black dark:text-white py-20 transform transition-transform duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col items-center md:space-x-12">
          <div className="flex-1">
            <p className="text-lg mb-8 text-justify">
              I'm a passionate web developer who loves crafting interactive and
              user-friendly websites. With expertise in frontend and backend
              technologies, I turn ideas into reality using clean and efficient
              code. Let's build something amazing together!"
            </p>
            <p className="text-lg mb-8 text-justify">
              I specialize in building responsive, user-friendly websites and
              dynamic web applications using React, Next.js and more. With experience in both client-side and
              server-side development, I enjoy solving complex problems and
              creating seamless digital experiences. I'm also skilled in data
              structures and algorithms, which helps me write efficient and
              scalable code.
            </p>
            <div className="flex justify-center items-center space-x-6 my-8">
              <a
                href="https://www.linkedin.com/in/kiran-rathor-837890284/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img src={LinkedInImage} alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a
                href="https://github.com/kiranrathorkiran"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={GitHubImage}
                  alt="GitHub"
                  className="w-10 h-10 filter brightness-100 dark:brightness-100"
                />
              </a>
              <a
                href="mailto:kiranrathor8085@gmail.com"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img src={MailImage} alt="Email" className="w-10 h-10" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/kiranrat7ca8/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={GeeksforGeeksImage}
                  alt="GeeksforGeeks"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://leetcode.com/u/kiranrathor/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img src={LeetCodeImage} alt="LeetCode" className="w-10 h-10" />
              </a>
              <a
                href={ResumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
