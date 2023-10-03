const Footer = ({ onclick }) => {
    return(
        <aside>
            <p>Sidebar</p>
            <div id="sidebar-slot"
                 onClick={(e) => onclick(e)}
                 style={{width: '300px', height: '250px'}}></div>
        </aside>

    )
};

export default Footer;