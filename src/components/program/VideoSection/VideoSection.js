const VideoSection = ({ videoSrc }) => {
  return (
    <section className="section">
      <div className="container my-5 p-5">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="ratio ratio-16x9">
              <iframe
                className="rounded"
                src={videoSrc}
                title="Course Preview"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0">
            <h2 className="section-title">Akses Materi Belajar Selamanya</h2>
            <p className="my-3 text-muted">Kamu akan mendapatkan materi belajar berupa video yang dapat diakses selamanya. Kamu bisa mengulanginnya berkali-kali kapan saja kamu mau, tanpa batas waktu.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
