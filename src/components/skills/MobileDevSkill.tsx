import AppDevIcon from "../../images/app-development.png"

const MobileDevSkill = () => {
  return (
    <div className="skill">
      <div className="skill-top"></div>
      <div className="skillcenter">
        <div className="skillcenter-T">
          <img src={AppDevIcon} alt="" />
        </div>
        <div className="skillcenter-B">
          <div>
            <h1>Mobile Develoment</h1>
          </div>
          <div>
            <p>
              I focus on designing layouts that captivate your audience and
              enhance user engagement. By utilising powerful design tools like
              Figma and GIMP, I ensure that an app not only looks fantastic but
              also delivers a seamless and enjoyable experience for users.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDevSkill;
