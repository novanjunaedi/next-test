import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
// import notFoundImg from "../assets/img/oops.png";

const NotFound = () => {
  return (
    <>
      <Head></Head>
        <div className="container mt-5 pt-5">
          <div className="d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col text-center">
                <img height="200" width="auto" src="/assets/img/oops.png" alt="Oops! Halaman Tidak ditemukan" />
                <h1 style={{fontWeight: 'bold', fontSize: '2rem'}}>404 - Page Not Found</h1>
                <p className="lead text-muted mb-5">
                  Sepertinya halaman yang kamu cari tidak ditemukan.
                </p>
                <Link href="https://codepolitan.com">
                  <a className="btn btn-primary px-5 btn-lg py-3" style={{backgroundColor: '#14a7a0', color: 'white'}}>Kembali</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default NotFound;
