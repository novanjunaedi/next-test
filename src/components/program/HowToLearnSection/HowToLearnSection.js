import Image from 'next/image';
// import caraBelajar from '../../../assets/img/program/cara-belajar.png';
// import caraBelajarSmall from '../../../assets/img/program/cara-belajar-small.png';

const HowToLearnSection = () => {
    return (
        <section className="section">
            <div className="container p-5 my-5">
                <div className="row text-center">
                    <div className="col">
                        <h2 className="section-title" style={{color: '#14a7a0'}}>Bagaimana Cara Belajarnya?</h2>
                        <p className="text-muted">Belajar lebih terarah dan hasil maksimal dengan 4 langkah berikut:</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col px-5">
                        <div className="d-none d-md-block">
                            <img className="img-fluid" src="/assets/img/program/cara-belajar.png" alt="Cara Belajar" />
                        </div>
                        <div className="d-md-none">
                            <img className="img-fluid" src="/assets/img/program/cara-belajar-small.png" alt="Cara Belajar" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToLearnSection;
