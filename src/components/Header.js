
const Header = ({ onclick }) => {

    return(
            <header>
                <p>Header</p>
                <div id="header-slot" onClick={(e) => onclick(e)}></div>
            </header>

    )
};

export default Header;