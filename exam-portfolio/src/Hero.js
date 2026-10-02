import React from 'react';
import Denia from './de_cu.jpg';

function Hero() {
    return (
        <section style={{ padding: '50px', textAlign: 'center' }}>
            <h1>Hello! I'm Zairoze</h1>
            <p>Welcome to my portfolio website.</p>
            <div style={{ marginTop: '20px' }}>
                <img
                    src={Denia}
                    alt="Profile"
                    style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover'
                    }}
                />
            </div>
            </section>
        );
    }

export default Hero;