import React, {useEffect, useState} from "react";
import axios from "axios";
import ImgBox from "../components/ImgBox"

export default function Generate() {

    const [image, setImage] = useState([])

    useEffect(() => {
        const apiRoot = "https://api.unsplash.com"
        const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESSKEY

        axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&query=christmas&count=1&fm=jpg&orientation=landscape`)
            .then(res => setImage([...image, ...res.data]))
    }, [])

    return(
        <div className="h-screen flex justify-center items-center bg-pink-300">
            {image.map(image => (
              <ImgBox url={image.urls.full} key={image.id}/>
            ))}
        </div>
    )
}