const Footer = ({ onclick }) => {
    console.log("footer")

    return(
        <footer>
            <p>Footer</p>
            <div id="footer-slot"
                 onClick={(e) => onclick(e)}
                 style={{width: '728px', height: '90px'}}></div>
        </footer>

    )
};

export default Footer;