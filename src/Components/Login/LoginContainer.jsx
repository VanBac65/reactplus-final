import React from 'react'
import { Button, Image, Input, Typography } from 'antd';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { schemaLogin } from '../../Utils/Schema';
import banner from '../../assets/Images/Done.png'
import './LoginContainer.css'

const { Title } = Typography;

export default function LoginContainer() {
    const navigate = useNavigate()
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaLogin),
        mode: 'onBlur',
        reValidateMode: 'onBlur',
    });

    const onSubmit = (data) => {
        navigate('/dashboard')
    };

    return (
        <div className='login'>
            <Image className='image'
                width={300}
                src={banner}
            />
            <Title className='title title-1' level={5}>Welcome back to</Title>
            <Title className='title' level={3}>OUR REMINDER</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='email'
                    control={control}
                    render={({ field }) => <Input className='inputInfo' {...field} placeholder='Enter your email' status={errors.email ? 'error' : ''} />}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <Controller
                    name='password'
                    control={control}
                    render={({ field }) => <Input.Password className='inputInfo'{...field} placeholder='Enter password' status={errors.email ? 'error' : ''} />}
                />
                {errors.password && <p>{errors.password.message}</p>}
                <Button htmlType='submit'>Sign In</Button>
            </form>
            <span>Already have an account ? <Link to='/register'>Sign Up</Link></span>
        </div>
    )
}