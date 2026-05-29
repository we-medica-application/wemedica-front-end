


import { staticImage } from "../lib/assets";

export default function ResultHero() {
    return (
    <>
        <div style={{height: "970px"}}>
            <img className="w-full h-full object-cover" src={staticImage("results_hero.jpg")} alt="Results" />
        </div>
    </>
    );
}