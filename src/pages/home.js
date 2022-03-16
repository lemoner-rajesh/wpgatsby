import React from 'react'
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"


export default function home() {
  return (
    <Layout>
        <div>
        <h1>Static Images</h1>
        <h6>Image Size: 10MB </h6>
        <StaticImage src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Pizigani_1367_Chart_10MB.jpg" alt="10mb" />
        <p>Image Location: Remote</p>
                       
        <StaticImage src="../images/Pizigani_1367_Chart_10MB.jpeg" alt="10mb" />


        <br/>
        <h6>Image Size: 10.5MB </h6>
        <StaticImage src="../images/pexels-lisa-fotios-1540258.jpg" alt="10mb" /> 
<p>Photo by Lisa Fotios from Pexels</p>
<h6>Image Size: 12.8MB </h6>
<StaticImage src="../images/pexels-tom-fisk-1519753.jpg" alt="10mb" /> 
<p>Photo by Tom Fisk from Pexels</p>
<h6>Image Size: 12.5MB </h6>
<StaticImage src="../images/pexels-zhang-kaiyv-1138369.jpg" alt="10mb" /> 
<p>Photo by zhang kaiyv from Pexels</p>
<h6>Image Size: 15.5MB </h6>
<StaticImage src="../images/teahub.io-bilder-wallpaper-1669233.jpg" alt="10mb" /> 
<h6>Image Size: 5.4MB </h6>
<StaticImage src="../images/teahub.io-fine-wallpaper-1832397.jpg" alt="10mb" /> 


        </div>


    </Layout>
  )
}
