import Head from "next/head";
import styles from '../../styles/Program.module.scss';
import Hero from "../../components/program/Hero/Hero";
import Layout from "../../components/global/Layout/Layout";
import WaktuBelajarSection from "../../components/program/WaktuBelajarSection/WaktuBelajarSection";
import VideoSection from '../../components/program/VideoSection/VideoSection';
import CourselistSection from "../../components/program/CourselistSection/CourselistSection";
import ForumSection from "../../components/program/ForumSection/ForumSection";
import CertificateSection from "../../components/program/CertificateSection/CertificateSection";
import MentorSection from "../../components/program/MentorSection/MentorSection";
import HowToLearnSection from "../../components/program/HowToLearnSection/HowToLearnSection";
import TestimonySection from "../../components/program/TestimonySection/TestimonySection";
import CtaSection from "../../components/program/CtaSection/CtaSection";
import FaqSection from "../../components/program/FaqSection/FaqSection";

const WordpressLanding = () => {
    return (
        <>
            <Head>
                <title>Kelas Wordpress - Codepolitan</title>
                <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
                <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
                
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta property="og:title" content="Meta Tags — Preview, Edit and Generate" />
                <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
                <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
                
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate" />
                <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
                <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
            </Head>
            <Layout>
                <Hero
                    heroTitle="Mau Bikin Toko Online Sendiri Dengan Mudah ?"
                    heroSubtitle="Bikin web toko online itu ternyata ga susah!  cukup ikuti kelas ini apapun latar belakang kamu, kamu dapat membuat web toko online sendiri yang memiliki nilai jual"
                    heroBackground="/assets/img/program/hero-wordpress.png"
                    heroImg="/assets/img/program/hero-wordpress-small.png"
                />
                <section id="about" className="section my-5 py-5">
                    <div className="container px-5">
                        <div className="row justify-content-between">
                            <div className="col-lg-6 my-5">
                                <h2 className={`${styles.headline} headline text-muted`}>Siapapun Bisa Bikin Toko Online Sendiri Dengan Belajar Di Kelas Ini</h2>
                            </div>
                            <div className="col-lg-5 my-5">
                                <h2 className="section-title">Tentang Kelas</h2>
                                <p className="text-muted my-3">Wordpres adalah sebuah framework PHP dan MySQL yang sangat popoler dimasa kini karena dapat membuat berbagai jenis website, mulai dari toko online, portofolio, blog dan masih banyak lagi. Disini kami akan membagikan tips dan trik cepat agar kamu dapat memahami dan dapat membuat web sendiri.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section bg-light">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-6 p-5 bg-light">
                                <h2 className="section-title">Belajar Dengan Studi Kasus</h2>
                                <p className="text-muted my-3">Disini kami telah membuat toko online menggunakan Wordpres dengan cepat. dengan mengikuti kelas ini kamu akan Belajar studi kasus agar dapat membuat web seperti toko online atau bahkan lebih keren lagi.</p>
                                <a className="btn btn-primary btn-lg mt-3" href="">Lihat demo</a>
                            </div>
                            <div className="col-lg-6 py-4">
                                <img className="img-fluid" src="/assets/img/program/wordpress.png" alt="Mockup" />
                            </div>
                        </div>
                    </div>
                </section>
                <WaktuBelajarSection />
                <VideoSection
                    videoSrc="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                    description="Kamu akan mendapatkan materi berupa vidio yang dapat diakses selamanya tanpa batas waktu. dengan begitu kamu dapat cepat mahir membuat game dengan construct."
                    link="/"
                />
                <CourselistSection>
                    <ul
                        className="nav nav-pills d-grid d-md-flex nav-justified bg-light mb-3"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link py-3 active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                            >
                                Persiapan Construct 3
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link py-3"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                            >
                                Event untuk Menggerakkan Objek
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link py-3"
                                id="pills-contact-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-contact"
                                type="button"
                                role="tab"
                                aria-controls="pills-contact"
                                aria-selected="false"
                            >
                                Misc Object Pada Game
                            </button>
                        </li>
                    </ul>
    
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        
                        </div>
                    </div>
                </CourselistSection>
                <ForumSection />
                <CertificateSection />
                <MentorSection
                    name="Tony Haryanto"
                    title="Mentor kelas Wordpress"
                    description="Saya Tony Haryanto, seorang Full Stack Developer dan Senior Programmer di Codepolitan. Dengan pengalaman saya lebih dari 6 tahun berkarya dan  berkarir di bidang programming akan membantu kamu belajar dalam kelas ini. Apapun latar belakang kamu, melalui kelas ini kamu akan belajar membuat website perusahaan sendiri yang super keren. Saya tunggu di kelas!"
                    img="/assets/img/program/tony-haryanto-small.png"
                    backgroundImg="/assets/img/program/tony-haryanto.png"
                />
                <HowToLearnSection />
                <TestimonySection />
                <CtaSection
                    title="Tunggu Apalagi ? Ayo Gabung Kelas Bikin Web Tanpa Koding Sekarang !"
                    priceImg="/assets/img/program/wordpress-price.png"
                    actionLink="https://mobirise.com"
                />
                <FaqSection>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                            >
                                Accordion Item #1
                            </button>
                        </h2>
                        <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                Placeholder content for this accordion, which is intended to
                                demonstrate the <code>.accordion-flush</code> class. This is
                                the first items accordion body.
                            </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button 
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                            >
                                Accordion Item #2
                            </button>
                        </h2>
                        <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                Placeholder content for this accordion, which is
                                intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                second items accordion body. Lets imagine this being filled with some actual
                                content.
                            </div>
                        </div>
                    </div>
                </FaqSection>
            </Layout>
        </>
    );
};

export default WordpressLanding;
