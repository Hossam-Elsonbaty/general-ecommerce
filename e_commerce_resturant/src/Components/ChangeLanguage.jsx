import React,{useState} from 'react';

export default function ChangeLanguage() {
  const [languageAr, setLanguageAr] = useState(true);

  return (
    <div className={`language-button-container ${!languageAr?"en-language":""}`}>
      <div className='chagne-language-ball' onClick={()=>{setLanguageAr(!languageAr)}}>{languageAr?"En":"عربي"}</div>
    </div>
  )
}