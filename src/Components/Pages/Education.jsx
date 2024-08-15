// Education.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();

  const openWebsite = () => {
    window.open("https://au.edu.az", "_blank");
  };

  return (
    <div className='Education'>
      <article>
        <h3>2019-2023</h3>
        <h1>{t('education.university')}</h1>
      </article>
      <img 
        src="https://au.edu.az/userfiles/uploads/f121d135f39f03e48da5fe5e8ced5b0a.jpg" 
        alt="Azerbaijan University Logo" 
        onClick={openWebsite}
        style={{ cursor: 'pointer' }} 
      />
    </div>
  );
};

export default Education;
