import Timeline from "../component/Timeline";
import React from "react";

function Home() {
    return (
        <div className="p-12 mt-28">
            <b className="text-3xl">Hello I'm <br /> KANTINAN</b>
            <p>I am a frontend developer proficient <br />
                in designing exceptional UX/UI experiences. <br />
                My expertise lies in the Flutter framework, <br />
                where I excel in creating captivating
                cross-platform applications.</p>
                <div className="flex justify-center mt-32">
                    <b className="text-3xl">Experience</b>
                </div>
                <Timeline />
                <div className="flex-col mt-32 text-center">
                    <b className="text-3xl">Cross Platfrom</b>
                    <p>iOS Android Website</p>
                </div>
        </div>
    );
}

export default Home;