import React, { useState, useEffect } from 'react';
import './About.scss';

//Assets
import { Images } from '../../constants';
import { motion } from 'framer-motion';

const abouts = [
    {title: 'Web Development', description: 'I am a good webdeveloper', imgUrl: Images.about01},
    {title: 'Front Development', description: 'I am a good webdeveloper', imgUrl: Images.about02},
    {title: 'Back Development', description: 'I am a good webdeveloper', imgUrl: Images.about03},
    {title: 'MERN Development', description: 'I am a good webdeveloper', imgUrl: Images.about04}
];

const About = () => {
    return(
        <>
            <h2 className='head-text'>
                I know that <span>Good Development</span><br />
                means <span>Good Business</span>
            </h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{opacity:1}}
                        whileHover={{scale:1.1}}
                        transition={{duration: 0.5, type: 'tween'}}
                        className='app__profile-item'
                        key={about.title + index}>
                            <img src={about.imgUrl} alt={about.title} />
                            <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
                            <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
                    </motion.div>
                ))}
            </div>


        </>
    )
}; 

export default About; 