import product1 from '../Images/Done1.jpg';
import product2 from '../Images/Done2.jpg';
import product3 from '../Images/Done3.jpg';
import product4 from '../Images/Done4.jpg';
import product5 from '../Images/Done5.jpg';
import product6 from '../Images/Done6.jpg';
import product7 from '../Images/Done7.jpg';
import product8 from '../Images/Done8.jpg';
const productData = [
  { 
    id: 1,
    name: "غوتشي ابسليوت عطر للنساء 90 مل",
    price: 100,
    image: product1,
    availability: "متبقي 2 فقط.",
    brand:"غوتشي",
    sizesAndPrices:[
      {id:24,size:"150 gm",price:"100"},
      {id:23,size:"400X500",price:"250"},
      {id:22,size:"1 kg",price:"70"},
    ]
  },
  { 
    id: 2, 
    name: "باكو رابان بلاك اكس اس عطر للرجال 100 مل", 
    price: 4000, 
    image: product2, 
    availability: "متبقي 2 فقط.",
    brand: "باكو",
    sizesAndPrices:[
      {id:21,size:"150 gm",price:"100"},
      {id:20,size:"400X500",price:"250"},
      {id:19,size:"1 kg",price:"70"},
    ]
  },
  { 
    id: 3, 
    name: "امبوريو ارماني سترونجر وذ يو عطر الرجال 100 مل", 
    price: 800, 
    image: product3, 
    availability: "متبقي 2 فقط." ,
    brand:"امبوريو",
    sizesAndPrices:[
      {id:18,size:"150 gm",price:"100"},
      {id:17,size:"400X500",price:"250"},
      {id:16,size:"1 kg",price:"70"},
    ]
  },
  { 
    id: 4, 
    name: "لاكوست بلانك L12 – 12 عطر الرجال 100 مل", 
    price:300, 
    image: product4, 
    availability: "متبقي 2 فقط." ,
    brand:"لاكوست بلانك",
    sizesAndPrices:[
      {id:15,size:"150 gm",price:"100"},
      {id:14,size:"400X500",price:"250"},
      {id:13,size:"1 kg",price:"70"},
    ]
  },
  { 
    id: 5, 
    name: "جيفنشي جنتل مان عطر للرجال 100 مل", 
    price: 10000, 
    image: product5, 
    availability: "متبقي 2 فقط." ,
    brand:"جيفنشي",
    sizesAndPrices:[
      {id:12,size:"150 gm",price:"100"},
      {id:10,size:"400X500",price:"250"},
      {id:11,size:"1 kg",price:"80"},
    ]
  },
  { 
    id: 6, 
    name: "شوبارد عطر عود ملكي للجنسين 80 مل", 
    price: 2500, 
    image: product6, 
    availability: "متبقي 2 فقط." ,
    brand:"شوبارد",
    sizesAndPrices:[
      {id:9,size:"150 gm",price:"100"},
      {id:8,size:"400X500",price:"250"},
      {id:7,size:"1 kg",price:"70"},
    ]
  },
  { 
    id: 7, 
    name: "جان بول جولتيير لابيلا عطر للنساء 100 مل", 
    price: 8, 
    image: product7, 
    availability: "متبقي 2 فقط." ,
    brand:"جان بول",
    sizesAndPrices:[
      {id:6,size:"150 gm",price:"100"},
      {id:5,size:"400X500",price:"250"},
      {id:4,size:"1 kg",price:"70"},
    ]
  },
  { 
    id: 8, 
    name: "جان بول سكاندال جولتيير عطر للنساء 80 مل", 
    price: 5000, 
    image: product8, 
    availability: "متبقي 2 فقط." ,
    brand:"جان بول",
    sizesAndPrices:[
      {id:3,size:"150 gm",price:"100"},
      {id:2,size:"400X500",price:"250"},
      {id:1,size:"1 kg",price:"70"},
    ]
  },
  // Add more products as needed
];

export default productData;
