import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai';

const Footer = () => {
  return (
      <footer>
          <div>
              <img src={"https://avatars.githubusercontent.com/u/119295596?v=4"} alt="Founder" />
              <h2>Maaviz Gorekar</h2>
              <p>I Don't Have Anything Common With You</p>
          </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://www.youtube.com/"><AiFillYoutube /></a>
          <a href="https://www.instagram.com/maaviz__fg"><AiFillInstagram /></a>
          <a href="https://github.com/Maaviz"><AiFillGithub /></a>
        </article>
          </aside>
          <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  );
}

export default Footer;
