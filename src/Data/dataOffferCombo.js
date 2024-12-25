import img1 from '../Images/Crispy-fried-chicken-burgers_5.webp';
import img2 from '../Images/Smash-Burger.webp';

const temporaryComboData=[
  {
    id:1,
    name:"كومبو الجمدان",
    describtion:"ساندويتش من اختيارك مع بطاطس ومشروب واضافة مجانا",
    img:img1,
    startPrice:150,
    comboCategories:[
      {
        id:1,
        name:"اختيارك",
        items:[
          {
            id: 1,
            name: " برجر لحم",
            describtion:"برجر بالمخلل والصوص والمشروم",
            additionalPrice: 0,
            image: img2
          },
          {
            id: 2,
            name: " برجر دجاج",
            describtion:"برجر دجاج بالمخلل والصوص والمشروم",
            additionalPrice: 10,
            image: img2
          },
          {
            id:3,
            name: " برجر دجاج ولحم",
            describtion:"برجر دجاج ولحم بالمخلل والصوص بيف بيكن",
            additionalPrice: 30,
            image: img2
          },
        ]
      },
      {
        id:50,
        name:"بطاطس",
        items:[
          {
            id: 1,
            name: " برجر لحم",
            describtion:"برجر بالمخلل والصوص والمشروم",
            additionalPrice: 0,
            image: img2
          },
          {
            id: 2,
            name: " برجر دجاج",
            describtion:"برجر دجاج بالمخلل والصوص والمشروم",
            additionalPrice: 20,
            image: img2
          },
        ]
      },
      {
        id:3,
        name:"مشروب",
        items:[
          {
            id: 1,
            name: " برجر لحم",
            describtion:"برجر بالمخلل والصوص والمشروم",
            additionalPrice: 0,
            image: img2
          },
          {
            id: 2,
            name: " برجر دجاج",
            describtion:"برجر دجاج بالمخلل والصوص والمشروم",
            additionalPrice: 40,
            image: img2
          },
        ]
      },
      {
        id:4,
        name:"اضافة",
        items:[
          {
            id: 1,
            name: " برجر لحم",
            describtion:"برجر بالمخلل والصوص والمشروم",
            additionalPrice: 0,
            image: img2
          },
          {
            id: 2,
            name: " برجر دجاج",
            describtion:"برجر دجاج بالمخلل والصوص والمشروم",
            additionalPrice: 20,
            image: img2
          },
        ]
      },
    ]
  }
]

export default temporaryComboData;
