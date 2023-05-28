import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <span>
                    <strong>Max.Detailing</strong>
                    <p style={{color: "gray"}}>© 2023–2023 «Maaax1k» </p>
                </span>
                <span className="socials">
                    <a href="https://www.whatsapp.com/" className="wpp"></a>
                    <a href="https://www.vk.com/" className="vk"></a>
                    <a href="https://www.instagram.com/" className="inst"></a>
                </span>
            </div>
        </div>
    );
};

export default Footer;