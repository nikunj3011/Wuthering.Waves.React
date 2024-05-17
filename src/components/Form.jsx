import React from 'react';

const Form = () => {
    return (
        <div className="home_contact">
            <form action="contact.php" method="POST">
                <input className="form-control form-control-lg" name="name" id="name" type="text" placeholder="Your Name*" required aria-label=".form-control-lg example" />
                <input className="form-control form-control-lg" name="phone" id="phone" type="number" placeholder="Your Phone No" aria-label=".form-control-lg example" />
                <input className="form-control form-control-lg" name="email" id="email" type="email" placeholder="Your Email*" required aria-label=".form-control-lg example" />
                <textarea className="form-control pt-4" name="message" id="message" placeholder="Your Message" rows="3"></textarea>
                <div className="btn_group">
                    <button type="submit" className="btn olive">Send Mail</button>
                </div>
            </form>
        </div>

    );
};

export default Form;