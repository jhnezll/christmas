import React, {useEffect, useState} from "react";
import axios from "axios";
import ImgBox from "../components/ImgBox"

export default function Generate() {

    const [image, setImage] = useState([])
    const [text, setText] = useState("And happy holidays")

    useEffect(() => {
        const apiRoot = "https://api.unsplash.com"
        const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESSKEY

        axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&query=christmas&count=1&fm=jpg&orientation=landscape`)
            .then(res => setImage([...image, ...res.data]))
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setText({value})
    }

    return(
        <div>
            <div className="h-screen flex flex-col justify-center items-center bg-pink-300">

                {image.map(image => (
                    <ImgBox url={image.urls.full} key={image.id} name={text}/>
                ))}
                <form className="text-2xl py-12 px-2">
                    <input
                        className="rounded border-4 border-white text-center bg-pink-300 text-white placeholder-white"
                        type="text"
                        name="text"
                        placeholder="Insert Name"
                        value={text}
                        onChange={handleChange}
                    />
                </form>
            </div>


        </div>

    )
}