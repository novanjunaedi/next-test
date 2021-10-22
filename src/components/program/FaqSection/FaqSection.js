import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FaqSection = ({children}) => {
  return (
    <section className="section">
      <div className="container p-5 my-5">
        <div className="row flex-lg-row-reverse">
          <div className="col-lg-8 mb-5">
            <h2
              className="section-title d-lg-none mb-5"
              style={{ color: "#14a7a0", fontSize: "2.3rem" }}
            >
              Frequently <br /> Asked Questions
            </h2>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
                {children}
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block border-end border-2 text-center text-lg-start">
            <h2 className="section-title">
              Masih Memiliki Pertanyaan?
              <br />
              <span style={{ color: "#14a7a0" }}>Lihat disini</span>
            </h2>
            <a className="btn btn-primary btn-lg mt-3" href="">
              <FontAwesomeIcon icon={faWhatsapp} /> Tanyakan disini
            </a>
          </div>
          <div className="col-lg-4 d-lg-none text-center text-lg-start">
            <h2 className="section-title">
              Masih Memiliki Pertanyaan?
              <br />
              <span style={{ color: "#14a7a0" }}>Lihat disini</span>
            </h2>
            <a className="btn btn-primary btn-lg mt-3" href="">
                <FontAwesomeIcon icon={faWhatsapp} /> Tanyakan disini
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
