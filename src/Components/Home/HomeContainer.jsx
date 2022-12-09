import React from 'react'
import { Image, Typography } from 'antd';
import { Link } from 'react-router-dom';
import banner from '../../assets/Images/Done.png'
import vector from '../../assets/Images/Vector.png'
import './HomeContainer.css'

const { Title } = Typography;

export default function HomeContainer() {
    return (
        <div className='home'>
            <Image className='image'
                width={350}
                src={banner}
            />
            <Title className='title' level={5}>Welcome to</Title>
            <Title className='title' level={3}>OUR REMINDER</Title>
            <span className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dictum tempus, interdum at dignissim metus. Ultricies sed nunc.</span>
            <Link to='/register'>Get Start  <Image width={15}  src={vector} /></Link>
        </div>
    )
}