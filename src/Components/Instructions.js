import React, { useContext } from 'react';
import "./Instructions.css";
function Instructions() {
    return (
        <div className='instructions'>
             <div className="instructionspoints">
                <h4>Instructions for Admin</h4>
                <ul>
                    <li><p>Login to our website through your credentials.</p></li>
                    <li>
                        <p>
                            you will be navigated to a main page then select one of the given option.
                        </p>
                        <ol>
                            <li>Add Manufacturer</li>
                            <li>Manufacturer Details</li>
                        </ol>
                    </li>
                </ul>
            </div>
            <div className="instructionspoints">
                <h4>Instructions for Manufacturers</h4>
                <ul>
                    <li>
                        <p>Make sure to have an account which was created by admin in our website.</p>
                    </li>
                    <li><p>After registering successfully, login to our website.</p></li>
                    <li>
                        <p>
                            you will be navigated to a page for adding product.
                        </p>
                    </li>
                    <li>
                        <p>
                        After successfully adding of your product a Unified Qr code will be generated. you can paste it on your products.
                        </p>
                    </li>
                    <li>
                        <p>
                            The above QR code helps to validate your products by the user which helps to reduce trustworthy problems.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="instructionspoints">
                <h4>Instructions for Customers</h4>
                <ul>
                    <li>
                       <p>First select the type of product from the dropdown.</p>
                    </li>
                    <li>
                        <p>
                           And then select the type of brand from the dropdown.
                        </p>
                    </li>
                    <li>
                        <p>
                           Then click on submit button and then place the Qr code infront of camera.
                        </p>
                    </li>
                    <li>
                        <p>
                            Our system will check the product and show you whether it is a validate product or fake product.
                        </p>
                    </li>
                </ul>

            </div>
            <div className="instructionspoints">
                <h4>
                    Why should you this System
                </h4>
                <ul>
                    <li>
                        <p>
                            Fake products are the common problem facing by every brand company.
                        </p>
                    </li>
                   
                    <li>
                        <p>
                            This system will helps you to overcome trustworthy problems.
                        </p>
                    </li>
                    <li>
                        <p>
                            This system will helps you to only buy the validate product and save your money.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Instructions;