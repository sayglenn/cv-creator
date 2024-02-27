import phoneImage from "../images/phone.svg"
import emailImage from "../images/email-outline.svg"
import webImage from "../images/web.svg"

export function PersonalDetails({ personalInfo, onPersonalInfoChange }) {
  const { name, email, phone, website } = personalInfo;

  return (
    <div id="personal-form-container">
      <h2>Personal Details:</h2>
      <form id="personal-form">
        <label htmlFor="full-name">Full Name:</label>
        <input
          type="text"
          id="full-name"
          value={name}
          onChange={(e) => onPersonalInfoChange('name', e.target.value)}
        ></input>
        <label htmlFor="email">Email Address:</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => onPersonalInfoChange('email', e.target.value)}
        ></input>    
        <label htmlFor="contact-number">Contact Number:</label>
        <input
            type="text"
            id="contact-number"
            value={phone}
            onChange={(e) => onPersonalInfoChange('phone', e.target.value)}
        ></input>
        <label htmlFor="personal-website">Personal Website:</label>
        <input
            type="text"
            id="personal-website"
            value={website}
            onChange={(e) => onPersonalInfoChange('website', e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export function DisplayPersonalDetails({ personalInfo }) {
    const { name, email, phone, website } = personalInfo;

    return (
        <div id="resume-personal">
            <h1>{name}</h1>
            <div id="other-personal">
              <img src={phoneImage} alt="phone"/>
              <p>{phone}</p>
              <img src={emailImage} alt="email"/>
              <p>{email}</p>
              <img src={webImage} alt="website"/>
              <p>{website}</p>
            </div>
        </div>
    )
}

