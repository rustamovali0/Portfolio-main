// Work.jsx

import React from "react";
import { useTranslation } from 'react-i18next';
import logo from "../../Images/logo_webcoder.png";

const Work = () => {
  const { t } = useTranslation();

  return (
    <div className="Work">
      <div className="WorkCards">
        
        
        <div className="WorkCard">
          <img src="https://rpanel.navimax.net/assets/photos/logos/full_logo.png" className="img3" alt="" />
          <h1>{t('work.navimax.title')}</h1>
          <h4>March 2022 - 2023</h4>
          <h3>{t('work.navimax.description')}</h3>
        </div>
        <div className="WorkCard">
          <img src="https://senior.az/master%20academy_files/seniorlogohr.svg" className="img1" alt="" />
          <h1>{t('work.senior.title')}</h1>
          <h4>March 2023 - 2024</h4>
          <h3>{t('work.senior.description')}</h3>
        </div>
        <div className="WorkCard">
          <img src={logo} alt="" className="img2"/>
          <h1>{t('work.webcoder.title')}</h1>
          <h4>March 2024 - Present</h4>
          <h3>{t('work.webcoder.description')}</h3>
        </div>
        {/* <div className="WorkCard">
          <img src="https://mobexadmin.wowwer.com/assets/photos/logos/full-logo.svg" className="img3" alt="" />
          <h1>Mobex</h1>
          <h4>March 2024 - Present</h4>
          <h3>{t('work.navimax.description')}</h3>
        </div> */}
        {/* <div className="WorkCard">
          <img src="https://panel.parkomat.az/assets/photos/logos/full_logo.png" className="img3" alt="" />
          <h1>ParkZone</h1>
          <h4>March 2022 - 2023</h4>
          <h3>{t('work.navimax.description')}</h3>
        </div> */}
      </div>
    </div>
  );
};

export default Work;
