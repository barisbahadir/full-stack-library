import React from "react";

export const Navbar = () => {
    const menuItems = [
        {
            name: "Home",
            url: "#",
            isAdminPage: false
        },
        {
            name: "Search Books",
            url: "#search",
            isAdminPage: false
        },
        {
            name: "Search Books",
            url: "#books",
            isAdminPage: false
        }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
            <div className="container-fluid">
            <span className="navbar-brand">
                Library Application
            </span>
                <button
                    className="navbar-toggler"
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown'
                    aria-expanded='false'
                    aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        {
                            menuItems.map((item, index) => {
                                return <li key={index} className='nav-item'>
                                    <a className='nav-link' href={item.url}> {item.name} </a>
                                </li>
                            })
                        }
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item m-1'>
                            <a type='button' className='btn btn-outline-light' href='#'> Login / Logout </a>
                        </li>
                    </ul>

                </div>

            </div>

        </nav>
    );
}