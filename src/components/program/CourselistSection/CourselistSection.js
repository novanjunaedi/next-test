const CourselistSection = ({children}) => {
  return (
    <section className="section" id="CampaignCourseList">
      <div className="container px-5">
        <div className="row">
          <div className="col">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourselistSection;
