const CtaSection = ({title, priceImg, actionLink}) => {
  return (
    <section className="section bg-codepolitan">
      <div className="container px-5">
        <div className="row text-light">
          <div className="col-lg-6 mt-5 pt-3 pb-5 pb-lg-0">
            <h2 className="section-title text-light mb-4">
              {title}
            </h2>
            <div
              className="card bg-transparent border-2 border-white"
              style={{borderRadius: '20px'}}
            >
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={priceImg}
                  alt={title}
                />
              </div>
            </div>
            <a
              className="btn btn-light btn-lg d-block my-3"
              href={actionLink}
            >
              Gabung Kelas
            </a>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img className="img-fluid" src="/assets/img/program/cta-img.png" alt="Ayo Gabung Sekarang" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
