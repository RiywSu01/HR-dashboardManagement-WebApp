interface statCard{
    name:string;
    value:number | string;
    icon: React.ReactNode;
}


export default function statsCard({name, value, icon}: statCard){
    return(
        <div className="h-[120px] bg-white rounded-3xl p-4 flex flex-col justify-center border border-solid border-red-500">
            <div className="mb-2">
                {icon}
            </div>
            <div>
                <h1 className="font-bold text-black">{value}</h1>
                <p className="text-gray-500 text-md">{name}</p>
            </div>
        </div>
    );
}