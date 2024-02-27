import trashImage from "../images/trash-can.svg"

export function Education({
  education,
  onEducationAdd,
  onEducationInfoChange,
  onEducationRemove,
}) {
  return (
    <div id="education-form-container">
      <h2>Education:</h2>
      {education.length > 0 ? (
        education.map(edu => (
            <div key={edu.id}>
              <form id="personal-form">
                <label htmlFor="institute">Insitute:</label>
                <input
                  type="text"
                  id="institute"
                  value={edu.institute}
                  onChange={(e) =>
                    onEducationInfoChange(edu.id, "institute", e.target.value)
                }
                />
                <label htmlFor="qualification">Qualification:</label>
                <input
                    type="text"
                    id="qualification"
                    value={edu.qualification}
                    placeholder="Education Attained at Institute"
                    onChange={(e) =>
                    onEducationInfoChange(edu.id, "qualification", e.target.value)
                    }
                />
                <label htmlFor="start">Start Date:</label>
                <input
                    type="text"
                    id="start"
                    value={edu.start}
                    onChange={(e) =>
                    onEducationInfoChange(edu.id, "start", e.target.value)
                    }
                />
                <label htmlFor="end">End Date:</label>
                <input
                    type="text"
                    id="end"
                    value={edu.end}
                    onChange={(e) =>
                    onEducationInfoChange(edu.id, "end", e.target.value)
                    }
                />
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    value={edu.description}
                    onChange={(e) =>
                    onEducationInfoChange(edu.id, "description", e.target.value)
                    }
                />
            </form>
            <button
              className="experience-delete"
              onClick={() => onEducationRemove(edu.id)}
            >
              <img src={trashImage} alt="delete" />
            </button>
            </div>
        ))
      ) : (
        <p>No education added yet.</p>
      )}
      <button id="add-education" onClick={onEducationAdd}>
        +
      </button>
    </div>
  );
}

export function DisplayEducation({ education }) {
  return (
    <div id="education-header">
      <h1>Education</h1>
      {education.map((edu) => (
        <div key={edu.id} className="education-container">
          <div className="each-edu-header">
            <h2>{edu.institute}</h2>
            <h3>
              {edu.start} - {edu.end}
            </h3>
          </div>
          <p className="edu-qualification">{edu.qualification}</p>
          <p className="edu-description">{edu.description}</p>
        </div>
      ))}
    </div>
  );
}
