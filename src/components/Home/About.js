import React from 'react';
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const About = () => {
    return ( 
        <section className={styles.about}>
            <Title title="about" subtitle="us" />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imagContainer}>
                        <img src={img} alt="about company" />
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>expore the difference</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                       Donec libero erat, euismod id aliquam congue, ornare vel mauris. Vestibulum finibus
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                       Donec libero erat, euismod id aliquam congue, ornare vel mauris. Vestibulum finibus
                    </p>
                    <button type="button" className="btn-primary">
                     Read more
                    </button>
                </article>
            </div>
        </section>
     );
}
 
export default About;