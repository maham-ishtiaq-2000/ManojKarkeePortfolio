import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import './Publication.css';

const Publication = () =>{
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => setLoading(false), 900)
    }, [])
    return(
        <>
        {loading === false ? (
            <div>
                <Header></Header>
            <div className="text-justify" style={{"marginLeft" : "30px"}}>
               <p className='researchHeading '>Patents</p>
               <div>
               <ul  style={{"marginLeft" : "2px"}} >
                    <li>Davidson, J.R., Mo, C., Zhang, Q., Silwal, A. and <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Washington State University, 2017. Robotic systems, methods, and end-effectors for harvesting produce. U.S. Patent Application 15/383,000.</li>
                    <li>De Kleine, M., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> and Ye, Y., Washington State University, 2016. Harvesting machine for formally trained orchards. U.S. Patent 9,468,146.</li>
                </ul>
               </div>
           </div>
           <div className="text-justify" style={{"marginLeft" : "30px"}}>
               <p className='researchHeading '>Books</p>
               <div>
               <ul  style={{"marginLeft" : "2px" }}>
                    <li><span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> and Q. Zhang (Eds.). 2019. Fundamentals of Agricultural and Field Robotics. Springer Nature Switzerland AG. In Press.</li> 
                </ul>
               </div>
           </div>
           <br></br>
           <div className="text-justify" style={{"marginLeft" : "30px" , "marginRight" : "2%"}}>
               <p className='researchHeading animate-h1'>Book Chapters</p>
               <ol class=" list-group-numbered text-justify">
                    <li class="list-group-item">
                        <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Bhusal, S., & Zhang, Q. (2021). 3D Sensing Techniques and Systems. In Fundamentals of Agricultural and Field Robotics (Editors: Manoj Karkee and Qin Zhang), Springer Nature Switzerland AG. In Press.
                    </li>
                    <li class="list-group-item">
                        Zhang, Q., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2021). Agricultural and Field Robotics: An Introduction. In Fundamentals of Agricultural and Field Robotics (Editors: Manoj Karkee and Qin Zhang), Springer Nature Switzerland AG. In Press.
                    </li>
                    <li class="list-group-item">
                         Zhang, X., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang, Q. (2021). Machinery-Canopy Interactions in Tree Fruit Crops. In Fundamentals of Agricultural and Field Robotics (Editors: Manoj Karkee and Qin Zhang), Springer Nature Switzerland AG. In Press.
                    </li>
                    <li class="list-group-item">
                        <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, J. Gordón, B. Salato, and M. Whiting. 2019. Optimizing fruit production efficiencies via mechanization. 2019. In Achieving sustainable cultivation of temperate zone tree fruits and berries, Volume 1 – Physiology, genetics and cultivation (Editor: Dr Greg Lang). Burleigh Dodds Science Publishing.
                    </li>
                    <li class="list-group-item">
                        Zhang, Q., Karkee, A. Tabb. 2019. The Use of Agricultural Robots in Orchard Management. In Robotics and Automation for a More Sustainable Agriculture (Editor: John Billingsley); rXiv preprint arXiv:1907.13114 (2019).
                    </li>
                    <li class="list-group-item">
                        <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Q. Zhang, and A. Silwal. Agricultural Robots for Precision Agricultural Tasks in Tree Fruit Orchards. In Innovation in Agricultural Robotics for Precision Agriculture (Editor: Avital Bechar). In Press. Crops. In Fundamentals of Agricultural and Field Robotics (Editors: Manoj Karkee and Qin Zhang), Springer Nature Switzerland AG. In Press.
                    </li>
                    <li class="list-group-item">
                         Shamshiri, R. R., A. Hameed, M. Karkee, and C. Weltzien. 2018. Robotic Harvesting of Fruiting Vegetables: A Simulation Approach in V-REP, ROS and MATLAB. In Automation in Agriculture – Securing Food Supplies for Future Generations (Editor Stephan Hussmann); ISBN 978-953-51-3874-7, Print ISBN 978-953-51-3873-0.
                    </li>
                    <li class="list-group-item">
                        <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, A. Silwal, J.R. Davidson. 2018. Mechanical Harvest and In-field Handling of Tree Fruit Crops. In Automation in Tree Fruit Production, Principles and Practice (Editor: Qin Zhang). CABI.
                    </li>
                    <li class="list-group-item">
                        Zhang, Q., Karkee and L. Khot. 2017. Mechanization and automation for apple production. In Achieving Sustainable Cultivation of Apples (Editor: Kate Evans). Burleigh Dodds (28 pp). https://shop.bdspublishing.com/checkout/Store/bds/Detail/Product/3-190-9781786760326-011.
                    </li>
                    <li class="list-group-item">
                        <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, B. Steward, and J. Kruckeberg. 2013. Automation of Pesticide Application Systems. In Agricultural Automation: Fundamentals and Practices (Q. Zhang and F. Pierce editors; ISBN: 9781439880579). CRC Press: Boca Raton, Florida, USA.
                    </li>
                    
                </ol>
           </div>
           <br></br>
           <br></br>
           <div className="text-justify" style={{"marginLeft" : "30px" , "marginRight" : "2%"}}>
               <p className='researchHeading'>Peer Reviewed Journal Articles</p>
               <ol class=" list-group-numbered text-justify">
                    <li class="list-group-item">
                        Lohan*, S., Naranga, M. K., Singha, M., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2021). Actuating Force Required for Operating Various Controls of a Walk-behind Type Paddy Transplanter Leading to Developing of Remotely Operated System. Journal of Agricultural Safety and Health.
                    </li>
                    <li class="list-group-item">
                        Majeed*, Y., Karkee#, M., Zhang, Q., Fu, L., & Whiting, M. D. (2021). Development and performance evaluation of a machine vision system and an integrated prototype for automated green shoot thinning in vineyards. Journal of Field Robotics. https://doi.org/10.1002/rob.22013
                    </li>
                    <li class="list-group-item">
                         Zhang*, X., Karkee#, M., Zhang, Q., & Whiting, M. D. (2020). Computer vision based tree trunk and branch identification and shaking points detection in dense-foliage canopy for automated harvesting of apples. Journal of Field Robotics, 1–18. https://doi.org/10.1002/rob.21998
                    </li>
                    <li class="list-group-item">
                        Majeed*, Y., Karkee#, M., & Zhang, Q. (2020). Estimating the trajectories of vine cordons in full foliage canopies for automated green shoot thinning in vineyards. Computers and Electronics in Agriculture, 176, 105671.
                    </li>
                    <li class="list-group-item">
                        Zhang*, X., He, L., Zhang, J., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Whiting, M. D., & Zhang, Q. (2020). Determination of key canopy parameters for mass mechanical apple harvesting using supervised machine learning and principal component analysis (PCA). Biosystems Engineering, 193, 247–263. https://doi.org/10.1016/j.biosystemseng.2020.03.006
                    </li>
                    <li class="list-group-item">
                        Zhang*, X., He, L., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Whiting, M. D., & Zhang, Q. (2020). Field evaluation of targeted shake-and-catch harvesting technologies for fresh market apple. Transactions of the ASABE, 63(6), 1759–1771. https://doi.org/10.13031/trans.13779
                    </li>
                    <li class="list-group-item">
                        Majeed*, Y., Karkee#, M., Zhang, Q., Fu, L., & Whiting, M. D. (2020). Determining grapevine cordon shape for automated green shoot thinning using semantic segmentation-based deep learning networks. Computers and Electronics in Agriculture, 171, 105308.
                    </li>
                    <li class="list-group-item">
                        Gao, F., Fu, L., Zhang, X., Majeed, Y., Li, R., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang, Q. (2020). Multi-class fruit-on-plant detection for apple in SNAP system using Faster R-CNN. Computers and Electronics in Agriculture, 176, 105634. https://doi.org/10.1016/j.compag.2020.105634
                    </li>
                    <li class="list-group-item">
                        Fu*, L., Majeed, Y., Zhang, X., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang, Q. (2020). Faster R-CNN-based apple detection in dense-foliage fruiting-wall trees using RGB and depth features for robotic harvesting. Biosystems Engineering, 197, 245–256. https://doi.org/10.1016/j.biosystemseng.2020.07.007
                    </li>
                    <li class="list-group-item">
                        Zhang, J., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Zhang, Q., Zhang, X., Majeed, Y., Fu, L., & Wang, S. (2020). Multi-class object detection using Faster R-CNN and estimation of shaking locations for automated shake-and-catch apple harvesting. Computers and Electronics in Agriculture, 173, 105384. https://doi.org/10.1016/j.compag.2020.105384
                    </li>
                    <li class="list-group-item">
                        Fu*, L., Gao, F., Wu, J., Li, R., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang, Q. (2020). Application of consumer RGB-D cameras for fruit detection and localization in field: A critical review. Computers and Electronics in Agriculture, 177, 105687.
                    </li>
                    <li class="list-group-item">
                        Davidson, J., Bhusal, S., Mo, C., Karkee#, M., & Zhang, Q. (2020). Robotic Manipulation for Specialty Crop Harvesting: A Review of Manipulator and End-Effector Technologies. Global Journal of Agricultural and Allied Sciences, 2(1), 25-41.
                    </li>
                    <li class="list-group-item">
                        Majeed*, Y., Zhang, J., Zhang, X., Fu, L., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Zhang, Q., & Whiting, M. D. (2020). Deep learning-based segmentation for automated training of apple trees on trellis wires. Computers and Electronics in Agriculture, 170, 105277.
                    </li>
                    <li class="list-group-item">
                        Fu*, H., Karkee#, M., He, L., Duan, J., Li, J., & Zhang, Q. (2020). Bruise Patterns of Fresh Market Apples Caused by Fruit-to-Fruit Impact. Agronomy, 10(1), 59.
                    </li>
                    <li class="list-group-item">
                         Sharda*, A., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Hoheisel, G., Zhang, Q., & Mangus, D. (2019). Design and Evaluation of Solid Set Canopy Delivery System for Spray Application in High-density Apple Orchards. Applied Engineering in Agriculture, 35(5), 751–757.
                    </li>
                    <li class="list-group-item">
                         Santiago, W. E., Leite, N. J., Teruel, B. J., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Azania, C. A. M., & others. (2019). Evaluation of bag-of-features (BoF) technique for weed management in sugarcane production. Australian Journal of Crop Science, 13(11), 1819.
                    </li>
                    <li class="list-group-item">
                        Khanal*, K., Bhusal, S., Karkee#, M., Scharf, P., & Zhang, Q. (2019). Design of Improved and Semi-Automated Red Raspberry Cane Bundling and Taping Machine Based on Field Evaluation. Transactions of the ASABE, 62(3), 821–829.
                    </li>
                    <li class="list-group-item">
                        Bhusal*, S., Khanal, K., Goel, S., Karkee#, M., & Taylor, M. E. (2019). Bird Deterrence in a Vineyard Using an Unmanned Aerial System (UAS). Transactions of the ASABE, 62(2), 561–569.
                    </li>
                    <li class="list-group-item">
                        He*, L., Zhang, X., Ye, Y., Karkee#, M., & Zhang, Q. (2019). Effect of shaking location and duration on mechanical harvesting of fresh market apples. Applied Engineering in Agriculture, 35(2), 175–183.
                    </li>
                    <li class="list-group-item">
                         Hohimer, C. J., Wang, H., Bhusal, S., Miller, J., Mo, C., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2019). Design and field evaluation of a robotic apple harvesting system with a 3D-printed soft-robotic end-effector. Transactions of the ASABE, 62(2), 405–414.
                    </li>
                    <li class="list-group-item">
                         Zhang*, J., He, L., Karkee#, M., Zhang, Q., Zhang, X., & Gao, Z. (2018). Branch detection for apple trees trained in fruiting wall architecture using depth features and Regions-Convolutional Neural Network (R-CNN). Computers and Electronics in Agriculture, 155, 386–393.
                    </li>
                    <li class="list-group-item">
                        Zhang*, X., He, L., Majeed, Y., Whiting, M. D., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang#, Q. (2018). A precision pruning strategy for improving efficiency of vibratory mechanical harvesting of apples. Transactions of the ASABE, 61(5), 1565–1576.
                    </li>
                    <li class="list-group-item">
                        Gongal*, A., Karkee#, M., & Amatya, S. (2018). Apple fruit size estimation using a 3D machine vision system. Information Processing in Agriculture, 5(4), 498–503
                    </li>
                    <li class="list-group-item">
                        Ma*#, S., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Fu, H., Sun, D., & Zhang, Q. (2018). Evaluation of shake-and-catch mechanism in mechanical harvesting of apples. Transactions of the ASABE, 61(4), 1257–1263.
                    </li>
                    <li class="list-group-item">
                        Khanal*, K., Bhusal, S., Karkee#, M., & Zhang, Q. (2018). Raspberry Primocane Bundling and Taarkping Mechanisms. Transactions of the ASABE, 61(4), 1265–1274.
                    </li>
                    <li class="list-group-item">
                        Yamamoto*#, S., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Kobayashi, Y., Nakayama, N., Tsubota, S., Thanh, L. N. T., & Konya, T. (2018). 3D reconstruction of apple fruits using consumer-grade RGB-depth sensor. Engineering in Agriculture, Environment and Food, 11(4), 159–168.
                    </li>
                    <li class="list-group-item">
                         Ma*#, S., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Scharf, P. A., & Zhang, Q. (2018). Adaptability of Chopper Harvester in Harvesting Sugarcane, Energy Cane, and Banagrass. Transactions of the ASABE, 61(1), 27–35.
                    </li>
                    <li class="list-group-item">
                         He*, L., Karkee#, M., Zhang, Q. (2018). Evaluation of a localized shake-and-catch harvesting system for fresh market apples. Agricultural Engineering International: CIGR Journal, 19(4), 36–44.
                    </li>
                    <li class="list-group-item">
                        Ma*#, S., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Scharf, P. A., Zhang, Q., Tong, J., & Yu, L. (2017). A study on the effects of harvester off-track errors on sugarcane stubble losses. Applied Engineering in Agriculture, 33(6), 771–779.
                    </li>
                    <li class="list-group-item">
                         Amatya, S., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Zhang, Q., & Whiting, M. D. (2017). Automated detection of branch shaking locations for robotic cherry harvesting using machine vision. Robotics, 6(4), 31.
                    </li>
                    <li class="list-group-item">
                        He*, L., Fu, H., Sun, D., Karkee#, M., & Zhang, Q. (2017). Shake-and-catch harvesting for fresh market apples in trellis-trained trees. Transactions of the ASABE, 60(2), 353–360.
                    </li>
                    <li class="list-group-item">
                         He*, L., Fu, H., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang#, Q. (2017). Effect of fruit location on apple detachment with mechanical shaking. Biosystems Engineering, 157, 63–71.
                    </li>
                    <li class="list-group-item">
                        Silwal*, A., Davidson, J. R., Karkee#, M., Mo, C., Zhang, Q., & Lewis, K. (2017). Design, integration, and field evaluation of a robotic apple harvester. Journal of Field Robotics, 34(6), 1140–1159.
                    </li>
                    <li class="list-group-item">
                        Fu*, H., He, L., Ma, S., Karkee#, M., Chen, D., Zhang, Q., & Wang, S. (2017). ‘Jazz’apple impact bruise responses to different cushioning materials. Transactions of the ASABE, 60(2), 327–336.
                    </li>
                    <li class="list-group-item">
                        Zhou, J., He, L., Whiting, M., Amatya, S., Larbi, P. A., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang, Q. (2016). Field evaluation of a mechanical-assist cherry harvesting system. Engineering in Agriculture, Environment and Food, 9(4), 324–331.
                    </li>
                    <li class="list-group-item">
                        Silwal*, A., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang, Q. (2016). A hierarchical approach to apple identification for robotic harvesting. Transactions of the ASABE, 59(5), 1079–1086.
                    </li>
                    <li class="list-group-item">
                        Davidson, J., Silwal*, A., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Mo, C., & Zhang, Q. (2016). Hand-picking dynamic analysis for undersensed robotic apple harvesting. Transactions of the ASABE, 59(4), 745–758.
                    </li>
                    <li class="list-group-item">
                        Li*, J., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Zhang, Q., Xiao, K., & Feng, T. (2016). Characterizing apple picking patterns for robotic harvesting. Computers and Electronics in Agriculture, 127, 633–640.
                    </li>
                    <li class="list-group-item">
                        Ma*, S., Scharf, P. A., Zhang, Q., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Tong, J., & Yu, L. (2016). Effect of cane stool density and stubble height on sugarcane stubble damage in Hawaii fields. Transactions of the ASABE, 59(3), 813–820.
                    </li>
                    <li class="list-group-item">
                        Zhou, J., He, L., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang, Q. (2016). Analysis of shaking-induced cherry fruit motion and damage. Biosystems Engineering, 144, 105–114.
                    </li>
                    <li class="list-group-item">
                        Zhou, J., He*, L., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang, Q. (2016). Effect of catching surface and tilt angle on bruise damage of sweet cherry due to mechanical impact. Computers and Electronics in Agriculture, 121, 282–289.
                    </li>
                    <li class="list-group-item">
                        Amatya*, S., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Gongal, A., Zhang, Q., & Whiting, M. D. (2016). Detection of cherry tree branches with full foliage in planar architecture for automated sweet-cherry harvesting. Biosystems Engineering, 146, 3–15.
                    </li>
                    <li class="list-group-item">
                        De Kleine*, M. E., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2015). A semi-automated harvesting prototype for shaking fruit tree limbs. Transactions of the ASABE, 58(6), 1461–1470.
                    </li>
                    <li class="list-group-item">
                        Gongal*, A., Silwal, A., Amatya, S., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Zhang, Q., & Lewis, K. (2016). Apple crop-load estimation with over-the-row machine vision system. Computers and Electronics in Agriculture, 120, 26–35.
                    </li>
                    <li class="list-group-item">
                        He*, L., Zhou, J., Zhang, Q., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2015). Evaluation of multipass mechanical harvesting on ‘Skeena’sweet cherries trained to Y-trellis. HortScience, 50(8), 1178–1182.
                    </li>
                    <li class="list-group-item">
                        Ma*, S., Scharf, P. A., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang, Q. (2014). Performance evaluation of a chopper harvester in Hawaii sugarcane fields. 2014 Montreal, Quebec Canada July 13–July 16, 2014, 1.
                    </li>
                    <li class="list-group-item">
                        Gongal*, A., Amatya, S., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Zhang, Q., & Lewis, K. (2015). Sensors and systems for fruit detection and localization: A review. Computers and Electronics in Agriculture, 116, 8–19. Most Downloaded in Jan 2016
                    </li>
                    <li class="list-group-item">
                        Larbi*, P. A., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Amatya, S., Zhang, Q., & Whiting, M. D. (2015). Modification and field evaluation of an experimental mechanical sweet cherry harvester. Applied Engineering in Agriculture, 31(3), 387–397.
                    </li>
                    <li class="list-group-item">
                        Larbi*, P. A., Vong, C. N., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2015). A Study of Operator Performance for a Mechanical Sweet Cherry Harvester: Comparison between Manual and Remote-Controlled Operation. Journal of Agricultural Safety and Health, 21(3), 145–157.
                    </li>
                    <li class="list-group-item">
                        De Kleine*, M. E., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2015). Evaluating a non-newtonian shear-thickening surface during fruit impacts. Transactions of the ASABE, 58(3), 907–915.
                    </li>
                    <li class="list-group-item">
                        <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Adhikari*, B. (2015). A method for three-dimensional reconstruction of apple trees for automated pruning. Transactions of the ASABE, 58(3), 565–574.
                    </li>
                    <li class="list-group-item">
                        Sharda*, A., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Zhang, Q., Ewlanow, I., Adameit, U., & Brunner, J. (2015). Effect of emitter type and mounting configuration on spray coverage for solid set canopy delivery system. Computers and Electronics in Agriculture, 112, 184–192.
                    </li>
                    <li class="list-group-item">
                        Silwal*, A., Gongal, A., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2014). Apple identification in field environment with over the row machine vision system. Agricultural Engineering International: CIGR Journal, 16(4), 66–75.

                    </li>
                    <li class="list-group-item">
                        Ma*, S., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Scharf, P. A., & Zhang, Q. (2014). Sugarcane harvester technology: a critical overview. Applied Engineering in Agriculture, 30(5), 727–739.
                    </li>
                    <li class="list-group-item">
                        Zhou, J., He, L., Zhang, Q., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2014). Effect of excitation position of a handheld shaker on fruit removal efficiency and damage in mechanical harvesting of sweet cherry. Biosystems Engineering, 125, 36–44.
                    </li>
                    <li class="list-group-item">
                         <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Adhikari*, B., Amatya, S., & Zhang, Q. (2014). Identification of pruning branches in tall spindle apple trees for automated pruning. Computers and Electronics in Agriculture, 103, 127–135.
                    </li>
                    <li class="list-group-item">
                          Larbi*, A., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2014). Effects of orchard characteristics and operator performance on harvesting rate of a mechanical sweet cherry harvester. GSTF Journal on Agricultural Engineering (JAE), 1(1), 1–11.
                    </li>
                    <li class="list-group-item">
                        Amatya*, S., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Alva, A. K., Larbi, P., & Adhikari, B. (2014). Hyperspectral imaging for detecting water stress in potatoes. GSTF Journal on Agricultural Engineering, 1(1), 52–61.
                    </li>
                    <li class="list-group-item">
                        Zhou, J., He, L., Zhang, Q., Du, X., Chen, D., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2013). Evaluation of the influence of shaking frequency and duration in mechanical harvesting of sweet cherry. Applied Engineering in Agriculture, 29(5), 607–612.
                    </li>
                    <li class="list-group-item">
                         He, L., Zhou, J., Du, X., Chen, D., Zhang, Q., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2013). Energy efficacy analysis of a mechanical shaker in sweet cherry harvesting. Biosystems Engineering, 116(4), 309–315.
                    </li>
                    <li class="list-group-item">
                        He, L., Zhang, Q., Du, X., Luo, R., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2012). A twining robot for high-trellis string tying in hops production. Transactions of the ASABE, 55(5), 1667–1673.
                    </li>
                    <li class="list-group-item">
                        <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, McNaull, R. P., Birrell, S. J., & Steward, B. L. (2012). Estimation of optimal biomass removal rate based on tolerable soil erosion for single-pass crop grain and biomass harvesting system. Transactions of the ASABE, 55(1), 107–115.
                    </li>
                    <li class="list-group-item">
                        Abd Aziz, S., Steward, B. L., Kaleita, A., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2012). Assessing the effects of DEM uncertainty on erosion rate estimation in an agricultural field. Transactions of the ASABE, 55(3), 785–798.
                    </li>
                    <li class="list-group-item">
                        <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Steward, B. L. (2011). Parameter estimation and validation of a tractor and single axle towed implement dynamic system model. Computers and Electronics in Agriculture, 77(2), 135–146.
                    </li>
                    <li class="list-group-item">
                        <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Steward, B. L., Kelkar, A. G., & Kemp, Z. T. (2011). Modeling and real-time simulation architectures for virtual prototyping of off-road vehicles. Virtual Reality, 15(1), 83–96.

                    </li>
                    <li class="list-group-item">
                        <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Steward, B. L. (2010). Study of the open and closed loop characteristics of a tractor and a single axle towed implement system. Journal of Terramechanics, 47(6), 379–393.
                    </li>
                    <li class="list-group-item">
                         <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Steward, B. L. (2010). Local and global sensitivity analysis of a tractor and single axle grain cart dynamic system model. Biosystems Engineering, 106(4), 352–366.
                    </li>
                    <li class="list-group-item">
                         Abd Aziz, S., Steward, B. L., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2010). Using Spatial Uncertainty of Prior Measurements to Design Adaptive Sampling of Elevation Data. Transactions of the ASABE, 53(2), 349–357.
                    </li>
                    <li class="list-group-item">
                        <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Steward, B. L., Tang, L., & Aziz, S. A. (2009). Quantifying sub-pixel signature of paddy rice field using an artificial neural network. Computers and Electronics in Agriculture, 65(1), 65–76.
                    </li>
                    <li class="list-group-item">
                        Abd Aziz, S., Steward, B. L., Tang, L., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2009). Utilizing repeated GPS surveys from field operations for development of agricultural field DEMs. Transactions of the ASABE, 52(4), 1057–1067.
                    </li>
                    <li class="list-group-item">
                        <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Steward, B. L., & Abd Aziz, S. (2008). Improving quality of public domain digital elevation models through data fusion. Biosystems Engineering, 101(3), 293–305.
                    </li>
                </ol>
           </div>
           <br></br>
           <br></br>
           <div className="text-justify" style={{"marginLeft" : "30px" , "marginRight" : "2%"}}>
               <p className='researchHeading'>Referred Conference Proceedings </p>
               <ol class=" list-group-numbered text-justify">
                    <li class="list-group-item">
                        Bhattarai*, U., Bhusal, S. & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2020). Automated Blossom Detection in Apple Trees using Deep Learning. Twenty First IFAC World Congress, Berlin, Germany, July, 12-17 2020 (Virtual).
                    </li>
                    <li class="list-group-item">
                        You*, A., Sukkar, F., Fitch, R., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Davidson, J. R. (2020). An efficient planning and control framework for pruning fruit trees. In 2020 IEEE International Conference on Robotics and Automation (ICRA)(pp. 3930-3936).
                    </li>
                    <li class="list-group-item">
                        Zhang*, X., Fu, L., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Whiting, M. D., & Zhang, Q. (2019). Canopy Segmentation Using ResNet for Mechanical Harvesting of Apples. IFAC-PapersOnLine, 52(30), 300–305.
                    </li>
                    <li class="list-group-item">
                        Fu*, H., Duan, J., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, He, L., Xia, H., Li, J., & Zhang, Q. (2019). Effect of Shaking Amplitude and Capturing Height on Mechanical Harvesting of Fresh Market Apples. IFAC-PapersOnLine, 52(30), 306–311.
                    </li>
                    <li class="list-group-item">
                        Bhusal*, S., Bhattarai, U., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2019). Improving Pest Bird Detection in a Vineyard Environment using Super-Resolution and Deep Learning. IFAC-PapersOnLine, 52(30), 18–23.
                    </li>
                    <li class="list-group-item">
                        Majeed*, Y., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Zhang, Q., Fu, L., & Whiting, M. D. (2019). A Study on the Detection of Visible Parts of Cordons Using Deep Learning Networks for Automated Green Shoot Thinning in Vineyards. IFAC-PapersOnLine, 52(30), 82–86.
                    </li>
                    <li class="list-group-item">
                        Bhusal*, S., Khanal, K., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang, Q. (2018). Cane Detection and Localization for Automated Cane Management in Red Raspberry Plant. International Conference on Robotics and Automation, 21-25 May 2018 | Brisbane
                    </li>
                    <li class="list-group-item">
                        Fu*, H., Duan, J., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, He, L., Chen, D., Sun, D., & Zhang, Q. (2018). Quantifying fruit quality affected by mechanical impact for selected apple varieties. IFAC-PapersOnLine, 51(17), 250–255.
                    </li>
                    <li class="list-group-item">
                        Khanal, K., Bhusal, S., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang, Q. (2018). Distinguishing one year and two year old canes of red raspberry plant using spectral reflectance. IFAC-PapersOnLine, 51(17), 39–44.
                    </li>
                    <li class="list-group-item">
                        Fu*, L., Feng, Y., Majeed, Y., Zhang, X., Zhang, J., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang, Q. (2018). Kiwifruit detection in field images using Faster R-CNN with ZFNet. IFAC-PapersOnLine, 51(17), 45–50.
                    </li>
                    <li class="list-group-item">
                        Majeed*, Y., Zhang, J., Zhang, X., Fu, L., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Zhang, Q., & Whiting, M. D. (2018). Apple tree trunk and branch segmentation for automatic trellis training using convolutional neural network based semantic segmentation. IFAC-PapersOnLine, 51(17), 75–80.
                    </li>
                    <li class="list-group-item">
                        Zhang*, X., Fu, L., Majeed, Y., He, L., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Whiting, M. D., & Zhang, Q. (2018). Field evaluation of data-based pruning severity levels (PSL) on mechanical harvesting of apples. IFAC-PapersOnLine, 51(17), 477–482.
                    </li>
                    <li class="list-group-item">
                        Wang, H., Hohimer, C. J., Bhusal, S., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Mo, C., & Miller, J. H. (2018). Simulation as a tool in designing and evaluating a robotic apple harvesting system. IFAC-PapersOnLine, 51(17), 135–140.
                    </li>
                    <li class="list-group-item">
                        Chen*, L., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, He, L., Wei, Y., & Zhang, Q. (2018). Evaluation of a Leveling System for a Weeding Robot under Field Condition. IFAC-PapersOnLine, 51(17), 368–373.
                    </li>
                    <li class="list-group-item">
                        Shrestha*, A., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang, Q. (2016). Mechanism for bundling and tying of red raspberry primocanes. IFAC-PapersOnLine, 49(16), 166–170.
                    </li>
                    <li class="list-group-item">
                        Ma*, S., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Fu, H., Sun, D., & Zhang, Q. (2016). Air suspension-based catching mechanism for mechanical harvesting of apples. IFAC-PapersOnLine, 49(16), 353–358.
                    </li>
                    <li class="list-group-item">
                        He*, L., Fu, H., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, & Zhang, Q. (2016). Effect of fruit location on apple detachment with mechanical shaking. IFAC-PapersOnLine, 49(16), 293–298.
                    </li>
                    <li class="list-group-item">
                        Fu*, H., He, L., Ma, S., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Chen, D., Zhang, Q., & Wang, S. (2016). Bruise responses of apple-to-apple impact. IFAC-PapersOnLine, 49(16), 347–352.
                    </li>
                    <li class="list-group-item">
                        Chen*, L., Kaewkorn, S., He, L., Zhang, Q., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2016). Design and Evaluation of a Levelling System for a Weeding Robot. IFAC-PapersOnLine, 49(16), 299–304.
                    </li>
                    <li class="list-group-item">
                        Davidson*, J. R., Silwal, A., Hohimer, C. J., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Mo, C., & Zhang, Q. (2016). Proof-of-concept of a robotic apple harvester. 2016 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 634–639.
                    </li>
                    <li class="list-group-item">
                        Davidson*, J., Mo, C., Silwal, A., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Li J., Xiao K., & Zhang Q. (2015). Human-Machine Collaboration for Robotic Harvesting of Fresh Market Apples. ICRA 2015 Workshop on Robotics in Agriculture; 30 May, 2015; Seattle, WA.
                    </li>
                    <li class="list-group-item">
                        Gongal, A., Amatya, S., Karkee*, M., Zhang, Q., & Lewis, K. (2014). Identification of Repetitive Apples for Improved Crop-Load Estimation with Dual-Side Imaging. Proceedings of The 19th World Congress of the International Federation of Automatic Control; 24-29 August 2014; Cape Town, South Africa.
                    </li>
                    <li class="list-group-item">
                        Monga, M., <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Sun, S., KiranTondehal, L., Steward, B., & Zambreno, J. (2012). Real-time Simulation of Dynamic Vehicle Models using a High-performance Reconﬁgurable Platform. International Conference on Computational Science, ICCS 2012, June 4-6, 2012, Ames, IA 50011 USA.
                    </li>
                    <li class="list-group-item">
                         <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span>, Monga, M., Steward, B. L., Zambreno, J., & Kelkar, A. G. (2010). Real-time simulation and visualization architecture with field programmable gate array (FPGA) simulator. ASME World Conference on Innovative Virtual Reality, 49088, 219–227.
                    </li>
                    <li class="list-group-item">
                        Aziz*, S. A., Steward, B. L., Tang, L., & <span className='text-secondary'  style={{"fontWeight" : "bold"}}>Karkee, M.</span> (2006). Multiple GPS measurements for digital elevation model. Computers in Agriculture and Natural Resources, 23-25 July 2006, Orlando Florida, 329.
                    </li>
                    
                </ol>
           </div>
            </div>
            
      ) : (
        <Loading />
      )}
            
           
        </>
    )
}

export default Publication;