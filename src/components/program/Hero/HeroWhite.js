import styles from './Hero.module.scss';

const HeroWhite = ({heroTitle, heroSubtitle, heroImg, heroBackground}) => {
    return (
        <section className={`${styles.hero}`} style={{backgroundImage: `url('${heroBackground}')`}}>
            <div className="container px-5">
                <div className="row mt-5 text-center text-md-start">
                    <div className="col-lg-6 text-white" style={{zIndex: 1}}>
                        <h1 className={styles.hero_title}>{heroTitle}</h1>
                        <p className="lead my-3">{heroSubtitle}</p>
                        <a className="btn btn-outline-light btn-lg mt-3" href="#about">Lihat Kelas</a>
                    </div>
                </div>
            </div>
            <div className="px-auto mt-3 d-lg-none" style={{overflow: 'hidden'}}>
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src={heroImg} alt={heroTitle} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroWhite;
