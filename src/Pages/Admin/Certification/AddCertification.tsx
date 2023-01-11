import { Card, Button, Form, Input,Upload, UploadFile } from 'antd';

export default function AddCertification() {
  const handleSubmitCertification=()=>{

  }
  return (
    <>
    <div className="w-full">
      <div className=" text-center h-100">
      <div className='mt-4 site-card-border-less-wrapper flex justify-center items-center'>
          <Card title="Add Certification" bordered={true} style={{ width: '500px', padding: '2rem', minWidth: '250px' }} className='bg-gray-50'>
            <Form
              layout='vertical' onFinish={handleSubmitCertification}>
                  <Form.Item label="Add Student Name" name="name"
                rules={[{ required: true, message: 'Please input your Student name!' }]}>

                <Input placeholder="Enter your Student Name" id="my-input"  />
              </Form.Item>

              <Form.Item label="Add Student Roll No" name="rollNo"
                rules={[{ required: true, message: 'Please input your Student Roll No!' }]}>

                <Input placeholder="Enter your Name" id="my-input"  />
              </Form.Item>
              <Form.Item label="Add Passing Year" name="year"
                rules={[{ required: true, message: 'Please input your Passing Year!' }]}>

                <Input placeholder="Enter your Name" id="my-input"  />
              </Form.Item>
                <Button htmlType='submit'>Submit Certification Info</Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  </>
  )
}
