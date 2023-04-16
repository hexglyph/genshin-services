export type Region = {
    price: number;
    id: number;
    name: string;
    subregions: Subregion[];
};

export type Subregion = {
    id: number;
    name: string;
    price: number;
};


export default function Region({ region }: { region: Region }) {
    return (
        <div className="bg-white p-4 rounded shadow-md shadow-pink-400/50 border-b-2 border-pink-500">
            <h2 className="text-xl font-bold">{region.name}</h2>
            <h3 className="text-pink-900 text-xl font-bold">R${region.price.toFixed(2)}</h3>
            <ul>
                {region.subregions.map((subregion) => (
                    <li key={subregion.id}>
                        {subregion.name} - <span className="text-pink-900">R${subregion.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}