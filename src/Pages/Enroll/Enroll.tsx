import { useState } from 'react';
import { Card, Button, Form, Input, DatePicker, Select, Upload, UploadFile } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';

import { bgPageHeader } from '../../assets'

export default function Enroll() {
  // collect data from form
  const [name, setName] = useState<string>('');
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      setImageUrl(event.target!.result as string);
    };
    // reader.readAsDataURL(info.file.originFileObj);
  };
  const [phone, setPhone] = useState<string>('');
  const [degree, setDegree] = useState<string>('');
  const [cnic, setCnic] = useState<string>('');
  const [date, setDate] = useState<any>('')
  const handleDateChange = (dateString: any): void => {
    setDate(dateString)
  }
  const [course, setCourse] = useState<any>('');

  const [isReady, setIsReady] = useState<boolean>(false);


  const handleSubmit = () => {
    const obj = {
      name,
      imageUrl,
      phone,
      degree,
      cnic,
      date,
      course
    }
    console.log(obj)
    setIsReady(true)
  }
  return (
    <>

      <div className='w-full max-h-64 p-24 mt-2 bg-no-repeat bg-cover flex justify-center items-center' style={{
        backgroundImage: `url(${bgPageHeader})`
      }}>
        <h2 className='bg-white text-center w-fit p-2 lg:p-4 rounded-md text-[#0d6db7] text-xl font-semibold'>Enroll Now</h2>
      </div>
      <div className='flex justify-around items-center'>
        <div className='mt-4 site-card-border-less-wrapper flex justify-center items-center' style={{ display: isReady ? 'none' : 'block' }}>
          <Card title="Enroll yourself" bordered={true} style={{ width: '600px', padding: '2rem', minWidth: '250px' }} className='bg-gray-50'>
            <Form
              layout='vertical' onFinish={handleSubmit}>
              <Form.Item label="Full Name">
                <Input placeholder="Enter your Name" id="my-input" value={name} onChange={(e) => { setName(e.target.value) }} />
              </Form.Item>
              <Form.Item label="Add Photo" valuePropName="fileList">
                <Upload listType="picture-card" onChange={handleChange} maxCount={1}>
                  <div>
                    {/* <PlusOutlined /> */}
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
              <Form.Item label="Add your Phone number">
                <Input placeholder="Enter your Phone Number" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
              </Form.Item>
              <Form.Item label="Last Degree">
                <Input placeholder="Enter your last degree" value={degree} onChange={(e) => { setDegree(e.target.value) }} />
              </Form.Item>
              <Form.Item>
                <Form.Item label="CNIC/B-form" >
                  <Input placeholder="Enter your CNIC/B-form" value={cnic} onChange={(e) => { setCnic(e.target.value) }} />
                </Form.Item>
                <Form.Item label="Add your date of birth" >
                  <DatePicker defaultValue={date} onChange={handleDateChange} />
                </Form.Item>
                <Form.Item label="Select course you want to enroll">
                  <Select value={course} onChange={(value) => { setCourse(value) }}>
                    <Select.Option value='deo'>Demo</Select.Option>

                  </Select>
                </Form.Item>
                <Button htmlType='submit'>Submit Form</Button>
              </Form.Item>
            </Form>
          </Card>
        </div>

        <div style={{ display: isReady ? 'block' : 'none' }} className='mt-5'>
          {<div className="site-card-border-less-wrapper">
            <Card title="Admit Card" bordered={false} style={{ width: 300 }}>
              
            </Card>
          </div>}

        </div>
      </div>
    </>

  )
}
