const express = require('express');
const router = express.Router();
const furniture =[
    // Beds
    {
      id: "1",
      name: "Queen-size Bed Frame",
      company: "Sweet Dreams",
      price: 499.99,
      colors: ["#ffffff", "#f2f2f2", "#d6d6d6"],
      image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "This queen-size bed frame is made of durable materials and provides a comfortable sleeping experience. It comes in a variety of colors to match your bedroom decor.",
      category: "bed",
      shipping: true,
    },
    {
      id: "2",
      name: "King-size Platform Bed",
      company: "Rest Assured",
      price: 699.99,
      colors: ["#e0e0e0", "#c2c2c2", "#808080"],
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "This king-size platform bed offers a modern and stylish look for your bedroom. It features a low profile design and a sturdy platform base.",
      category: "bed",
    },
    {
      id: "3",
      name: "Bunk Bed with Desk",
      company: "Space Savers",
      price: 399.99,
      colors: ["#d6d6d6", "#b3b3b3", "#999999"],
      image: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "This bunk bed with desk is perfect for maximizing space in a small bedroom. It features two twin-size beds and a built-in desk underneath.",
      category: "bed",
    },
  
    // Sofas
    {
      id: "4",
      name: "Modern Sofa",
      company: "Cozy Home",
      price: 2999.99,
      colors: ["#f5f5f5", "#7788aa", "#333333"],
      image: "https://images.pexels.com/photos/8894804/pexels-photo-8894804.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description: "This comfortable and stylish sofa is perfect for relaxing in your living room. It features plush cushions, a sturdy frame, and a variety of colors to choose from.",
      category: "sofa",
      featured: true,
    },
    {
        id: "5",
        name: "Modern Sofa",
        company: "Cozy Home",
        price: 2999.99,
        colors: ["#f5f5f5", "#7788aa", "#333333"],
        image: "https://images.pexels.com/photos/12277216/pexels-photo-12277216.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "It features plush cushions, a sturdy frame, and a variety of colors to choose from.",
        category: "sofa",
        featured: true,
      },
      {
        id: "6",
        name: "Modern Sofa",
        company: "Cozy Home",
        price: 2999.99,
        colors: ["#f5f5f5", "#7788aa", "#333333"],
        image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "Perfect for relaxing in your living room. It features plush cushions, a sturdy frame",
        category: "sofa",
        featured: true,
      },
      {
        id: "7",
        name: "Modern Sofa",
        company: "Cozy Home",
        price: 2999.99,
        colors: ["#f5f5f5", "#7788aa", "#333333"],
        image: "https://images.pexels.com/photos/8477454/pexels-photo-8477454.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "Stylish sofa is perfect for relaxing in your living room. It features plush cushions, a sturdy frame, and a variety of colors to choose from.",
        category: "sofa",
        featured: true,
      },
      {
        id: "8",
        name: "Modern Sofa",
        company: "Cozy Home",
        price: 2999.99,
        colors: ["#f5f5f5", "#7788aa", "#333333"],
        image: "https://images.pexels.com/photos/9368696/pexels-photo-9368696.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "This comfortable and stylish sofa is perfect for relaxing in your living room. It features plush cushions, a sturdy frame, and a variety of colors to choose from.",
        category: "sofa",
        featured: true,
      },

    
    {
      id: "9",
      name: "L-shaped Sectional Sofa",
      company: "Allete Sofa",
      price: 4999.99,
      colors: ["#e0e0e0", "#c2c2c2", "#808080"],
      image: "https://images.pexels.com/photos/8135491/pexels-photo-8135491.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description: "This L-shaped sectional sofa provides ample seating for your family and guests. It features a modular design that allows you to configure it to fit your space.",
      category: "sofa",
    },
      //Table
    {
      id: "10",
      name: "Allete Table",
      company: "Space Savers",
      price: 599.99,
      colors: ["#d6d6d6", "#b3b3b3", "#999999"],
      image: "https://images.pexels.com/photos/15269328/pexels-photo-15269328/free-photo-of-sofa-and-table-in-a-living-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description: "This futon table is a versatile piece of furniture that can be used at any where. It features a foldable design that makes it easy to switch between functions.",
      category: "Table",
    },
    {
        id: "11",
        name: "Dinning Table",
        company: "Space Savers",
        price: 599.99,
        colors: ["#d6d6d6", "#b3b3b3", "#999999"],
        image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "This futon table is a versatile piece of furniture that can be used at any where. It features a foldable design that makes it easy to switch between functions.",
        category: "Table",
      },
      {
        id: "12",
        name: "Office Table",
        company: "Space Savers",
        price: 599.99,
        colors: ["#d6d6d6", "#b3b3b3", "#999999"],
        image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600",
        description: "versatile piece of furniture that can be used Office. It features a foldable design that makes it easy to switch between functions.",
        category: "Table",
      },
      {
        id: "13",
        name: "Kitchen Table",
        company: "Space Savers",
        price: 599.99,
        colors: ["#d6d6d6", "#b3b3b3", "#999999"],
        image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "This futon table is a versatile piece of furniture that can be used at any where in Kitchen. It features a foldable design that makes it easy to switch between functions.",
        category: "Table",
      },
//chairs
{
    id: "14",
    name: "Appealing chair",
    company: "Space Savers",
    price: 599.99,
    colors: ["#d6d6d6", "#b3b3b3", "#999999"],
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "This futon Chair is a versatile piece of furniture that can be used at any where in Kitchen. It features a foldable design that makes it easy to switch between functions.",
    category: "Chair",
  },
  {
    id: "15",
    name: "Stylish Chair",
    company: "Space Savers",
    price: 599.99,
    colors: ["#d6d6d6", "#b3b3b3", "#999999"],
    image: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "This futon Chair is a versatile piece of furniture that can be used at any where in Kitchen. It features a foldable design that makes it easy to switch between functions.",
    category: "Chair",
  },
  {
    id: "16",
    name: "Allete Chair",
    company: "Space Savers",
    price: 599.99,
    colors: ["#d6d6d6", "#b3b3b3", "#999999"],
    image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "This futon Chair is a versatile piece of furniture that can be used at any where in Kitchen. It features a foldable design that makes it easy to switch between functions.",
    category: "Chair",
  },
  {
    id: "17",
    name: "Classical Chairs",
    company: "Space Savers",
    price: 599.99,
    colors: ["#d6d6d6", "#b3b3b3", "#999999"],
    image: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "This futon Chair is a versatile piece of furniture that can be used at any where in Kitchen. It features a foldable design that makes it easy to switch between functions.",
    category: "Chair",
  },
  {
    id: "18",
    name: "Office Chair",
    company: "Space Savers",
    price: 599.99,
    colors: ["#d6d6d6", "#b3b3b3", "#999999"],
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "This futon Chair is a versatile piece of furniture that can be used at any where in Kitchen. It features a foldable design that makes it easy to switch between functions.",
    category: "Chair",
  },
  {
    id: "19",
    name: "Nice Bed",
    company: "Space Savers",
    price: 399.99,
    colors: ["#d6d6d6", "#b3b3b3", "#999999"],
    image: "https://images.pexels.com/photos/4112558/pexels-photo-4112558.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "This bunk bed with desk is perfect for maximizing space in a small bedroom. It features two twin-size beds and a built-in desk underneath.",
    category: "bed",
  },

  {
    id: "20",
    name: "Bed with Desk",
    company: "Space Savers",
    price: 399.99,
    colors: ["#d6d6d6", "#b3b3b3", "#999999"],
    image: "https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "This bunk bed with desk is perfect for maximizing space in a small bedroom. It features two twin-size beds and a built-in desk underneath.",
    category: "bed",
  },
  {
    id: "21",
    name: "Ellite Bed ",
    company: "Space Savers",
    price: 399.99,
    colors: ["#d6d6d6", "#b3b3b3", "#999999"],
    image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "This bunk bed with desk is perfect for maximizing space in a small bedroom. It features two twin-size beds and a built-in desk underneath.",
    category: "bed",
  },
]
  
  

router.get(`/`, function (req, res) {
    res.status(200).json(furniture);
});
router.post(`/`, function (req, res) {
    const { name, year, rating } = req.body;
    res.status(200).json([...furniture, { id: furniture.length + 1, name, year, rating }]);
});
router.delete(`/`, function (req, res) {
    const { id } = req.body;
    res.status(200).json(furniture.filter(movie => movie.id !== id));
});
module.exports = router;