const TestimonySection = ({children}) => {
    return (
        <section className="section bg-light" id="CampaignTestimony">
            <div className="container p-5">
                <div className="row mb-5 text-center">
                    <div className="col">
                        <h2 className="section-title">Apa yang Siswa Katakan?</h2>
                        <p className="text-muted">Review dari siswa yang telah mengikuti kelas</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonySection;
