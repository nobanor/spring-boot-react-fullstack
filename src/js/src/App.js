import './App.css';
import {getAllStudents} from './client';
import React, { Component } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import Container from './Container';
import Footer from './Footer';
import AddStudentForm from './forms/AddStudentForm';
import {
  Table,
  Avatar,
  Spin,
  Modal,
  antIcon
} from 'antd';

const getIndicatorAntIcon = () => <LoadingOutlined style={{ fontSize: 24 }} spin />;

class App extends Component{
  
  state = {
    students: [],
    isFetching: false,
    isAddStudentModalVisible: false
  }

  componentDidMount () {
    this.fetchStudents();
  }

  openAddStudentModal = () => this.setState({isAddStudentModalVisible: true})
  closeAddStudentModal = () => this.setState({isAddStudentModalVisible: false})

  fetchStudents = () => {
    this.setState({
      isFetching: true
    });
    getAllStudents()
      .then(res => res.json()
      .then(students => {
        console.log(students);
        this.setState({
          students,
          isFetching: false
        });
    }));
  }

  render(){
    const { students, isFetching, isAddStudentModalVisible } = this.state;

    if(isFetching){
      return(
        <Container>
          <Spin indicator={getIndicatorAntIcon()}/>
        </Container>
      )
    }
    if(students && students.length){
        const columns = [
          {
            title:'',
            key:'avatar',
            render: (text, student) => (
              <Avatar size='large'>
                {`
                  ${student.firstName.charAt(0).toUpperCase()} 
                  ${student.lastName.charAt(0).toUpperCase()}
                `}
              </Avatar>
            )
          },
          {
            title: 'Student Id',
            dataIndex: 'studentId',
            key: 'studentId'
          },
          {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName'
          },
          {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName'
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
          },
          {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender'
          }
        ];

        return (
          <Container>
            <Table 
            dataSource={students} 
            columns={columns} 
            pagination={false}
            rowKey='studentId'/>
            <Modal
              title='Add new student'
              visible={isAddStudentModalVisible}
              onOk={this.closeAddStudentModal}
              onCancel={this.closeAddStudentModal}
              width={1000}>
              <AddStudentForm />
            </Modal>
            <Footer 
              numberOfStudents = {students.length}
              handleAddStudentClickEvent={this.openAddStudentModal}/>
          </Container>
        );
    }

    return (
    <h1> No Students Found</h1>
    );
  }
}

export default App;
