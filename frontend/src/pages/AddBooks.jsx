import React from 'react'
import PageLayout from '../components/Layout/PageLayout'
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import axios from 'axios';
import { useState } from 'react';
export default function AddBooks() {


const [componentSize, setComponentSize] = useState('default');
const [name, setName] = useState('');
const [author, setAuthor] = useState('');
const [genre, setGenre] = useState('');
const [date, setDate] = useState('');
const [inputNumber, setInputNumber] = useState('');
const [description, setDescription] = useState('');

function handleDescription(e){

    setDescription(e.target.value);
    console.log(description);
}


function handleChangeTitle(e){
   setName(e.target.value);
   console.log(name);
}
function setAuthorName(e) {
    setAuthor(e.target.value);
}
function setGenreName(e) {
    setGenre(e);
    console.log(genre)

}

async function addBook(e) {
    e.preventDefault();
    const book = {
        name:name,
        author:author,
        description:description,
        genre:genre,
      
    }
    console.log(book);
    //axios add book request
    const res = await axios.post('http://localhost:8000/api/books/insert', book);
    console.log(res.data);

}

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };


  return (
    <>
    <PageLayout></PageLayout>
   <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Name" required >
        
        <Input placeholder='Book Name' onChange={handleChangeTitle} />
      </Form.Item>
        <Form.Item label="Author" required>
        <Input placeholder='Author Name' onChange={setAuthorName}/>
      </Form.Item>
        <Form.Item label="Description" required>
        <Input placeholder='Write A short Description' onChange={handleDescription}/>
      </Form.Item>
      <Form.Item label="Genre" required >
        <Select placeholder='Genre' onChange={setGenreName} >
          <Select.Option value="novel" >Novel</Select.Option>
          <Select.Option value="fiction" >Fiction</Select.Option>
          <Select.Option value="non-fiction" >Non Fiction</Select.Option>
        </Select>
   </Form.Item>
          {/*<Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: 'Light',
              value: 'light',
              children: [
                {
                  title: 'Bamboo',
                  value: 'bamboo',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                },
              ],
            },
          ]}
        />
      </Form.Item> */}
      <Form.Item label="DatePicker">
        <DatePicker onChange={setDate}/>
      </Form.Item>
      <Form.Item label="ISBN Number">
        <Input placeholder='ISBN' onChange={setInputNumber} />
      </Form.Item>
      {/* <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item> */}
      
        <Form.Item >
      <Button type="primary" htmlType="submit" onClick={addBook}>
        Submit
      </Button>
    </Form.Item>
     
    </Form>
    </>
  )
}
