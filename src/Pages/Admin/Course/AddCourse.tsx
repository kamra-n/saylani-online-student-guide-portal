import { Card, Button, Form, Input, Upload, UploadFile } from 'antd';


export default function AddCourse() {
  const handleSubmitCourse = () => {

  }
  return (
    <>
      <div className="w-full">
        <div className=" text-center h-100">
          <div className='mt-4 site-card-border-less-wrapper flex justify-center items-center'>
            <Card title="Add Course" bordered={true} style={{ width: '500px', padding: '2rem', minWidth: '250px' }} className='bg-gray-50'>
              <Form
                layout='vertical' onFinish={handleSubmitCourse}>
                <Form.Item label="Course Name" name="name"
                  rules={[{ required: true, message: 'Please input your Course name!' }]}>

                  <Input placeholder="Enter your Course Name" id="my-input" />
                </Form.Item>

                <Form.Item label="Add Course Description" name="textarea"
                  rules={[{ required: true, message: 'Please input your Course Description!' }]}>
                  <Input.TextArea rows={4} placeholder='Add your Course Description! ' />
                </Form.Item>

                <Form.Item label="Add Course Photo">
                  <Upload listType="picture-card" maxCount={1}>
                    <div>
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </Form.Item>

                <Form.Item label="Add Technologies/Tools Use in Course" name="textarea"
                  rules={[{ required: true, message: 'Please input your Technologies/Tools Use in Course!' }]}>
                  <Input.TextArea rows={4} placeholder='Add your Technologies/Tools Use in Course! ' />             
                </Form.Item>

                <Form.Item label="Course Duration" name="duration"
                  rules={[{ required: true, message: 'Please input your Course Duration!' }]}>

                  <Input placeholder="Enter your Course Duration" id="my-input" />
                </Form.Item>
                <Button htmlType='submit'>Submit Course Info</Button>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
