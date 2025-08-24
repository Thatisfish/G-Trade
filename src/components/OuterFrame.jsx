import React from 'react'
import "../styles/_OuterFrame.scss"

const OuterFrame = ({ iconOne, iconTwo, text, textClass }) => {
    const hasIcon = !!iconOne;
    return (
        <>
            <div className={`c_packContainer ${hasIcon ? "withIcon" : "textOnly"}`}>
                <div className='c_packTilBoxShadow'></div>
                <div className='c_packTilBox'>
                    {hasIcon ? (
                        <>
                            <div className='c_withIcon'>
                                <img src={iconOne} alt="" className='c_iconOne' />
                                <p className='c_iconTitle'>{text}</p>
                            </div>
                            <img src={iconTwo} alt="" className="c_iconTwo" />
                        </>
                    ) : (
                        <div className='c_textOnly'>
                            <p className={`c_onlyTitle ${textClass || ""}`}>{text}</p>
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default OuterFrame