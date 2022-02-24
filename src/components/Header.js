import {FaGithub, FaDiscord, FaLinkedin} from "react-icons/fa"

const Header = () => {
    return (
        
      <header className="header">
        <a className="logo" href=""><h1>Mike Ding</h1></a>

        
        <div className="media_links">
						
            <div className="link"><a href='https://github.com/MichaelDingwall'><FaGithub color="white"/></a></div>
            <div className="link"><a href="https://discordapp.com/users/TFTMichaelD#9920/"><FaDiscord color="white"/> </a></div>
            <div className="link"><a href="https://www.linkedin.com/in/michaeljamesdingwall"><FaLinkedin color="white"/></a></div>

						
					</div>
        
        <a href="/MD_CV_Resume.pdf" download><button className="resume">Resume</button></a>
      </header>
    )
}

export default Header
  