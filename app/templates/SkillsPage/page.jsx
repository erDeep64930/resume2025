import BackendSkill from "./BackendSkill/BackendSkill";
import EdaSkill from "./EdaSkill/EdaSkill";
import FrontendSkill from "./FrontendSkill/FrontendSkill";


const SkillsPage = () => {
  return (
    <div>
      <EdaSkill />
      <FrontendSkill />
      <BackendSkill />
    </div>
  );
}

export default SkillsPage;
