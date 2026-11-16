interface statCard{
    name:string;
    value:number | string;
    icon: React.ReactNode;
}


export default function statsCard({name, value, icon}: statCard){
    return(
        <div className="bg-white card-1 grow size-45 flex flex-col justify-center p-4 border border-solid border-red-500 rounded-3xl">
            <div className="flex justify-center items-center rounded-xl bg-white size-10 mb-2 ">
                {icon}
            </div>
            <div>
                <h1 className="font-bold text-black">{value}</h1>
                <p className="text-gray-500 text-md">{name}</p>
            </div>
        </div>
    );
}