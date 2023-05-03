import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import ReactLoading from "react-loading";
import Loading from '../Loading/Loading';
import './Research.css';

const Research = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => setLoading(false), 900)
    }, [])
    return(
        <>
        {loading === false ? (
            <div>
                <Header></Header>
           <br></br>
           <div style={{"marginLeft" : "30px"}}>
               <p className='researchHeading'>Major Research Topics</p>
               <div>
               <ul style={{"marginLeft" : "2px"}}>
                    <li>Sensing, machine vision, and control for agricultural automation and mechanization</li>
                    <li>Field robotics and human-machine collaboration for agriculture</li>
                    <li>Agricultural systems modeling, simulation, and control</li>
                </ul>
               </div>
           </div>
           <div style={{"marginLeft" : "30px"}}>
               <p className='researchSelectedProjects'>Selected Projects</p>
               <div>
               <ul style={{"marginLeft" : "2px"}}>
                    <li>Robotic pollination in fruit crops – USDA Multi-State Specialty Crop Grant Program</li>
                    <li>Multi-robot, coordinated strawberry harvesting – NSF National Robotics Initiative</li>
                    <li>SMART Irrigation System using IoT and Big Data Analytics – NSF/USDA Cyber Physical Systems Program</li>
                    <li>A Robotic System for Fruit Tree Pruning – Washington Tree Fruit Research Commission</li>
                    <li>A Multi-purpose Robotic System for Tree Fruit Crops – Washington Tree Fruit Research Commission</li>
                    <li>Apple Crop-load Estimation Application – Office of Commercialization, WSU</li>
                    <li>An Automated Green Shoot Thinner – Washington Wine Commission and Washington Department of Agriculture</li>
                    <li><a className="researchLink" href="https://cpaas.wsu.edu/unmanned-aerial-systems-uass-for-mitigating-bird-damage-in-blueberry/">Unmanned Aerial System for Mitigating Bird Damage</a> – WA Blueberry Commission</li>
                    <li><a className="researchLink" href="https://cpaas.wsu.edu/a-systems-approach-to-automating-intra-row-weed-control-in-vegetable-crops/">Crop Signaling-based Weed Control in vegetable Crops </a> – USDA Specialty Crop Research Initiative</li>
                    <li><a className="researchLink" href="https://cpaas.wsu.edu/shake-and-catch-harvesting-for-fresh-market-apples/">Shake and Catch Harvesting for Fresh Market Apples</a> –  USDA NIFA Foundational Program</li>
                    <li><a className="researchLink" href="https://cpaas.wsu.edu/?not-found=cpaas.wsu.edu%2F10307-2%2F">Mechanizing Red Raspberry Pruning and Cane Tying</a> – WSDA Specialty Crop Block Grant and WA Red Raspberry Commission</li>
                    <li><a className="researchLink" href="https://cpaas.wsu.edu/human-machine-collaboration-for-automated-harvesting-of-tree-fruit/">Human-machine collaboration for automated harvesting of tree fruit</a> – NSF/USDA National Robotics Initiative</li>
                    <li>Conversion of High-Yield Tropical Biomass into Sustainable Biofuels – USDA Biomass Research and Development Initiative</li>
                    <li><a className="researchLink" href="https://cpaas.wsu.edu/research/fundamental/development-and-optimization-of-solid-set-canopy-delivery-systems-for-resource-efficient-ecologically-sustainable-apple-and-cherry-production/">Development and Optimization of Solid-Set Canopy Delivery Systems for Resource-Efficient, Ecologically Sustainable Apple and Cherry Production</a> – USDA Specialty Crops Research Initiative</li>
                    <li><a className="researchLink" href="https://cpaas.wsu.edu/multispectral-image-analyses-of-potatoes-under-different-nutrient-management-with-center-pivot-irrigation/">Nutrient and Water Stress Sensing for Potatoes</a> –  USDA ARS – Cooperative Research Project</li>
                    <li><a className="researchLink" href="https://cpaas.wsu.edu/research/fundamental/3d-machine-vision-for-improved-apple-crop-load-estimation/">3D machine vision for improved apple crop load estimation;</a> – Washington Tree Fruit Research Commission</li>
                    <li><a className="researchLink" href="https://cpaas.wsu.edu/research/machine-vision-system-development-for-automatic-pruning-of-apple-trees/">Machine Vision System for Mechanical Pruning of Apple Trees</a> – Washington State University Internal Grant Program</li>
                    <li><a className="researchLink" href="https://cpaas.wsu.edu/research/fundamental/a-total-systems-approach-to-developing-a-sustainable-stem-free-sweet-cherry-production-processing-and-marketing-system/">A total systems approach to developing a sustainable, stem-free sweet cherry production, processing, and marketing system;</a>USDA Specialty Crops Research Initiative</li>
                </ul>
               </div>
               <br></br>
               <br></br>
           </div>

            </div>
            
      ) : (
        <Loading />
      )}
           
        </>
    )
}

export default Research;