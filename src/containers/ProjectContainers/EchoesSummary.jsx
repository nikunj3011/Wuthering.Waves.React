import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import SectionGridLines from '../../components/SectionGridLines';
import SectionHeader from '../../components/SectionHeader';
import echoesData from '../../jsonData/echoes2.json';
import EchoesCard from '../../components/ProjectElements/EchoesCard';
import axios from "axios";

const EchoesGallery = () => {
    const echoes = echoesData;
    const [echo, setEchoes] = useState([]);
    function getRandom(){
        var min = 1;
        var max = 1000;
        return  min + (Math.random() * (max-min));
    }
    console.log("s")
    const headers = {
        'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };
    useEffect(() => {
        axios
        .get(`https://api.dotgg.gg/cgfw/getgacha?game=wuthering-waves&type=echoes&cache=1723670100000`,
            {headers})
        .then((res) => setEchoes(res.data))
        .catch(err=>console.log(err))
    }, []);
    return (
        <section className="projects packery">
            <SectionGridLines></SectionGridLines>
            <div className="large_font">
                <SectionHeader title="Echoes"></SectionHeader>
            </div>
            <div className="container">
                <div className="section-desc row align-items-center justify-content-center">
                        {
                            echoes.map(data => <EchoesCard
                                key={data.id}
                                data={data}
                            />)
                        }
                </div>
            </div>
        </section>
    );
};

export default EchoesGallery;