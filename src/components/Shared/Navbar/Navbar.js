import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link me-5" aria-current="page" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#services">Dental services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#review">Review</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#blogs">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#contact">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="/dashboard">Dashboard</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;