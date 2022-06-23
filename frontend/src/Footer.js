import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export function Footer() {
    return <footer className="app-footer bg-dark text-white">
        <div className="container py-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-4 mb-md-0 mb-4">
                            <h5 className="footer-heading">Men</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="py-1 d-block">Jeans</a></li>
                                <li><a href="#" className="py-1 d-block">Jumpers</a></li>
                                <li><a href="#" className="py-1 d-block">Leather</a></li>
                                <li><a href="#" className="py-1 d-block">Shorts</a></li>
                                <li><a href="#" className="py-1 d-block">Boots</a></li>
                                <li><a href="#" className="py-1 d-block">Watches</a></li>
                            </ul>
                        </div>
                        <div className="col-4 mb-md-0 mb-4">
                            <h5 className="footer-heading">Women</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="py-1 d-block">Dresses</a></li>
                                <li><a href="#" className="py-1 d-block">Jumpsuits</a></li>
                                <li><a href="#" className="py-1 d-block">Shirts</a></li>
                                <li><a href="#" className="py-1 d-block">T-shirts</a></li>
                                <li><a href="#" className="py-1 d-block">Swearshirts</a></li>
                                <li><a href="#" className="py-1 d-block">Jackets</a></li>
                                <li><a href="#" className="py-1 d-block">Coats</a></li>
                            </ul>
                        </div>
                        <div className="col-4 mb-md-0 mb-4">
                            <h5 className="footer-heading">Kids</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="py-1 d-block">Shirts</a></li>
                                <li><a href="#" className="py-1 d-block">T-shirts</a></li>
                                <li><a href="#" className="py-1 d-block">Polos</a></li>
                                <li><a href="#" className="py-1 d-block">Sweaters</a></li>
                                <li><a href="#" className="py-1 d-block">Sweatshirts</a></li>
                                <li><a href="#" className="py-1 d-block">Jackets</a></li>
                                <li><a href="#" className="py-1 d-block">Watches</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row justify-content-end">
                        <div className="col-md-12 col-lg-11 mb-md-0 mb-4">
                            <h5 className="footer-heading">Follow Us</h5>
                            <div className="social p-0 fs-3 g-3 row">
                                <a href='#'>
                                    <i className={'bi bi-facebook'}/>
                                </a>

                                <a href='#'>
                                    <i className={'bi bi-instagram'}/>
                                </a>

                                <a href='#'>
                                    <i className={'bi bi-twitter'}/>
                                </a>

                                <a href='#'>
                                    <i className={'bi bi-telegram'}/>
                                </a>
                            </div>
                            {/*<h2 className="footer-heading mt-5">Subscribe Us</h2>
                            <form action="#" className="subscribe-form">
                                <div className="form-group d-flex">
                                    <input type="text" className="form-control rounded-left" placeholder="Enter email address"/>
                                    <input type="submit" value="Subscribe" className="form-control submit px-3 rounded-right"/>
                                </div>
                            </form>*/}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row justify-content-end">
                        <div className="col-md-12 col-lg-11 mb-md-0 mb-4">
                            <h5 className="footer-heading">About Us</h5>
                            <small className="text-secondary ">
                                We are a corporation for suply and sale about any type of clothing online or offline with different color and material around the world.
                            </small>
                            <h5 className="footer-heading mt-5">Contacts</h5>
                            <small className={'text-secondary'}>
                                <div><i className={'bi bi-house'}/> Worldwide, in any city </div>
                                <div><i className={'bi bi-envelope'}/> info@domain </div>
                                <div><i className={'bi bi-telephone'}/> +98 912 539 9677 </div>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 pt-4 border-top">
                <div className="col-12">
                    <p className="copyright text-secondary">
                        Copyright ©
                        <script>document.write(new Date().getFullYear());</script>
                        2022 All rights reserved | This website is made by <a
                        href="https://github.com/mehdi-salartayefeh" target="_blank">Mehdi Salartayefeh</a>
                    </p>
                </div>
                {/*<div className="col-md-6 col-lg-4 text-md-right">
                    <p className="mb-0 list-unstyled">
                        <a className="mr-md-3" href="#">Terms &amp; Conditions</a>
                        <a className="mr-md-3" href="#">Privacy</a>
                    </p>
                </div>*/}
            </div>
        </div>
    </footer>
}
