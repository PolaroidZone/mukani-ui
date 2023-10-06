import WebDevSckill from "./WebDevSkill";
import DatabaseSkill from "./DatabaseSkill";
import MobileDevSkill from "./MobileDevSkill";

const Skills = () => {
  return (
    <section className="container" id="skills">
      <div className="skills-con">
        <div className="skill-rank">
          <div className="skill-title">
            <h1>My</h1>
            <h1 className="mskill-title">skillsets</h1>
          </div>
          <div className="skill-subtle">
            <p>Lets Take a look what I cand do as a developer... hmm</p>
          </div>
          <div className="skill-list">
            <WebDevSckill />
            <DatabaseSkill />
            <MobileDevSkill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
