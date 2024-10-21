import { cn } from "~/lib/utils";

export default function HomePage() {
    const array = Array.from({ length: 12 }).fill(0)
    const colors = [
        'bg-green-400',
        'bg-red-400',
        'bg-orange-400',
        'bg-zinc-400',
        'bg-yellow-400',
        'bg-blue-400'
    ]
    return (
        <div className="col-span-12 min-h-screen grid grid-cols-4 bg-blue-600">
            <div className="bg-green-400">
                <p className="font-bold text-4xl text-white text-center">1</p>
            </div>
            <div className="bg-red-400">
                <p className="font-bold text-4xl text-white text-center">2</p>
            </div>
            <div className="bg-orange-400">
                <p className="font-bold text-4xl text-white text-center">3</p>
            </div>
            <div className="bg-zinc-400">
                <p className="font-bold text-4xl text-white text-center">4</p>
            </div>
            <div className="bg-yellow-400">
                <p className="font-bold text-4xl text-white text-center">5</p>
            </div>
            <div className="bg-blue-400">
                <p className="font-bold text-4xl text-white text-center">6</p>
            </div>
            <div className="bg-green-400">
                <p className="font-bold text-4xl text-white text-center">7</p>
            </div>
            <div className="bg-red-400">
                <p className="font-bold text-4xl text-white text-center">8</p>
            </div>
            <div className="bg-orange-400">
                <p className="font-bold text-4xl text-white text-center">9</p>
            </div>
            <div className="bg-zinc-400">
                <p className="font-bold text-4xl text-white text-center">10</p>
            </div>
            <div className="bg-yellow-400">
                <p className="font-bold text-4xl text-white text-center">11</p>
            </div>
            <div className="bg-blue-400">
                <p className="font-bold text-4xl text-white text-center">12</p>
            </div>

        </div>
    );
}
