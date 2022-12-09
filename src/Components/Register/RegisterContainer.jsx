import React, { useEffect, useState } from 'react'
import { Button, Image, Input, Typography } from 'antd';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { schemaRegister } from '../../Utils/Schema';
import { postUser } from '../../Services/apiUser';
import banner from '../../assets/Images/Done.png'

import './RegisterContainer.css'

const { Title } = Typography;

export default function RegisterContainer() {
  const navigate = useNavigate()
  const [checkPass, setCheckPass] = useState(false)
  const [infoRegister, setUserRegister] = useState()
  const { control, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schemaRegister)
  });

  useEffect(() => {
    const registerUser = async () => {
      try {
        if (infoRegister) {
          await postUser('users', infoRegister)
          navigate('/login')
        }
      } catch (error) {

      }
    }
    registerUser()
  }, [infoRegister])

  const onSubmit = data => {
    if (data.password === data.confirmPassword) {
      setUserRegister({
        name: data.name,
        email: data.email,
        password: data.password
      })
      setCheckPass(false)
    }
    else {
      alert('Mật khẩu nhập chưa trùng!')
      setCheckPass(true)
    }
  };

  return (
    <div className='register'>
      <Image className='image'
        width={300}
        src={banner}
      />
      <Title className='title' level={3}>Get’s things done with TODO</Title>
      <span className='description'>Let’s help you meet up your tasks</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='name'
          control={control}
          render={({ field }) => <Input className='inputInfo' {...field} placeholder='Enter your full name' status={errors.name && 'error'} />}
        />
        <Controller
          name='email'
          control={control}
          render={({ field }) => <Input className='inputInfo'{...field} placeholder='Enter your email' status={errors.email && 'error'} />}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => <Input.Password className='inputInfo' {...field} placeholder='Enter password' status={errors.password && 'error'} />}
        />
        <Controller
          name='confirmPassword'
          control={control}
          render={({ field }) => <Input.Password className='inputInfo' {...field} placeholder='Confirm Password' status={errors.confirmPassword || checkPass && 'error'} />}
        />
        <Button htmlType='submit'>Register</Button>
      </form>
      <span>Already have an account ? <Link to='/login'>Sign In</Link></span>
    </div>
  )
}