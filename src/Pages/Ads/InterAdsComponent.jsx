import React, { useEffect  } from 'react';

const InterAdsComponent = (props) => {
    const { dataAdSlot } = props;  



    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {

        }

    },[]);



    return (
        <>
        
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-8299128249632072"
                data-ad-slot="9705145104"
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </>
    );
};

export default InterAdsComponent;