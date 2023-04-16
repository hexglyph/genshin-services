export type Service = {
    id: number;
    name: string;
    description: string;
    price: number;
};

export default function Service({ service }: { service: Service }) {
    const [ptDescription, enDescription] = service.description.split(" / ");

    return (
        <div className="bg-white p-4 rounded shadow-md shadow-pink-400/50 border-b-2 border-pink-500">
            <h2 className="text-xl font-bold">{service.name}</h2>
            <span className="pt-description font-semibold">{ptDescription}</span>
            <br />
            <span className="en-description text-xs">{enDescription}</span>
            <p className="text-pink-900 font-bold text-xl">R${service.price.toFixed(2)}</p>
        </div>
    );
}
