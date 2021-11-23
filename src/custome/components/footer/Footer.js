import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin } from 'react-feather';
import google from '../../../img/google-round.png';
import insta from '../../../img/instagram 1.png';
import linked from '../../../img/linked.png';
import tw from '../../../img/twitter 1.png';
import fb from '../../../img/facebook 1.png';
import './footer.css';

const Footer = () => {

    const footerStyle = {
        height: '150px',
        backgroundColor: '#181818',
        padding: '10px 50px'
    }

    return (
        <div style={footerStyle} className="d-flex justify-content-between align-items-center">
            <div>
                <p style={{margin:'0'}} className='footer text-white fw-bold fs-3'>SHA-AUTO</p>
                <p style={{margin:'0'}} className='footer text-warning fw-bold'>copyright@2021</p>
            </div>
            <div>
                <p className='footer text-white fw-bold fs-5'>Follow us</p>
                <div>
                    <img style={{ width: '25px', marginRight: '10px' }} src={fb} alt="" />
                    <img style={{ width: '25px', marginRight: '10px' }} src={insta} alt="" />
                    <img style={{ width: '25px', marginRight: '10px' }} src={linked} alt="" />
                    <img style={{ width: '25px', marginRight: '10px' }} src={google} alt="" />
                    <img style={{ width: '25px' }} src={tw} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;