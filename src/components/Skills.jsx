import trashImage from "../images/trash-can.svg";

export function Skills({
  skills,
  onSkillsAdd,
  onSkillsChange,
  onSkillsDelete,
}) {
  return (
    <div id="skills-form-container">
      <h2>Skills:</h2>
      {skills.length > 0 ? (
        skills.map((skill) => (
          <div key={skill.id} className="input">
            <input
              id={skill.id}
              key={skill.id}
              value={skill.skillName}
              className="skill-input"
              onChange={(e) => onSkillsChange(skill.id, e.target.value)}
            />
            <button className="skill-delete" onClick={() => onSkillsDelete(skill.id)}>
              <img src={trashImage} alt="trash" />
            </button>
          </div>
        ))
      ) : (
        <p>No skills added yet.</p>
      )}
      <button id="add-skills" onClick={onSkillsAdd}>
        +
      </button>
    </div>
  );
}

export function DisplaySkills({ skills }) {
  return (
    <div id="skills-header">
      <h1>Skills</h1>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.skillName}</li>
        ))}
      </ul>
    </div>
  );
}
