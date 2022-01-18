import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from "../features/car/carSlice";
import {useSelector} from 'react-redux';
function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
  return (
    <Container>
      <a href="">
        <img class="image" src="/images/tesla.png" alt="" />
      </a>
      <Menu>
        {cars && cars.map((car,index)=>(
            <a key={index} href="#">{car}</a>
        ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
          <CustomWrap>
            <CustomClose onClick={()=> setBurgerStatus(false)}/>
          </CustomWrap>
        {cars && cars.map((car,index)=>(
            <li><a key={index} href="#">{car}</a></li>
        ))}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">CyberTruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Investor Relations</a></li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  left: 0;
  right: 0;
  top: 0;
  z-index:1;
  .image {
      width:130px;
      height:30px;
      padding-right: 60px;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px 10px;
    flex-wrap: nowrap;
    :hover {
      background-color: #cdd1d4;
      opacity: 0.5;
      color: black;
      border-radius: 10px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center; 
  a {
    margin-left: 5px;
    margin-right: 5px;
    font-weight: 600;
    padding: 5px 10px;
    :hover {
      background-color: #cdd1d4;
      opacity: 0.5;
      color: black;
      border-radius: 10px;
    }
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  padding: 5px 10px;
  :hover {
    background-color: #cdd1d4;
    opacity: 0.5;
    color: black;
    border-radius: 10px;
  }
`;
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color: white;
    opacity:0.85;
    width:250px;
    z-index: 100;
    scroll-behavior: smooth;
    list-style: none;
    padding:20px;
    display:flex;
    flex-direction: column;
    text-align:start;
    overflow: auto;
    white-space: nowrap;
    transition: transform 0.2s ease-in;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    li {
        padding:5px 10px;
        margin-left:10px;
        margin-top:5px;
        margin-bottom:5px;
        a{
            font-weight:600;
            font-size:15px;
        }
        :hover {
            background-color: whitesmoke;
            color: black;
            border-radius: 10px;
        }
    }
`;
const CustomClose = styled(CloseIcon)`
    display: block;
    :hover {
        background-color: whitesmoke;
        border-radius: 100px;
    }
    padding:1px;
    cursor: pointer;
`
const CustomWrap = styled.div`
    display:flex;
    justify-content: flex-end;
`
