import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  const openWebsite = () => {
    window.open("https://senior.az", "_blank");
  };

  return (
    <div className='Experience'>
      <article>
        <h1>{t('experience.title')}</h1>
        <h3>{t('experience.description')}</h3>
      </article>
      <img 
        src="https://senior.az/master%20academy_files/seniorlogohr.svg" 
        alt="Senior Logo" 
        onClick={openWebsite}
      />
    </div>
  );
};

export default Experience;
