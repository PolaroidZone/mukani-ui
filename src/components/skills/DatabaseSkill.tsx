import ServerIcon from "../../images/server.png"

const DatabaseSkill = () => {
  return (
    <div className="skill">
      <div className="skill-top"></div>
      <div className="skillcenter">
        <div className="skillcenter-T">
            <img src={ServerIcon} alt="" />
        </div>
        <div className="skillcenter-B">
          <div>
            <h1>Database Design</h1>
          </div>
          <div>
            <p>
              A well-structured and efficient database is the backbone of any
              successful application. I have an understanding of database design
              and management. Whether designing the database schema or
              optimising queries for performance, I am competent with both, From
              SQL to NoSQL databases.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseSkill;
