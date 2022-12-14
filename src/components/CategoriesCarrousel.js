import styled from "styled-components"
import { FaChessRook, FaGamepad } from "react-icons/fa"
import { GiFullMotorcycleHelmet } from "react-icons/gi"
import { RiApps2Fill } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { httpQuerySelector } from "./Globlal"

export default function CategoriesCarrousel(){
    const navigate = useNavigate()

    return(
        <CategoriesStyle>
            <div className="category c1"
            onClick={()=>{navigate("/games"+httpQuerySelector("casual", 10))}}
            >
                <FaGamepad className="icon"/>
                <h3>Casual</h3>
            </div>
            <div className="category c2"
            onClick={()=>{navigate("/games"+httpQuerySelector("corrida", 10))}}
            >
                <GiFullMotorcycleHelmet className="icon"/>
                <h3>Corrida</h3>
            </div>
            <div className="category c3"
            onClick={()=>{navigate("/games"+httpQuerySelector("rpg", 10))}}
            >
                <FaChessRook className="icon"/>
                <h3>RPG</h3>
            </div>
            <div className="category c4"
            onClick={()=>{navigate("/games"+httpQuerySelector("a", 0))}}
            >
                <RiApps2Fill className="icon"/>
                <h3>Mais</h3>
            </div>
        </CategoriesStyle>
    )
}

const CategoriesStyle = styled.div`
    display: flex;
    margin-top: 24px;
    width: 100vw;
    justify-content: space-evenly;

        .c1{
            background: rgb(118,100,255);
            background: linear-gradient(45deg, rgba(118,100,255,1) 0%, rgba(210,120,255,1) 100%);
        }
        .c2{
            background: rgb(178,100,255);
            background: linear-gradient(45deg, rgba(178,100,255,1) 0%, rgba(255,120,120,1) 100%);
        }
        .c3{
            background: rgb(100,184,255);
            background: linear-gradient(45deg, rgba(100,184,255,1) 0%, rgba(120,252,255,1) 100%);
        }
        .c4{
            background: rgb(118,100,255);
            background: linear-gradient(45deg, rgba(118,100,255,1) 0%, rgba(165,153,255,1) 100%);
        }
        .category{
            border-radius: 22px;
            width: 16vw;
            height: 16vw;
            background-color: blue;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
      
            .icon{
                color: white;
                width: 50%;
                height: 50%;
            }
            h3{
                position: absolute;
                bottom: -28px;
                left: 50%;
                transform: translateX(-50%);
                color: #36324f;
                font-weight: 400;
            }
        }
`