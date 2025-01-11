import BackendSkill from "./BackendSkill/BackendSkill";
import EdaSkill from "./EdaSkill/EdaSkill";
import FrontendSkill from "./FrontendSkill/FrontendSkill";
import GraphicSkill from "./GraphicSkill/GraphicSkill";


const SkillsPage = () => {
  return (
    <div>
      <EdaSkill />
      <FrontendSkill />
      <BackendSkill />
      <GraphicSkill />
    </div>
  );
}

export default SkillsPage;
