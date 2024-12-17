import React from 'react';
import Swiper from '../Components/Offers';
import HomeHealthStateSection from './HomeHealthStateSection';
import HomeAgeClassifySection from './HomeAgeCassifySection';
import FromAtoZSection from './FromAtoZSection';
import HomeCategoriesSection from './HomeCategoriesSection';
import {HomeCompoSection} from './HomeCompoSection';
import {BestSeller} from './BestSeller';
import {NewArrival} from './NewArrival';
import HomeBrandsSection from './HomeBrandsSection';

export default function Sections() {
  return (
    <section className='sections-container'>
      <HomeCategoriesSection></HomeCategoriesSection>
      <HomeCompoSection/>
      <NewArrival/>
      <BestSeller/>
      {/* <HomeHealthStateSection></HomeHealthStateSection>
      <HomeAgeClassifySection></HomeAgeClassifySection>
      <FromAtoZSection></FromAtoZSection>
      <HomeBrandsSection></HomeBrandsSection> */}
    </section>
  )
}


// import React from 'react';
// import sectionData from '../Data/dataSections';
// import SectionCard from './SectionCard';
// import FromAtoZSection from './FromAtoZSection';
// export default function Sections() {
//   return (
//     <section className='sections-container'>
//       {sectionData.map(section => (
//         <SectionCard key={section.id} section={section} />
//       ))}
//     </section>
//   )
// }
