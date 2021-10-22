import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Layout from '../../components/global/Layout/Layout';
import styles from '../../styles/Program.module.scss';

const DiscordLanding = () => {
    return (
        <>
            <Head>
                <title>Yuk Gabung Komunitas Discord Codepolitan - Codepolitan</title>
                <meta name="title" content="Yuk Gabung Komunitas Discord Codepolitan" />
                <meta name="description" content="Belajar coding jadi lebih seru! cukup gabung Discord komunitas coding Codepolitan kamu ga akan belajar sendirian, semua anggota Discord Codepolitan akan selalu aktif berdiskusi." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta property="og:title" content="Yuk Gabung Komunitas Discord Codepolitan" />
                <meta property="og:description" content="Belajar coding jadi lebih seru! cukup gabung Discord komunitas coding Codepolitan kamu ga akan belajar sendirian, semua anggota Discord Codepolitan akan selalu aktif berdiskusi." />
                <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" /> 
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta property="twitter:title" content="Yuk Gabung Komunitas Discord Codepolitan" />
                <meta property="twitter:description" content="Belajar coding jadi lebih seru! cukup gabung Discord komunitas coding Codepolitan kamu ga akan belajar sendirian, semua anggota Discord Codepolitan akan selalu aktif berdiskusi." />
                <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
            </Head>
            <Layout>
                <section className="section" style={{marginTop: '80px'}}>
                    <div className="container p-5">
                        <div className="row">
                            <div className="col-lg-6 mt-5 text-center text-lg-start">
                                <h1 className="section-title">Yuk Gabung Komunitas Discord Codepolitan</h1>
                                <p className="text-muted lead my-3">Belajar coding jadi lebih seru! cukup gabung Discord komunitas coding Codepolitan kamu ga akan belajar sendirian, semua anggota Discord Codepolitan akan selalu aktif berdiskusi.</p>
                                <a className="btn btn-outline-primary mt-2 btn-lg" href="#about">Lihat Benefit</a>
                            </div>
                            <div className="col-lg-6 mt-5 mt-lg-0">
                                <img className="img-fluid" src="/assets/img/program/hero-discord.png" alt="Yuk Gabung Komunitas Discord Codepolitan" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section" id="about">
                    <div className="container my-5 p-5">
                        <div className="row justify-content-between">
                            <div className="col-md-6">
                                <img className="img-fluid" src="/assets/img/program/discord-img.png" alt="Discord" />
                            </div>
                            <div className="col-md-5 mt-5">
                                <h2 className="section-title">Tujuan Komunitas</h2>
                                <p className="text-muted my-3">Komunitas ini disediakan untuk kamu yang suka kebingunan ketika ngoding atau memiliki masalah terkait pemrograman. Melalui komunitas Discord Codepolitan, kamu akan mendapatkan jawaban dengan cepat dari anggota Discord Codepolitan dan tentunya ga akan belajar sendirian lagi.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section bg-light">
                    <div className="container mt-5 px-5 pt-5">
                        <div className="row justify-content-around">
                            <div className="col-md-6 d-none d-lg-block">
                                <img className="img-fluid" src="/assets/img/program/discord-img-2.png" alt="Discord" />
                            </div>
                            <div className="col-lg-5 mb-5 mb-lg-0 mt-lg-3">
                                <h2 className="section-title">Apa yang Kamu Dapatkan di Discord Codepolitan?</h2>
                                <p className="text-muted my-3">Dengan komunitas Discord Code Politan, banyak manfaat yang akan kamu dapatkan</p>
                                <ul className={`${styles.discord_icon} text-muted`}>
                                    <li>Berkenalan Dengan Sesama Programer</li>
                                    <li>Diskusi Teknologi dan Pemrograman</li>
                                    <li>Update Informasi Belajar di Codepolitan</li>
                                    <li>Update Informasi Event Teknologi dan Pemrograman</li>
                                    <li>Informasi Seputar Coding</li>
                                    <li>Informasi Lowongan Kerja</li>
                                    <li>Hiburan Geek Shitposting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section bg-codepolitan">
                    <div className="container p-5">
                        <div className="row">
                            <div className="col-md-6 mt-5 py-5">
                                <h2 className="section-title text-white">Tunggu Apalagi ? Ayo Seru-Seruan Belajar Ngoding Bareng Di Server Discord Codepolitan</h2>
                                <a className="btn btn-light btn-lg mt-3" href="https://discord.gg/HF2UpWNCWX">
                                    <FontAwesomeIcon className="me-2" icon={faDiscord} />
                                    Gabung Discord
                                </a>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid" style={{borderRadius: '20px'}} src="/assets/img/program/discord-img-3.png" alt="Gabung Discord" />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default DiscordLanding;
