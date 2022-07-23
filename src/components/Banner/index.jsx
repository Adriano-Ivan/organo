import BannerImg from "../../imagens/banner.png";
import "./styles.css";

const Banner = () => {

    return (
        <header className={"banner"}>
            <img src={BannerImg} alt={'Logo do Organo'}/>
        </header>
       
    )
}

export default Banner;