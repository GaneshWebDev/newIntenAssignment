import { useEffect,useState } from "react"
interface ExploreProps{
    header:number,
    search:number,
    selectedIcon:string
}
export default function Merchant({header,search,selectedIcon}:ExploreProps){
    const [topM,setTop]=useState(0);
    /* using dynamic heights of header and search bar for top of this page */
    useEffect(()=>{
        setTop(header+search+5);
        console.log(search,header)
    },[header,search]);
    useEffect(()=>console.log(topM,'ii'),[topM])
    const userArray=[
        {
            name:'Pragna Sri',
            city:'Vijayawada',
            image:'data:image/webp;base64,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',
            role:'Merchant',
            intrest:['Coffee','Business','Friendship'],
            message:'Hi community! I am open to new connection'
        }
    ]
    return(
        <>
    {selectedIcon=='explore'&&<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 w-[90%] mx-auto overflow-y-auto" style={{marginTop:topM }}>
       {userArray.map((user)=>{
            return(
                <div className="p-1 cursor-pointer">
                <div className=" h-auto max-w-full rounded-lg  bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5 font-bold" type="button">
                            + Invite
                        </button>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.image} alt="Bonnie image"/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{user.city} | {user.role}</span>
                        <div className="flex flex-col items-center text-center mt-4 md:mt-6">
                            <span className="text-gray-500">Coffee | Business | Friendship</span>
                            <p className="w-[60%] text-gray-900 dark:text-white">{user.message}</p>
                        </div> 
                    </div>
                </div>
    
            </div>
            )
        })}
        
    </div>}
        {selectedIcon=='contacts'&&<div className="flex flex-col gap-6 justify-center items-center h-[100vh]" >
        <img src='contact-list.png' className="w-20 h-20"/>
        <p className="font-bold">Your contact list is <span className="text-orange-500">EMPTY</span></p>
      </div>}
      {selectedIcon=='groups'&&<div className="flex flex-col gap-6 justify-center items-center h-[100vh]" >
        <img src='search.png' className="w-20 h-20"/>
        <p className="font-bold">Your explore list is <span className="text-orange-500">EMPTY</span></p>
      </div>}
      </>
    )
}