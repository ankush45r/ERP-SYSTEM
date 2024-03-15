import { createContext } from "react";
import { useState } from "react";
import data from "./gallery";

import productContext from "./context";
const ContextProvider = ({children}) =>{
    let [currentType,setCurrentType] = useState('Fruits');
    const [orders, setOrders] = useState([{
        id : 1,
        customer: 'Ankush kumar',
        total : 4
      },{
        id : 2,
        customer: 'Rajnish kumar',
        total : 5
      },{
        id : 3,
        customer: 'Harshit Sinha',
        total : 10
      },{
        id : 4,
        customer: 'Aniket kumar',
        total : 4
      },{
        id : 5,
        customer: 'Abhinav kumar',
        total : 2
      }
    ]);
    const [productList,setProductList]=useState([{
        id : '1',
        type : 'Fruits',
        name :"Apple",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8_j8xxqBXGCwr1do3aGbOi7kBnRYJjTUYg&usqp=CAU",
        title: "Apple",
        content: "Apples are delicious and nutritious fruits that are high in fiber and vitamin C. They come in various colors, including red, green, and yellow, and have a crunchy texture. Apples can be eaten fresh, used in cooking and baking, or made into juice or cider.",
        quantity: 5
    },{
        id : '2',
        type : 'Fruits',
        name :"grapes",
        src: "https://cdn.pixabay.com/photo/2014/12/28/18/22/grapes-582207_640.jpg",
        title: "Grapes",
        content: "Grapes are small, round or oval berries that grow on vines. They come in various colors such as green, red, and purple. Grapes are rich in vitamins, particularly vitamin C and vitamin K. They also contain antioxidants and other beneficial nutrients.",
        quantity: 4
    },
    {
        id : '4',
        type : 'Furnitures',
        name :"Furnitures",
        src: data.Studytable,
        title: "Study table",
        content: "Study tables are small, round or oval berries that grow on vines. They come in various colors such as green, red, and purple  are rich in vitamins, particularly vitamin C and vitamin K. They also contain antioxidants and other beneficial nutrients.",
        quantity: 8
    },
    {
        id : '16',
        type : 'Furnitures',
        name :"table",
        src: data.table,
        title: "Table",
        content: "Gtudy tables are small, round or oval berries that grow on vines. They come in various colors such as green, red, and purple  are rich in vitamins are rich in vitamins, particularly vitamin C and vitamin K. They also contain antioxidants and other beneficial nutrients.",
        quantity: 4
    },
    {
        id : '200',
        type : 'Toys',
        name :"toy",
        src: data.motorcycle,
        title: "Motorcycle",
        content: "Toy Motorcycle are small, round or oval berries that grow on vines. They come in various colors such as green, red, and purple. Grapes are rich in vitamins, particularly vitamin C and vitamin K. They also contain antioxidants and other beneficial nutrients.",
        quantity: 4
    },
    {
        id : '100',
        type : 'Toys',
        name :"toy",
        src: data.car,
        title: "Car",
        content: "Toy car, round or oval berries that grow on vines. They come in various colors such as green, red, and purple. Grapes are rich in vitamins, particularly vitamin C and vitamin K. They also contain antioxidants and other beneficial nutrients.",
        quantity: 1
    },
    {
        id : '50',
        type : 'Stationaries',
        name :"stationary",
        src: data.copy,
        title: "Copy",
        content: "portable repository for our thoughts, ideas, plans, and memories. It's a blank canvas where we pour out our innermost thoughts, scribble down to-do lists, sketch out designs, or jot down the next great novel.",
        quantity: 2
    },
    {
        id : '32',
        type : 'Stationaries',
        name :"Pen",
        src: data.pen,
        title: "Pen",
        content: "Pens are ubiquitous tools that have been instrumental in human communication and creativity for centuries. From jotting down notes to drafting elaborate manuscripts, pens serve as indispensable companions in our daily lives.",
        quantity: 6
    },
    {
        id : '20',
        type : 'Cloths',
        name :"Jeans",
        src: data.jeans,
        title: "Jeans",
        content: "Jeans are small, round or oval berries that grow on vines. They come in various colors such as green, red, and purple. Grapes are rich in vitamins, particularly vitamin C and vitamin K. They also contain antioxidants and other beneficial nutrients.",
        quantity: 10
    },
    {
        id : '10',
        type : 'Cloths',
        name :"T-shirt",
        src: data.tshirt,
        title: "T-shirt",
        content: "T-shirts are small, round or oval berries that grow on vines. They come in various colors such as green, red, and purple. Grapes are rich in vitamins, particularly vitamin C and vitamin K. They also contain antioxidants and other beneficial nutrients.",
        quantity: 5
    }]);

    const [productNameSet,setProductNameSet] = useState(['Fruits','Furnitures','Toys','Stationaries','Cloths'])

    const insertProductName = () =>{

    }
    const handleSetCurrentType = (data) =>{
        setCurrentType(data);
        console.log(currentType)
    }
    const insertProduct = ({product})=>{
        let items = productList;
        items = [product,...productList]
        setProductList(items)
    }

    const generateRandomId = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
        for (let i = 0; i < length; i++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return id;
    };

    const deleteProduct = (id)=>{
        let items = productList;
        items=items.filter(item=> item.id!==id);
        setProductList(items);
    }
    return <productContext.Provider value = {{productList,insertProduct,deleteProduct,productNameSet,currentType,setProductNameSet,handleSetCurrentType,generateRandomId,orders,setOrders}}>{children}
    </productContext.Provider>
}
export default ContextProvider