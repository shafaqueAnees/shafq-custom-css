"use client";

import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer style={{ background: "#111827", color: "white", }}>
        <div className="foot">
          <ul>
            <li className="animate">
              <Link
                    target="_blank"
                href={
                  "https://www.linkedin.com/in/shafaq-%D8%B2%D9%88%D8%AC%DB%81-%D8%B2%D9%88%DB%81%DB%8C%D8%A8-%D8%B5%D8%AF%DB%8C%D9%82%DB%8C-65490011b/"
                }
              >
                {/* <FaLinkedin /> */}
              </Link>
            </li>

            <li className="animate"> 
              <Link
                
                target="_blank"
                href={
                  "https://github.com/shafaqueAnees"
                }
              >
                {/* <FaGithub /> */}
              </Link>
            </li>

            <li className="animate">
              <Link
                target="_blank"
                href={
                  "https://www.facebook.com/jullet.shaikh"
                }
              >
                {/* <FaSquareFacebook /> */}
              </Link>
            </li>

            <li className="animate">
              <Link       
                target="_blank"
                href={
                  "mailto: shafqaness@gmail.com"
                }
              >
                {/* <MdEmail /> */}
              </Link>
            </li>
          </ul>
        </div>

        <p id="copyright">
          Copyright &copy; 2024 Designed by ShafaqueAnees (GIAIC-2024) All right Reserved
        </p>
      </footer>
    </div>
  );
}
