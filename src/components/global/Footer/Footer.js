import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"; // import the icons you need

const Footer = () => {
    return (
        <footer id="Footer">
        <hr style={{height:'1px', color:'#ccc', backgroundColor: '#ccc'}} />
        <div className="container px-5 mt-5">
            <div className="row">
                <div className="col-6 col-md-3 col-lg-3">
                    <h6>JOIN US</h6>
                    <nav className="nav flex-column my-3">
                        <a className="link" href="https://www.codepolitan.com/cara-belajar">Cara Belajar</a>
                        <a className="link" href="https://www.codepolitan.com/tnc">Terms & Conditions</a>
                        <a className="link" href="https://www.codepolitan.com/faq">Frequently Asked Questions</a>
                        <a className="link" href="https://www.codepolitan.com/privacy-policy">Privacy Policy</a>
                    </nav>
                </div>
                <div className="col-6 col-md-3 col-lg-3">
                    <h6>PROGRAM</h6>
                    <nav className="nav flex-column my-3">
                        <a className="link" href="https://devschool.id/">Developer School</a>
                        <a className="link" href="https://kampuscoding.id/">Kampus Coding</a>
                        <a className="link" href="https://geekmentor.id/">Online Mentoring</a>
                    </nav>
                </div>
                <div className="col-6 col-md-3 col-lg-3">
                    <h6>DEVELOPERS</h6>
                    <nav className="nav flex-column my-3">
                        <a className="link" href="https://www.codepolitan.com/forum">Forum Discussions</a>
                        <a className="link" href="https://www.codepolitan.com/credit-to-bug-reporter">Hall of Fame</a>
                        <a className="link" href="https://www.codepolitan.com/leaderboard">Leaderboard</a>
                    </nav>
                </div>
                <div className="col-6 col-md-3 col-lg-3">
                    <h6>COMPANY</h6>
                    <nav className="nav flex-column my-3">
                        <a className="link" href="https://www.codepolitan.com/about">About Codepolitan</a>
                        <a className="link" href="https://www.codepolitan.com/articles">Blog</a>
                    </nav>
                </div>
            </div>
        </div>
        <hr style={{height:'1px', color:'#ccc', backgroundColor: '#ccc'}} />
        <div className="container px-5">
            <div className="row">
                <div className="col-md-6 text-center text-md-start">
                    <p><small>&copy; 2018 CodePolitan. All rights reserved</small></p>
                </div>
                <div className="col-md-6 text-center text-md-end mb-2">
                    <a className="footer-socmed-link" title="Facebook" href="https://www.facebook.com/codepolitan/">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className="footer-socmed-link" title="Instagram" href="https://www.instagram.com/codepolitan/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a className="footer-socmed-link" title="Twitter" href="https://twitter.com/codepolitan">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="footer-socmed-link" title="Linkedin" href="https://www.linkedin.com/company/codepolitan">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className="footer-socmed-link" title="Youtube" href="https://www.youtube.com/c/codepolitan">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
