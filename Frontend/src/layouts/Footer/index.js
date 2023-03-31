
import { ClockIcon, EnvelopeIcon, MapIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React, { Fragment } from 'react'
import { SocialIcon } from 'react-social-icons';

const Index = () => {
    return (
        <Fragment>
            <footer className="footer_section">
                <div className="">
                    <div className="flex justify-evenly lg:flex-row flex-col">
                        <div className="lg:w-1/4 w-full footer-col">
                            <div className="footer_contact">
                                <h4>
                                    Contact Us
                                </h4>
                                <div className="contact_link_box">
                                    <a href="" className='flex flex-row gap-1 flex-nowrap justify-center'>
                                        <MapPinIcon className='w-6' />
                                        <span> Location </span>
                                    </a>

                                    <a href="tel:+52 4492645580" className='flex flex-row gap-1 flex-nowrap justify-center'>
                                        <PhoneIcon className='w-6'></PhoneIcon>
                                        <span> +52 4492645580 </span>
                                    </a>
                                    <a href="mailto:st2474@utr.edu.mx" className='flex flex-row gap-1 flex-nowrap justify-center'>
                                        <EnvelopeIcon className='w-6' />
                                        <span> st2474@utr.edu.mx </span>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full footer-col">
                            <div className="footer_detail">
                                <a href="" className="footer-logo">
                                    GoodyFoody
                                </a>
                                <p>
                                    Recipe has no soul.<br /> You, as the cook, must bring soul to the recipe.
                                </p>
                                <div className="flex justify-center gap-1 mt-4">

                                    <SocialIcon className='hover:opacity-70' url="https://github.com/daniels99s" network="twitter" />
                                    <SocialIcon className='hover:opacity-70' url="https://github.com/daniels99s" network="instagram" />
                                    <SocialIcon className='hover:opacity-70' url="https://github.com/daniels99s" network="facebook" />
                                    <SocialIcon className='hover:opacity-70' url="https://github.com/daniels99s" network="youtube" />
                                    <SocialIcon className='hover:opacity-70' url="https://github.com/daniels99s" network="linkedin" />
                                 


                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full footer-col">
                            <h4> Opening Hours </h4>
                            <p> Everyday </p>
                            <p>
                                <ClockIcon className='w-6 ml-4 inline-block' /> 
                                <span>10.00 Am -10.00 Pm</span>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </footer>
        </Fragment>
    )
}

export default Index