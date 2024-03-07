import React from 'react'

export default function Sidebar() {
    return (
        <>

            <div className="offcanvas offcanvas-start shadow-lg   bg-body-success rounded " data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title ps-3" id="offcanvasWithBothOptionsLabel">Menu Bar</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body ">
                    <ul className="nav flex-column ">
                        <a href="/" className="nav-link  border-bottom  text-dark justify-content-start "> <i class="fa-solid fa-house"></i> &nbsp;Home </a>
                        <a href="/" className="nav-link border-bottom text-dark justify-content-start "><i class="fa-solid fa-border-all"></i> &nbsp;Dashboard</a>
                        <a href="/" className="nav-link border-bottom text-dark justify-content-start "><i class="fa-solid fa-money-check"></i> &nbsp; Account Section</a>
                        <a href="/" className="nav-link border-bottom text-dark justify-content-start "><i class="fa-solid fa-cart-shopping"></i> &nbsp;Payment Method</a>
                        <a href="/" className="nav-link border-bottom text-dark justify-content-start "> <i class="fa-solid fa-chalkboard-user"></i> &nbsp; Print Challan</a>
                    </ul>
                </div>
                <div className="offcanvas-footer ps-3">
                    <ul className='nav flex-column '>
                        <li className="nav-item"><a href="/" className="nav-link text-dark border-bottom"><i class="fa-solid fa-gear"></i> &nbsp; Setting</a></li>
                        <li className="nav-item"><a href="/" className="nav-link text-dark"><i class="fa-solid fa-right-from-bracket"></i> &nbsp; Logout</a></li>
                        <li className="nav-item"><a href="/" className="nav-link text-dark"><i class="fa-solid fa-arrow-right-to-bracket"></i> &nbsp; Log In</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
