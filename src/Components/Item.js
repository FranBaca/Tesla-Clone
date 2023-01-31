import React from 'react'
import Button from './Button'
import "./Item.css"

export default function Item({title, desc, backgroundImg , leftBtnTxt, leftBtnLink,rightBtnTxt, righBtnLink, twoButtons}) {
    return (
        <div className="item" style={{
            backgroundImage:`url(${backgroundImg})`
        }}>
            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__textDesc">
                        <p style={{color:"#7C7D81", fontSize:"13.5px"}}>{desc}</p>
                    </div>
                </div>
                <div className="item__lowerThird">
                    <div className="item__buttons">
                        <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
                        {twoButtons && (
                            <Button imp="secondary" text={rightBtnTxt} link={righBtnLink} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}