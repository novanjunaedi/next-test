import Head from "next/head";
import Hero from "../../components/program/Hero/Hero";
import Layout from "../../components/global/Layout/Layout";
import WaktuBelajarSection from "../../components/program/WaktuBelajarSection/WaktuBelajarSection";
import VideoSection from "../../components/program/VideoSection/VideoSection";
import CourselistSection from "../../components/program/CourselistSection/CourselistSection";
import ForumSection from "../../components/program/ForumSection/ForumSection";
import CertificateSection from "../../components/program/CertificateSection/CertificateSection";
import MentorSection from "../../components/program/MentorSection/MentorSection";
import HowToLearnSection from "../../components/program/HowToLearnSection/HowToLearnSection";
import TestimonySection from "../../components/program/TestimonySection/TestimonySection";
import CtaSection from "../../components/program/CtaSection/CtaSection";
import FaqSection from "../../components/program/FaqSection/FaqSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import TestimonyCard from "../../components/program/TestimonyCard/TestimonyCard";

// export const getStaticProps = async () => {
//     const [courseDetailRes, testimonyRes] = await Promise.all([
//         fetch('https://api.codepolitan.com/course/detail/membuat-game-tanpa-coding-dengan-construct-3'),
//         fetch('https://api.codepolitan.com/course/detail/membuat-game-tanpa-coding-dengan-construct-3')
//     ]);
//     const [courseDetail, testimony] = await Promise.all([
//         courseDetailRes.json(),
//         testimonyRes.json()
//     ]);
//     return {
//         props: {
//             courseDetail,
//             testimony
//         }
//     }
// }

const ConstructLanding = () => {

    return (
        <>
            <Head>
                <title>Construct 3 - Codepolitan</title>
                <meta name="title" content="Bikin Game 1 Jam ? Mudah dan Gak Harus Ngoding" />
                <meta name="description" content="Melalui kelas ini, bukan hanya jadi gamer kamu juga bisa jadi game developer yang dapat membuat game super keren dan memiliki nilai jual tanpa harus jago coding !" />
                
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://web.codepolitan.com/program/construct-3" />
                <meta property="og:title" content="Bikin Game 1 Jam ? Mudah dan Gak Harus Ngoding" />
                <meta property="og:description" content="Melalui kelas ini, bukan hanya jadi gamer kamu juga bisa jadi game developer yang dapat membuat game super keren dan memiliki nilai jual tanpa harus jago coding !" />
                <meta property="og:image" content="" />
                
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://web.codepolitan.com/program/construct-3" />
                <meta property="twitter:title" content="Bikin Game 1 Jam ? Mudah dan Gak Harus Ngoding" />
                <meta property="twitter:description" content="Melalui kelas ini, bukan hanya jadi gamer kamu juga bisa jadi game developer yang dapat membuat game super keren dan memiliki nilai jual tanpa harus jago coding !" />
                <meta property="twitter:image" content="" />
            </Head>
            <Layout>
                <Hero
                    heroTitle="Bikin Game 1 Jam ? Mudah dan Gak Harus Ngoding"
                    heroSubtitle="Melalui kelas ini, bukan hanya jadi gamer kamu juga bisa jadi game developer yang dapat membuat game super keren dan memiliki nilai jual tanpa harus jago coding !"
                    heroBackground="/assets/img/program/hero-construct-bg.png"
                    heroImg="/assets/img/program/hero-construct.png"
                />
                <section id="about" className="section my-5 py-5">
                    <div className="container px-5">
                        <div className="row justify-content-between">
                            <div className="col-lg-6 my-5">
                                <h2 className="section-title">Tentang Kelas</h2>
                                <p className="text-muted my-3">Kelas ditujukan bagi siapa saja yang ingin menjadi game developer dengan menggunakan tools construct 3. kamu bisa mendesign dan membuat game puzzle, Tembak-Tembakan, balapan , hingga RPG dan layak untuk dimainkan oleh siapapun, sehingga game yang kamu buat dapat diupload ke apps store atau playstore dengan nilai jual yang tinggi.</p>
                            </div>
                            <div className="col-lg-5 my-3">
                                <img className="img-fluid" src="/assets/img/program/mascot.png" alt="Construct Codepolitan" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 bg-dark py-4">
                                <div className="my-5 py-4">
                                    <img className="img-fluid" src="/assets/img/program/construct.png" alt="Mockup" />
                                </div>
                            </div>
                            <div className="col-md-6 p-5 bg-light">
                                <div className="my-5 px-lg-5">
                                    <h2 className="section-title">Belajar Dengan Studi Kasus</h2>
                                    <p className="text-muted my-3">Disini kami membuat game shooter yang bisa dimainkan pada perangkat mobile dan bisa diakses secara online, dengan mengikuti kelas ini kamu juga bisa bikin game shooter seperti kami atau bahkan lebih keren lagi. kamu bisa lihat hasilnya disini.</p>
                                    <a className="btn btn-primary btn-lg mt-3" href="">Lihat demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <WaktuBelajarSection />
                <VideoSection
                    videoSrc="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
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
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-test"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                            >
                                Test
                            </button>
                        </li>
                    </ul>
    
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td style={{width: '50px'}}>
                                            <img className="img-fluid" src="/assets/img/program/play-icon.png" alt="Icon" />
                                        </td>
                                        <td>Test</td>
                                        <td className="text-end">
                                           <FontAwesomeIcon icon={faLock} /> Test
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="tab-pane fade show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td style={{width: '50px'}}>
                                            <img className="img-fluid" src="/assets/img/program/play-icon.png" alt="Icon" />
                                        </td>
                                        <td>Test</td>
                                        <td className="text-end">
                                           <FontAwesomeIcon icon={faLock} /> Test
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CourselistSection>
                <ForumSection />
                <CertificateSection />
                <MentorSection
                    name="Ahmad Hakim"
                    title="Mentor kelas Construct 3"
                    description="Saya Ahmad Hakim, seorang Full Stack Developer dan Senior Programmer di Codepolitan. Dengan pengalaman saya lebih dari 6 tahun berkarya dan  berkarir di bidang programming akan membantu kamu belajar dalam kelas ini. Apapun latar belakang kamu, melalui kelas ini kamu akan belajar membuat website perusahaan sendiri yang super keren. Saya tunggu di kelas!"
                    img="/assets/img/program/hakim-small.png"
                    backgroundImg="/assets/img/program/hakim.png"
                />
                <HowToLearnSection />
                <TestimonySection>
                    <TestimonyCard />
                </TestimonySection>
                <CtaSection
                    title="Tunggu Apalagi ? Ayo Gabung Kelas Bikin Web Tanpa Koding Sekarang !"
                    priceImg="/assets/img/program/construct-price.png"
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
    )
}

export default ConstructLanding;
