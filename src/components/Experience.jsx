import trashImage from "../images/trash-can.svg";

export function Experience({
  experience,
  onExperienceAdd,
  onExperienceInfoChange,
  onExperienceRemove,
}) {
  return (
    <div id="experience-form-container">
      <h2>Experience:</h2>
      {experience.length > 0 ? (
        experience.map((exp) => (
          <div key={exp.id}>
            <form id="personal-form">
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                value={exp.company}
                onChange={(e) =>
                  onExperienceInfoChange(exp.id, "company", e.target.value)
                }
              />
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                value={exp.location}
                onChange={(e) =>
                  onExperienceInfoChange(exp.id, "location", e.target.value)
                }
              />
              <label htmlFor="position">Position:</label>
              <input
                type="text"
                id="position"
                value={exp.position}
                onChange={(e) =>
                  onExperienceInfoChange(exp.id, "position", e.target.value)
                }
              />
              <label htmlFor="start">Start Date:</label>
              <input
                type="text"
                id="start"
                value={exp.start}
                onChange={(e) =>
                  onExperienceInfoChange(exp.id, "start", e.target.value)
                }
              />
              <label htmlFor="end">End Date:</label>
              <input
                type="text"
                id="end"
                value={exp.end}
                onChange={(e) =>
                  onExperienceInfoChange(exp.id, "end", e.target.value)
                }
              />
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                value={exp.description}
                onChange={(e) =>
                  onExperienceInfoChange(exp.id, "description", e.target.value)
                }
              />
            </form>
            <button
              className="experience-delete"
              onClick={() => onExperienceRemove(exp.id)}
            >
              <img src={trashImage} alt="delete" />
            </button>
          </div>
        ))
      ) : (
        <p>No experience added yet.</p>
      )}
      <button id="add-experience" onClick={onExperienceAdd}>
        +
      </button>
    </div>
  );
}

export function DisplayExperience({ experience }) {
  return (
    <div id="experience-header">
      <h1>Experience</h1>
      {experience.map((exp) => (
        <div key={exp.id} className="experience-container">
          <div className="each-exp-header">
            {exp.location == "" ? <h2>{exp.company}</h2> : <h2>{exp.company} | {exp.location}</h2>}
            <h3>
              {exp.start} - {exp.end}
            </h3>
          </div>
          <p className="exp-position">{exp.position}</p>
          <p className="exp-description">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}
