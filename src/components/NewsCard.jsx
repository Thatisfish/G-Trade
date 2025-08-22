import React from 'react'
import banner01 from '../images/banner01.webp'
import banner02 from '../images/banner02.webp'

const arrNewsC = [
    {
        id: 1,
        image: banner01,
        title: '咚奇剛蕉力全開+咚奇剛amiibo',
        content: 'paly**56',
    },
    {
        id: 2,
        image: banner02,
        title: '咚奇剛蕉力全開+咚奇剛amiibo',
        content: 'paly**56',
    },
    {
        id: 3,
        image: banner01,
        title: '咚奇剛蕉力全開+咚奇剛amiibo',
        content: 'paly**56',
    },
    {
        id: 4,
        image: banner02,
        title: '咚奇剛蕉力全開+咚奇剛amiibo',
        content: 'paly**56',
    },
]


const NewsCard = () => {
    return (
        <div>
            {arrNewsC}
        </div>
    )
}

export default NewsCard