import React from "react";
import "./Card.css";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

interface CardProps {
  emoji: string,
  heading: string,
  detail: string,
  color?: Color,
}

const Card = ({emoji, heading, detail, color}: CardProps) => {
  return (
    <div className="card" style={{borderColor: color}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
