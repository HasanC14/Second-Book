import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../../Image/book.png";
const Footer = () => {
  return (
    <div className="bg-base-300">
      <footer className="footer p-10  text-base-content max-w-screen-xl mx-auto">
        <div className="m-auto">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            <img src={logo} className="w-10" alt="" />
            <span className="font-black text-2xl mr-1">SECOND</span>
            Book
          </Link>
        </div>
        <div>
          <Link to={"/"} className="link link-hover">
            Home
          </Link>
          <Link to={"/Blog"} className="link link-hover">
            Blog
          </Link>
          <Link to={"/About"} className="link link-hover">
            About
          </Link>
          <Link to={"/Dashboard"} className="link link-hover">
            Dashboard
          </Link>
        </div>
        <div>
          <div>
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com/HasanCh38413037"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="text-3xl"></FaTwitter>
            </a>
            <a
              href="https://github.com/HasanC14"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-3xl"></FaGithub>
            </a>
            <a
              href="https://www.facebook.com/hasan.chowdhuryD/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-3xl"></FaFacebook>
            </a>
            <a
              href="https://www.linkedin.com/in/hasanchowdhuryd/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-3xl"></FaLinkedin>
            </a>
          </div>
        </div>
      </footer>
      <p className="footer-title text-center text-xs">
        Made by Hasan Chowdhury
      </p>
    </div>
  );
};

export default Footer;
