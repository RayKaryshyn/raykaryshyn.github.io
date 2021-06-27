import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Home from './home';
import About from './about';

const OnePage = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        let mounted = true

        if (mounted) {
            window.onscroll = () => {
                setOffset(window.pageYOffset);
            }

            document.querySelectorAll('.nav-item').forEach(elm => {
                elm.classList.remove('actives');
            });

            if (document.getElementById('home') && document.getElementById('home').getBoundingClientRect().bottom >= 10) {
                document.querySelectorAll('.nav-item-home').forEach(elm => {
                    elm.classList.add('actives');
                });
            } else if (document.getElementById('about') && document.getElementById('about').getBoundingClientRect().bottom >= 10) {
                document.querySelectorAll('.nav-item-about').forEach(elm => {
                    elm.classList.add('actives');
                });
            } else if (document.getElementById('projects') && document.getElementById('projects').getBoundingClientRect().bottom >= 10) {
                document.querySelectorAll('.nav-item-projects').forEach(elm => {
                    elm.classList.add('actives');
                });
            } else if (document.getElementById('contact') && document.getElementById('contact').getBoundingClientRect().bottom >= 10) {
                document.querySelectorAll('.nav-item-contact').forEach(elm => {
                    elm.classList.add('actives');
                });
            }
        }

        return function cleanup() {
            mounted = false
        }
    }, [offset]);

    return (
        <>
            <Home />
            <About />
            <div id='projects' style={{ paddingBottom: '100vh' }} className='pt-16 md:pt-20'>
                Projects
                <ul>
                    <li>
                        <HashLink to='/projects/testing1'>
                            Testing1
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to='/projects/testing2'>
                            Testing2
                        </HashLink>
                    </li>
                </ul>
            </div>
            <div id='contact' style={{ paddingBottom: '100vh' }} className='pt-16 md:pt-20'>Contact</div>
        </>
    );
}

export default OnePage;

