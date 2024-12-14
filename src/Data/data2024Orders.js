import product1 from '../Images/Done1.jpg';
import product2 from '../Images/Done2.jpg';
import product3 from '../Images/Done3.jpg';
import product4 from '../Images/Done4.jpg';
import product5 from '../Images/Done5.jpg';
import product6 from '../Images/Done6.jpg';
import product7 from '../Images/Done7.jpg';
import product8 from '../Images/Done8.jpg';
const Orders2024 = [
  {
    id:"1",
    orderNo:"32X6Q8",
    orderPlaced:"23-9-2024 10:50 AM",
    orderYear:"2024",
    state:"تم الارسال",
    stateDeclareText:"طلبك تم ارساله",
    deliveryTax:"15",
    deliveryAddress:"الارسال الى محمد عبدالله | مصر -سوهاج -شارع الشهيد-بناية 15 بجوار السوق",
    total:"16315",
    products:[
      { 
        id: 1,
        name: "غوتشي ابسليوت عطر للنساء ",
        volume: "الحجم 90 مل",
        quantity: "عدد 3 عبوات",
        price: 100,
        image: product1,
        brand:"غوتشي"
      },
      { 
        id: 2,
        name: "باكو رابان بلاك اكس اس عطر للرجال  ", 
        price: 4000, 
        volume: "الحجم 100 مل",
        quantity: "عدد 2 عبوات",
        image: product2,
        brand:"باكو"
      },
      { 
        id: 3, 
        name: "امبوريو ارماني سترونجر وذ يو عطر الرجال", 
        price: 800, 
        volume: "الحجم 100 مل",
        quantity: "عدد 10 عبوات",
        image: product3, 
        brand:"امبوريو"
      },
    ]
  },
  {
    id:"2",
    orderNo:"32X6Q9",
    orderPlaced:"22-3-2024 11:50 AM",
    orderYear:"2024",
    state:"تم التسليم",
    stateDeclareText:" تم استلام الطلب ",
    deliveryTax:"15",
    deliveryAddress:"الارسال الى زياد محمد | مصر -القاهرة -شارع محمد علي-بناية 20  ",
    total:"10415",
    products:[
      { 
        id: 1,
        name: "غوتشي ابسليوت عطر للنساء ",
        volume: "الحجم 90 مل",
        quantity: "عدد 3 عبوات",
        price: 100,
        image: product1,
        brand:"غوتشي"
      },
      { 
        id: 4, 
        name: "لاكوست بلانك L12 – 12 عطر الرجال ", 
        volume: "الحجم 100 مل",
        quantity: "عدد 1 عبوة",
        price:300, 
        image: product4, 
        brand:"لاكوست بلانك"
      },
      { 
        id: 5, 
        name: "جيفنشي جنتل مان عطر للرجال ",
        volume: "الحجم 100 مل",
        quantity: "عدد 1 عبوة", 
        price: 10000, 
        image: product5, 
        brand:"جيفنشي"
      },
      { 
        id: 6, 
        name: "شوبارد عطر عود ملكي للجنسين  ", 
        volume: "الحجم 80 مل",
        quantity: "عدد 1 عبوة",
        price: 2500, 
        image: product6, 
        brand:"شوبارد"
      },
      
    ]
  },
  {
    id:"3",
    orderNo:"32X6Q1",
    orderPlaced:"12-7-2024 11:30 AM",
    orderYear:"2024",
    state:"تم التسليم",
    stateDeclareText:" تم استلام الطلب ",
    deliveryTax:"15",
    deliveryAddress:"الارسال الى مهند احمد | مصر -بني سويف -شارع ابي بكر الصديق-بناية 20  ",
    total:"5031",
    products:[
      { 
        id: 7,
        name: "جان بول جولتيير لابيلا عطر للنساء", 
        price: 8, 
        image: product7, 
        volume: "الحجم 100 مل",
        quantity: "عدد 2 عبوات",
        brand:"غوتشي"
      },
      { 
        id:8, 
        name: "جان بول سكاندال جولتيير عطر للنساء", 
        price: 5000, 
        volume: "الحجم 80 مل",
        quantity: "عدد 1 عبوة",
        image: product8, 
        brand:"لاكوست بلانك"
      },
    ]
  }
];

export default Orders2024;
