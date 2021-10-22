import styles from './WaktuBelajarSection.module.scss';

const WaktuBelajarSection = () => {
    return (
        <section className={`${styles.section} bg-codepolitan`} style={{backgroundImage: `url('/assets/img/program/waktu-belajar.png')`}}>
            <div className="container px-5">
                <div className="row mt-5">
                    <div className="col-lg-6 text-white" style={{zIndex: 1}}>
                        <h2 className={styles.title}>Waktu Belajar Fleksibel</h2>
                        <p className="my-3">Gausah bingung kapan belajarnya, kamu dapat nentuin kapan dan dimana aja kamu belajar</p>
                    </div>
                </div>
            </div>
            <div className="px-auto mt-3 d-lg-none" style={{overflow: 'hidden'}}>
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src="/assets/img/program/waktu-belajar-small.png" alt="Waktu Belajar Fleksibel" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaktuBelajarSection;
