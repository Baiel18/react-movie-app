import React, {useState} from "react";

const About = () => {
const [active, setActive] = useState('');

const handleText =()=> {
    if(active){
        setActive('')
    } else {
        setActive('show')
    }
}

    return (
        <div className="about">
            <div className="aboutContainerOne">
                <p className="aboutText">
                    <h1>About</h1>
                    Менин атым Байэл Ыссык-Кол облусунун Жети-Огуз районуна караштуу Даркан айылында туулгам 2011жылы К.Саалиев атындагы орто мектепке 1-класска киргем 2022-жылы аяктадым азыркы учурда 'Bootcamp'та окуйм.Kелечекте мыкты программист болуп олкобуздун онугушуно чон салым кошсом деген максаттарым бар <br/><br/>
                    <img onClick={handleText} className="gifProgrammer" src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" />
                    <p className={`text ${active} `}>He is text</p>
                    
                </p>
            </div>
        </div>
    )
}
export default About