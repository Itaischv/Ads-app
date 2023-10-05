const NavItem = ({url, linkName}) => {
    return(
        <li>
            <a href={url}>{linkName}</a>
        </li>
    )
}

export default NavItem;