import React from "react"

const Footer = () => <footer style={{backgroundColor: "green", }} className="page-footer font-small blue pt-4">
    <div className="text-center ">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Welcome to the Shroom Tycoons!</h5>
                <p>Home to all the mushroom knowledge you will ever need.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="\">Home</a></li>
                    <li><a href="\Mushrooms">Mushrooms</a></li>
                    <li><a href="\Recipes">Recipes</a></li>
                    <li><a href="tools">Tools</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Social Media</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Facebook</a></li>
                    <li><a href="#!">Instagram</a></li>
                    <li><a href="#!">Linkedin</a></li>
                    <li><a href="#!">Twitter</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="text-center py-3">© 2021 Copyright MD*:
        <a href="https://shroomtycoon.herokuapp.com/"> ShroomTycoons</a>
    </div>

</footer>

export default Footer