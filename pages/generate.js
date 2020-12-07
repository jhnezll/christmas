import React, {useEffect, useState} from "react";
import axios from "axios";
import ImgBox from "../components/ImgBox"

export default function Generate() {

    const [image, setImage] = useState([])
    const [text, setText] = useState("...")


    useEffect(() => {
        const apiRoot = "https://api.unsplash.com"
        const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESSKEY

        axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&query=christmas&count=1&fm=jpg&orientation=landscape`)
            .then(res => setImage([...image, ...res.data]))
    }, [])


    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    return(
        <div>
            <div id="printable" className="h-screen flex flex-col justify-center bg-pink-300 relative">

                <div className="absolute w-full top-0 flex justify-end p-6">
                    <button
                        className="noel-button"
                        onClick={() => window.print()}>
                        Print</button>
                </div>

                <div className="flex flex-col justify-center items-center">
                    {image.map(image => (
                        <ImgBox url={image.urls.full} key={image.id} name={text}/>
                    ))}
                    <form className="text-2xl py-12 px-2">
                        <input
                            className="rounded-lg border-4 border-white text-center bg-pink-300 text-white placeholder-white"
                            type="text"
                            placeholder="Your Name"
                            name="cardText"
                            onChange={handleChange}
                        />
                    </form>
                </div>

            </div>
        </div>

    )
}