import { useState } from "react";
import { PersonalDetails, DisplayPersonalDetails } from "./PersonalDetails";
import { Skills, DisplaySkills } from "./Skills";
import { Experience, DisplayExperience } from "./Experience";
import { v4 as uuid } from "uuid";
import { Education, DisplayEducation } from "./Education";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const [skills, setSkills] = useState([]);

  const [experience, setExperience] = useState([]);

  const [education, setEducation] = useState([]);

  const handlePersonalInfo = (field, value) => {
    setPersonalInfo((info) => ({ ...info, [field]: value }));
  };

  const handleAddSkill = () => {
    const newSkillObject = {
      id: uuid(),
      skillName: "",
    };
    setSkills([...skills, newSkillObject]);
  };

  const handleSkillName = (skillId, value) => {
    setSkills((skills) =>
      skills.map((skill) =>
        skill.id === skillId ? { id: skillId, skillName: value } : skill
      )
    );
  };

  const handleRemoveSkill = (skillId) => {
    setSkills(skills.filter((skill) => skill.id !== skillId));
  };

  const handleAddExperience = () => {
    const newExperienceObject = {
      id: uuid(),
      company: "",
      location: "",
      position: "",
      start: "",
      end: "",
      description: "",
    };
    setExperience([...experience, newExperienceObject]);
  };

  const handleExperienceChange = (experienceId, field, value) => {
    setExperience((experience) =>
      experience.map((exp) =>
        exp.id === experienceId
          ? {
              ...exp,
              [field]: value,
            }
          : exp
      )
    );
  };

  const handleRemoveExperience = (experienceId) => {
    setExperience(experience.filter((exp) => exp.id !== experienceId));
  };

  const handleAddEducation = () => {
    const newEducationObject = {
      id: uuid(),
      institute: "",
      qualification: "",
      start: "",
      end: "",
      description: "",
    };
    setEducation([...education, newEducationObject]);
  };

  const handleEducationChange = (educationId, field, value) => {
    setEducation((education) =>
      education.map((edu) =>
        edu.id === educationId
          ? {
              ...edu,
              [field]: value,
            }
          : edu
      )
    );
  };

  const handleRemoveEducation = (educationId) => {
    setEducation(education.filter((edu) => edu.id !== educationId));
  };

  return (
    <div id="container">
      <div id="forms">
        <p id="header-text">CV Builder</p>
        <PersonalDetails
          personalInfo={personalInfo}
          onPersonalInfoChange={handlePersonalInfo}
        />
        <Skills
          skills={skills}
          onSkillsAdd={handleAddSkill}
          onSkillsChange={handleSkillName}
          onSkillsDelete={handleRemoveSkill}
        />
        <Experience
          experience={experience}
          onExperienceAdd={handleAddExperience}
          onExperienceInfoChange={handleExperienceChange}
          onExperienceRemove={handleRemoveExperience}
        />
        <Education
          education={education}
          onEducationAdd={handleAddEducation}
          onEducationInfoChange={handleEducationChange}
          onEducationRemove={handleRemoveEducation}
        />
      </div>
      <div id="resume-container">
        <div id="resume-display">
          <DisplayPersonalDetails personalInfo={personalInfo} />
          <DisplaySkills skills={skills} />
          <DisplayExperience experience={experience} />
          <DisplayEducation education={education} />
        </div>
      </div>
    </div>
  );
}

export default App;
