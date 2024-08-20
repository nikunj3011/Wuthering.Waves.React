import React, { useEffect, useState } from 'react';
import SectionGridLines from '../../components/SectionGridLines';
import SectionHeader from '../../components/SectionHeader';
import LazyLoad from 'react-lazyload';
import { Link } from "react-router-dom"; 
import axios from "axios";

const CharacterSummary = ({id}) => {
    
    const [currentCharacter, setCurrentCharacter] = useState([]);
    
    console.log(id)
    useEffect(() => {
        axios
        .get(`./jsonData/characters/${id}.json`)
        .then((res) => setCurrentCharacter(res.data))
        .catch(err=>console.log(err))
    },[]);
    const bestWeapon = currentCharacter?.buildInfoWeapon?.find(x=>x!==undefined)?.weapon
    const bestSet = "5x " + currentCharacter?.buildInfoEcho?.echo_sets?.find(x=>x!==undefined)?.name
    const bestEcho = currentCharacter?.buildInfoEcho?.echo_sets?.find(x=>x!==undefined)?.main_echo

    var echo4PCStat = ""
    var description = currentCharacter.introduction?.raw?.content[0].content[0].value
    if(!(currentCharacter?.buildInfoEcho?.echo_4_stat === undefined || currentCharacter?.buildInfoEcho?.echo_4_stat.length === 0)){
        for (var name in currentCharacter?.buildInfoEcho?.echo_4_stat) {
            echo4PCStat = echo4PCStat + " " + currentCharacter?.buildInfoEcho?.echo_4_stat[name].stat + " "
        }
    }
    var echo3PCStat = ""
    if(!(currentCharacter?.buildInfoEcho?.echo_3_stat === undefined || currentCharacter?.buildInfoEcho?.echo_3_stat.length === 0)){
        for (var name in currentCharacter?.buildInfoEcho?.echo_3_stat) {
            echo3PCStat = echo3PCStat + " " + currentCharacter?.buildInfoEcho?.echo_3_stat[name].stat + " "
        }
    }
    var echo1PCStat = ""
    if(!(currentCharacter?.buildInfoEcho?.echo_1_stat === undefined || currentCharacter?.buildInfoEcho?.echo_1_stat.length === 0)){
        for (var name in currentCharacter?.buildInfoEcho?.echo_1_stat) {
            echo1PCStat = echo1PCStat + " " + currentCharacter?.buildInfoEcho?.echo_1_stat[name].stat + " "
        }
    }

    var subStats = currentCharacter?.buildInfoOther?.substats

    var bestTeam = ""
    if(!(currentCharacter?.synergies === undefined || currentCharacter?.synergies?.length === 0)){
        for (var name in currentCharacter?.synergies) {
            bestTeam = bestTeam + " " + currentCharacter?.synergies[name].char + " "
        }
    }

    var mainRole = currentCharacter?.tierCategory
    var otherRoles = ""
    if(!(currentCharacter?.tierTags === undefined || currentCharacter?.tierTags === null || currentCharacter?.tierTags?.length === 0)){
        for (var tags of currentCharacter?.tierTags){
            otherRoles = otherRoles + " " + tags;
        }
    }
    var towerOfAdversity = currentCharacter?.ratings?.tower?.toString()

    var characterAscension = ""
    if(!(currentCharacter?.ascensionMaterials?.common === undefined)){
        for (name in currentCharacter?.ascensionMaterials?.common) {
            characterAscension = `${characterAscension} \n${currentCharacter?.ascensionMaterials?.common[name].number_skill} x ${currentCharacter?.ascensionMaterials?.common[name].name} `
        }
    }
    if(currentCharacter?.ascensionMaterials?.ascension != null){
        characterAscension = `${characterAscension} \n${currentCharacter?.ascensionMaterials?.ascension?.number} x ${currentCharacter?.ascensionMaterials?.ascension?.name} `
    }
    if(currentCharacter?.ascensionMaterials?.breakthrough != null){
        characterAscension = `${characterAscension} \n${currentCharacter?.ascensionMaterials?.breakthrough?.number} x ${currentCharacter?.ascensionMaterials?.breakthrough?.name} `
    }
    if(currentCharacter?.ascensionMaterials?.skill != null){
        characterAscension = `${characterAscension} \n${currentCharacter?.ascensionMaterials?.skill?.number} x ${currentCharacter?.ascensionMaterials?.skill?.name} `
    }

    var characterSkillUpgrades = ""
    if(!(currentCharacter?.ascensionMaterials?.common === undefined)){
        for (name in currentCharacter?.ascensionMaterials?.common) {
            characterSkillUpgrades = `${characterSkillUpgrades} ${currentCharacter?.ascensionMaterials?.common[name].number_skill} x ${currentCharacter?.ascensionMaterials?.common[name].name} `
        }
    }
    if(!currentCharacter?.ascensionMaterials?.skill_other === undefined){
        for (name in currentCharacter?.ascensionMaterials?.skill_other) {
            characterSkillUpgrades = `${characterSkillUpgrades} \n${currentCharacter?.ascensionMaterials?.skill_other[name].number} x ${currentCharacter?.ascensionMaterials?.skill_other[name].name} `
        }
    }

    return (
        <section className="projects packery">
            <br/>

            <SectionGridLines></SectionGridLines>
            
            <div className="large_font floating_element text-dark-200 d-flex justify-content-center">
                
                <LazyLoad once>
                    <br/>
                    <br/>
                    <br/>
                    <img className="item_image" src={currentCharacter.img} alt="" style={{background: currentCharacter.bStyle, opacity: 0.9, height:570}} />
                </LazyLoad>
            </div>
            
            <div className="container">
                
                <div className='shop_sidebar'>
                    <Link to="/characters" className="btn btn-primary">Back</Link>
                </div>

                <div className="section-desc row  justify-content-center">
                    <div className="col-lg-8 text-left">
                            <br/>
                            <LazyLoad once>
                                {currentCharacter.tag === "Aero" && <img src="images/main_images/elements/element_aero.webp" alt="" height="50px" width="50px" className=""/>}
                                {currentCharacter.tag === "Electro" && <img src="images/main_images/elements/element_electro.webp" alt="" height="50px" width="50px" className=""/>}
                                {currentCharacter.tag === "Fusion" && <img src="images/main_images/elements/element_fusion.webp" alt="" height="50px" width="50px" className=""/>}
                                {currentCharacter.tag === "Glacio" && <img src="images/main_images/elements/element_glacio.webp" alt="" height="50px" width="50px" className=""/>}
                                {currentCharacter.tag === "Havoc" && <img src="images/main_images/elements/element_havoc.webp" alt="" height="50px" width="50px" className=""/>}
                                {currentCharacter.tag === "Spectro" && <img src="images/main_images/elements/element_spectro.webp" alt="" height="50px" width="50px" className=""/>}
                            </LazyLoad>
                            <br/>
                        <div style={{fontSize:100}}>
                            <p>{currentCharacter.name}</p><br/>
                        </div>
                        <div style={{fontSize:30}}>
                            <p>{currentCharacter.region}</p>
                            <LazyLoad once>
                                {currentCharacter.region === "Other" && <img src="images/main_images/regions/other.png" alt="" height="150px" width="200px" />}
                                {currentCharacter.region === "Black Shores" && <img src="images/main_images/regions/black_shores.png" alt="" height="150px" width="200px" />}
                                {currentCharacter.region === "Huanglong" && <img src="images/main_images/regions/Huanglong.png" alt="" height="150px" width="200px" />}
                                {currentCharacter.region === "Unknown" && <img src="images/main_images/regions/unknown.png" alt="" height="150px" width="200px" />}
                            </LazyLoad>
                        </div>
                        <div style={{fontSize:20}}>
                            <div className="row">
                                <div className="col-12 ">
                                    <LazyLoad once>
                                        {currentCharacter.weapon === "Broadblade" && <img src="images/main_images/weaponTypes/broadblade.png" alt="" height="50px" width="50px" />}
                                        {currentCharacter.weapon === "Gauntlets" && <img src="images/main_images/weaponTypes/gauntlets.png" alt="" height="50px" width="50px" />}
                                        {currentCharacter.weapon === "Pistols" && <img src="images/main_images/weaponTypes/pistol.png" alt="" height="50px" width="50px" />}
                                        {currentCharacter.weapon === "Rectifier" && <img src="images/main_images/weaponTypes/rectifier.png" alt="" height="50px" width="50px" />}
                                        {currentCharacter.weapon === "Sword" && <img src="images/main_images/weaponTypes/sword.png" alt="" height="50px" width="50px" />}
                                    </LazyLoad>
                                    {currentCharacter.weapon}
                                </div>
                            </div>
                            <div className="section-desc row  justify-content-center">
                            </div>
                        </div>
                        <div style={{fontSize:20,marginTop: 130}} className='  bg-white'>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div style={{fontSize:30, textAlign:'right'}}>
                            <p className="underLineStyle ">Best Weapon:</p>
                            <p>{bestWeapon}</p><br/><br/><br/>
                            <p className="underLineStyle">Best Set:</p>
                            <p>{bestSet}</p><br/><br/><br/>
                            <p className="underLineStyle">Best Echo:</p>
                            <p>{bestEcho}</p><br/><br/><br/>
                        </div>
                        <div className="large_font" style={{zIndex: -20, opacity: 1}}>
                            <SectionHeader title={currentCharacter.name}></SectionHeader>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div style={{fontSize:20, textAlign:'center'}}>
                            <p className="underLineStyle">Echo Sets: Max 12</p>
                            <p>4 Cost {echo4PCStat}</p>
                            <p>3 Cost {echo3PCStat}</p>
                            <p>1 Cost {echo1PCStat}</p>
                            <br/>
                        </div>
                        <div style={{fontSize:20, textAlign:'center'}}>
                            <p className="underLineStyle">Sub Sets</p>
                            <p>{subStats}</p>
                            <br/>
                        </div>
                    </div>
                    <div className="col-lg-6  bg-white">
                        <div style={{fontSize:20, textAlign:'center'}}>
                            <p className="underLineStyle">Best Team</p>
                            <p>{bestTeam}</p><br/>
                        </div>
                        <div style={{fontSize:20, textAlign:'center'}}>
                            <p className="underLineStyle ">Ratings & Role</p>
                            <p>Main Role: {mainRole}</p>
                            <p>Other Roles: {otherRoles}</p>
                            <p>Tower of Adversity {towerOfAdversity}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div style={{fontSize:20, textAlign:'center'}}>
                            <h3 className="underLineStyle">Upgrade Materials</h3><br/><br/>
                        </div>
                    </div>
                    <div className="col-lg-6 bg-white">
                        <div style={{fontSize:20, textAlign:'center'}}>
                            <p className="underLineStyle">Character Ascension</p>
                            <p id="characterAscension">{characterAscension}</p>
                        </div>
                        {/* <div style={{fontSize:30, textAlign:'center'}}>
                            <p>Skill Upgrades</p>
                            <p>{characterSkillUpgrades}</p>
                        </div> */}
                    </div>
                    <div className="col-lg-6">
                            <div style={{fontSize:20, textAlign:'center'}}>
                            <p className="underLineStyle">Skill Upgrades</p>
                            <p>{characterSkillUpgrades}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CharacterSummary;