import React, { useState, useEffect } from 'react'
import { Avatar, Button, Typography, Image, Checkbox } from 'antd'
import { getListTodo } from '../../Services/apiUser'
import { formatDate } from '../../Utils/FormatDate'
import { useNavigate } from 'react-router-dom'
import avatar from '../../assets/Images/Group 4.png'
import clock from '../../assets/Images/Group 7.png'
import addTodo from '../../assets/Images/plus-circle.png'
import './DashboardContainer.css'

const { Title } = Typography;

export default function DashboardContainer() {
    const [tasksList, setTasksList] = useState([])
    const navigate = useNavigate()

    const handleLogOut = () => {
        navigate('/login')
    }

    useEffect(() => {
        const fetchListTodo = async () => {
            try {
                const dataListTodo = await getListTodo('tasks')
                setTasksList(dataListTodo)
            } catch (error) {

            }
        }
        fetchListTodo()
    }, [])

    return (
        <div className='dashboard'>
            <div className="dashboard-top">
                <Avatar size={100} src={avatar} />
                <Title className='name' level={5}>Monica Gamage</Title>
                <Title className='nickname' level={5}>@monicagamage</Title>
                <Button onClick={() => handleLogOut()}>Log Out</Button>
            </div>
            <div className="dashboard-content">
                <div className="dashboard-content-clock">
                    <Image
                        width={120}
                        src={clock}
                    />
                    <p>Good Afternoon</p>
                </div>
                <div className="dashboard-content-tasks-list">
                    <div className="title">
                        <p>Tasks List</p>
                    </div>
                    <div className="box-lists">
                        <div className="box-list-top">
                            <div className='box-list-top-title'>Tasks list</div>
                            <div className='box-list-top-button'>
                                <Button>
                                    <Image
                                        width={25}
                                        src={addTodo}
                                    />
                                </Button>
                            </div>
                        </div>
                        <div className="box-list-content">
                            <ul>
                                {
                                    tasksList && tasksList.map((todo) => {
                                        return (
                                            <li key={todo.id}>
                                                <Checkbox defaultChecked={todo.completed} />
                                                <span> &nbsp; {todo.name} at {formatDate(todo.createdAt)} </span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}