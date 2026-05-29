import { staticImage } from "../lib/assets";

export default function HomeHero() {
    return (
        <div className="bg-fixed" >
            <div className="bg-fixed bg-no-repeat bg-top bg-gradient-to-r  from-cyan-500 to-blue-500" >

                <img src={staticImage("img7.jpg")} alt="image for header hero" width="100%" height="10px" />

            </div>
        </div>
    );
}
