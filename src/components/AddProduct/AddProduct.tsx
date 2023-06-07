
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function AddProduct (){

    const [Nom, setNom] = useState("")
    const [Prix1, setPrix] = useState("")
    const [Image1, setImage] = useState("")
    const [Image2, setImage2] = useState("")
    const [Image3, setImage3] = useState("")
    const [Image4, setImage4] = useState("")
    const [Description, setDescription] = useState("")
    const [Stock1, setStock] = useState("")

    async function  submitAdd(e:Event){

        e.preventDefault();

        const Prix= parseFloat(Prix1)
        const Stock= parseFloat(Stock1)
        const Image = [Image1,Image2,Image3,Image4]
        
        const Produit = {

            Nom,
            Prix,
            Image,
            Description,
            Stock
        }

        try{

            
            const response = await  fetch("http://localhost:3000/products/add", { method: 'POST',   
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(Produit)
        })

        const responseData = await response.json();
        console.log(responseData);


        }

        catch(e){

            throw Error
        }

                
        
    }

    return(

        <div className={`w-full text-center  max-w-xs`}>
        
        <h1 className="my-20">Inscrivez - vous ! </h1>
        {/* <p className=" my-10 text-red-500">{ErrorIncorrect}</p> */}
       
        <form onSubmit={submitAdd} className={` bg-white shadow-md rounded px-8 pt-6 my-10 pb-8 mb-4`}>


            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nom">
                Nom
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Nom" type="text" onKeyUp={(e)=>setNom(e.currentTarget.value)} name="Nom"  placeholder="Nom"/>
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nom">
                Prix
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Prix" type="number" name="Prix" onKeyUp={(e)=>setPrix(e.currentTarget.value)}  placeholder="Prix"/>

            {/* <p className="text-red-500">{ErrorPrix}</p> */}
            </div>


            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Image">
                Image
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Image" type="text" onKeyUp={(e)=>{setImage(e.currentTarget.value); 

            }} name="Image" placeholder="Https//"/>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Image2">
                    Image2
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Image2" type="text" onKeyUp={(e)=>{setImage2(e.currentTarget.value); 
                }} name="Image2" placeholder="Https//"/>


                {/* <p className="text-red-500">{ErrorImage}</p> */}

            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Image3">
                    Image3
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Image3" type="text" onKeyUp={(e)=>{setImage3(e.currentTarget.value); 
                }} name="Image3" placeholder="Https//"/>


                {/* <p className="text-red-500">{ErrorImage}</p> */}

            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Image3">
                    Image4
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Image4" type="text" onKeyUp={(e)=>{setImage4(e.currentTarget.value); 
                }} name="Image4" placeholder="Https//"/>


                {/* <p className="text-red-500">{ErrorImage}</p> */}

            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nom">
                Description
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Description" type="text" name="Description" onKeyUp={(e)=>setDescription(e.currentTarget.value)}  placeholder="Description"/>

            {/* <p className="text-red-500">{ErrorPrix}</p> */}
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nom">
                Stock
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Description" type="number" name="Stock" onKeyUp={(e)=>setStock(e.currentTarget.value)}  placeholder="Stock"/>

            {/* <p className="text-red-500">{ErrorPrix}</p> */}
            </div>


            <div className="flex items-center justify-between">
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Add
            </button>
         
            </div>
        </form>
 
</div>
    )


}