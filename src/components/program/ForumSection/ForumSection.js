import styles from './ForumSection.module.scss';
import Link from 'next/link';

const ForumSection = () => {
    return (
        <section className={`${styles.section} bg-codepolitan`} style={{backgroundImage: `url('/assets/img/program/forum-img.png')`}}>
            <div className="container px-5">
                <div className="row mt-5">
                    <div className="col-lg-6 text-white" style={{zIndex: 1}}>
                        <h2 className={styles.title}>Fitur Tanya Jawab</h2>
                        <p className="my-3">Jika kamu memiliki kendala saat Belajar atau mengalami kesulitan dalam memahami materi belajar, kamu bisa langsung bertanya di kanal tanya jawab yang telah disediakan. Mentor dan tim Codepolitan akan senang membantumu.</p>
                        <Link href="https://apps.codepolitan.com/forum">
                            <a className="btn btn-outline-light">Lihat Forum</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="px-auto mt-3 d-lg-none" style={{overflow: 'hidden'}}>
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src="/assets/img/program/forum-img-mobile.png" alt="Forum Tanya Jawab" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForumSection;
