import styles from './MentorSection.module.scss';

const MentorSection = ({name, title, description, img, backgroundImg}) => {
    return (
        <section className={`${styles.section} bg-codepolitan`} style={{backgroundImage: `url('${backgroundImg}')`}}>
            <div className="container px-5">
                <div className="row mt-5">
                    <div className="col-lg-6 text-white" style={{zIndex: 1}}>
                        <h2 className={styles.title}>{name}</h2>
                        <h5>{title}</h5>
                        <p className="my-3">{description}</p>
                    </div>
                </div>
            </div>
            <div className="px-auto mt-3 d-lg-none" style={{overflow: 'hidden'}}>
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src={img} alt="Waktu Belajar Fleksibel" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorSection;
