import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <>
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
                <div className="container-fluid">
                    <a href="/" className='navbar-brand'>PRACTICE</a>
                    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#target">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="target">
                        <ul className='navbar-nav me-auto'>
                            <li className='nav-item'><Link to="/projects" className='nav-link'>Projects</Link></li>
                            <li className='nav-item'><Link to="/about" className='nav-link'>About</Link></li>

                            {/*  드롭다운 메뉴 */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">DropDown</a>
                                <ul className="dropdown-menu bg-dark">
                                    <li className="nav-item"> <Link to="/projects" className="nav-link">Projects</Link></li>
                                    <li className="nav-item"> <Link to="/about" className="nav-link">About</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;