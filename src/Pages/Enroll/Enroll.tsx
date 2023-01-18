import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import QRCode from "react-qr-code";


import { Card, Button, Form, Input, DatePicker, Select, Upload, UploadFile } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';
import { bgPageHeader } from '../../assets'
import Header from '../../Component/Header/Header';

export default function Enroll() {
  const navigate = useNavigate()
  // collect data from form
  const [name, setName] = useState<string>('');
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      setImageUrl(event.target!.result as string);
    };
    if (info.file.originFileObj) {

      reader.readAsDataURL(info.file.originFileObj);
    }
  };
  const [phone, setPhone] = useState<string>('');
  const [id] = useState<string>("K" + Date.now());
  const [degree, setDegree] = useState<string>('');
  const [cnic, setCnic] = useState<string>('');
  const [date, setDate] = useState<any>('')
  const [email, setEmail] = useState('');
  const handleDateChange = (dateString: any): void => {
    setDate(dateString)
  }
  const [course, setCourse] = useState<any>('');

  const [isReadyToEnroll, setIsReadyToEnroll] = useState<boolean>(false);


  const handleSubmit = () => {
    const obj = {
      id,
      name,
      imageUrl,
      phone,
      degree,
      cnic,
      date,
      course,
      email
    }
    setIsReadyToEnroll(true)

  }


  // download pdf work
  const admitTemplateRef = useRef<any>(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
    });

    // Adding the fonts.
    doc.setFont('Inter-Regular', 'normal');

    doc.html(admitTemplateRef.current, {
      callback(doc) {
        doc.save('admit-card');
        // navigate('/')


      },
    });
  };

  return (
    <>
      <Header />
      <div className='w-full max-h-64 p-24 mt-2 bg-no-repeat bg-cover flex justify-center items-center' style={{
        backgroundImage: `url(${bgPageHeader})`
      }}>
        <h2 className='bg-white text-center w-fit p-2 lg:p-4 rounded-md text-[#0d6db7] text-xl font-semibold'>Enroll Now</h2>
      </div>
      <div className='flex justify-around items-center'>
        <div className='mt-4 site-card-border-less-wrapper flex justify-center items-center' style={{ display: isReadyToEnroll ? 'none' : 'block' }}>
          <Card title="Enroll yourself" bordered={true} style={{ maxWidth: '600px', padding: '2rem', minWidth: '250px' }} className='bg-gray-50'>
            <Form
              layout='vertical' onFinish={handleSubmit}>
              <Form.Item label="Full Name" name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}>

                <Input placeholder="Enter your Name" id="my-input" value={name} onChange={(e) => { setName(e.target.value) }} />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input value={email} onChange={(e) => { setEmail(e.target.value) }} />
              </Form.Item>
              <Form.Item label="Add Photo" valuePropName="fileList"  >
                <Upload listType="picture-card" onChange={handleChange} maxCount={1}>
                  <div>
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
              <Form.Item label="Add your Phone number" name="phone"
                rules={[{ required: true, message: 'Please input your phone number!' }]}>
                <Input placeholder="Enter your Phone Number" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
              </Form.Item>
              <Form.Item label="Last Degree" name="degree"
                rules={[{ required: true, message: 'Please input your last degree!' }]}>
                <Input placeholder="Enter your last degree" value={degree} onChange={(e) => { setDegree(e.target.value) }} />
              </Form.Item>
              <Form.Item>
                <Form.Item label="CNIC/B-form" name="cnic"
                  rules={[{ required: true, message: 'Please input your Cnic!' }]}>
                  <Input placeholder="Enter your CNIC/B-form" value={cnic} onChange={(e) => { setCnic(e.target.value) }} />
                </Form.Item>
                <Form.Item label="Add your date of birth" name="Birtday"
                  rules={[{ required: true, message: 'Please input your Birtday!' }]}>
                  <DatePicker defaultValue={date} onChange={handleDateChange} />
                </Form.Item>
                <Form.Item label="Select course you want to enroll" name="Select course you want to enroll" rules={[{ required: true, message: 'Select course you want to enroll' }]}>
                  <Select value={course} onChange={(value) => { setCourse(value) }}>
                    <Select.Option value='deo'>Demo</Select.Option>

                  </Select>
                </Form.Item>
                <Button htmlType='submit' className='w-full p-2 flex justify-center items-center rounded-md'>Submit Form</Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
        <div style={{ display: isReadyToEnroll ? 'block' : 'none' }} className='mt-5'>
          {<div className="site-card-border-less-wrapper bg-white rounded-lg shadow-md p-6 flex flex-col flex-1 text-center justify-center">
            <Card bordered={false} style={{ maxWidth: '500px' }} id='my-element'>
              <div ref={admitTemplateRef} className="w-[300px] h-[400px] border flex flex-col justify-around items-center">

                <div className='my-2 bg-blue-500 text-center w-full text-white rounded-md flex justify-center items-center'>Admit Card</div>
                <div>
                  <img src={imageUrl} alt="Student" className="w-52 h-52 rounded-md mx-auto mb-4" />
                  <p className="text-lg font-semibold mb-2">Student Name : {name}</p>
                  <p className="text-lg font-semibold mb-2 ">Student ID: 12345</p>
                  {/* <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                  <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={id}
                    viewBox={`0 0 256 256`}
                  />
                </div> */}
                </div>
              </div>


            </Card>
            <button className='bg-blue-500 text-white border-none p-3 rounded-md' onClick={handleGeneratePdf}>Download</button>
          </div>}


        </div>
      </div>
    </>

  )
}
