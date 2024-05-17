
const ServiceCard03 = ({ data }) => {
    const { img01, title, text } = data;
    return (
        <div className="col-lg-4" >
            <div class="icon_box">
                <div className="icon_box_inner">
                    <img src={img01} alt="Icon Box" />
                    <h4 className="text-white"><a href="/service-1">{title}</a></h4>
                    <p className="text-gray-600">{text}</p>
                    <div className="arrow_effect">
                        <a href="/service-1"><span className="crossline1"></span><span className="crossline2"></span></a>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default ServiceCard03;