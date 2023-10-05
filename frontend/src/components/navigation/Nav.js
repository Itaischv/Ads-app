import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const Nav = () => {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/one">
                            <Button variant="contained">
                                Page One
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/two">
                            <Button variant="contained">
                                Page Two
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/three">
                            <Button variant="contained">
                                Page Three
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/four">
                            <Button variant="contained">
                                Page Four
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/db_results">
                            <Button variant="contained">
                                DB events
                            </Button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}


export default Nav;