import React from "react";
import { useTranslation } from 'react-i18next'; 
import reactLogo from "../../Images/react.png";

const About = () => {
  const { t } = useTranslation(); 

  return (
    <div className="About">
      <article>
        <h4>{t('about.title')}</h4>
        <h1>{t('about.name')}</h1>

        <div class="wrapper">
    <div class="static-txt">{t('about.hoverTitle')}</div>
    <ul class="dynamic-txts">
      <li className="dynamic-li"><span>{t('about.hoverTitle1')}</span></li>
      <li className="dynamic-li"><span>{t('about.hoverTitle2')}</span></li>
      <li className="dynamic-li"><span>{t('about.hoverTitle3')}</span></li>
      <li className="dynamic-li"><span>Freelancer</span></li>
    </ul>
  </div>
  
          <h3>{t('about.aboutMe')}</h3>
        <div className="lineAbout"></div>
        <p>{t('about.subtitle')}</p>
        <p>{t('about.description1')}</p>
        <p>{t('about.description2')}</p>
        <p>{t('about.description3')}</p>
      </article>
      <div className="logoReact">
        <img src={reactLogo} alt="" />
      </div>
    </div>
  );
};

export default About;
