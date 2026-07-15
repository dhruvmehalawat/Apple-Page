import {footerLinks} from '../constants/index';
const Footer = () => {
  return (
    <footer>
        <div className="info">
            <p>More ways to shop: <span>Find an Apple Store</span> or <span>other retailers</span> near you. Or call 000800 040 1966.</p>
            <img src="/logo.svg" alt="Apple Logo" />
        </div>
        <hr />
        <div className="info">
            <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
        <div className="links">
            <ul>
                {footerLinks.map((link) => (
                    <li key={link.label}><a href={link.link}>{link.label}</a></li>
                ))}
            </ul>
        </div>
        </div>
    </footer>
  );
};

export default Footer;