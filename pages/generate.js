import React, {useState, useEffect} from "react";
import Header from "../components/Generator/Header"
import Loader from "../components/Generator/Loader";
import UnsplashImage from "../components/Generator/UnsplashImage";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

//Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    bot-sizing: border-box;
  }
  
  body {
    font-family: sans-serif;
  }
`;

const WrapperImage = styled.section`
  max-width: 75rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

export default function Generate() {
    const [images, setImages] = useState([])


    useEffect(() => {
        fetchImages()
    }, [])

    function fetchImages() {
        const apiRoot = "https://api.unsplash.com"
        const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESSKEY

        axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=3&query=christmas`)
            .then(res => setImages([...images,...res.data]))
    }

    return(
        <div className="bg-pink-300">
            <Header/>
            <GlobalStyle/>
            <InfiniteScroll next={fetchImages} hasMore={true} loader={<Loader/>} dataLength={images.length}>
                <div className="bg-white">
                    <WrapperImage>
                        {images.map(image => (
                            <UnsplashImage url={image.urls.full} key={image.id}/>
                        ))}
                    </WrapperImage>
                </div>
            </InfiniteScroll>
        </div>
    )
}