import styles from './CertificateSection.module.scss';

const CertificateSection = () => {
    return (
        <section className={`${styles.section} ${styles.bg_certificate}`} style={{backgroundImage: `url('/assets/img/program/certificate-img.png')`}}>
            <div className="container px-5">
                <div className="row justify-content-lg-end mt-5">
                    <div className="col-lg-4 mt-5" style={{zIndex: 1}}>
                        <h2 className={styles.title}>Sertifikasi</h2>
                        <p className="my-3">Kamu akan mendapatkan sertifikat digital setelah menyelesaikan kelas ini</p>
                    </div>
                </div>
            </div>
            <div className="px-auto mt-3 d-lg-none" style={{overflow: 'hidden'}}>
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src="/assets/img/program/certificate-img-small.png" alt="Forum Tanya Jawab" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificateSection;
