import SkillIcon from "../../images/webProgramming.png"

const WebDevSckill = () => {
    return (
        <div className="skill">
              <div className="skill-top"></div>
              <div className="skillcenter">
                <div className="skillcenter-T">
                    <img src={SkillIcon} alt="" />
                </div>
                <div className="skillcenter-B">
                  <div>
                    <h1>Web development</h1>
                  </div>
                  <div>
                    <p>
                      I specialise in designing and creating stunning website
                      layouts that will leave a lasting impression on your
                      visitors. Using cutting-edge tools like Figma and GIMP, I
                      ensure a website looks great and offers a seamless user
                      experience.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default WebDevSckill;