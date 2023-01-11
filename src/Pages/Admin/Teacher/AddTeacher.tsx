import { Card, Button, Form, Input,Upload, UploadFile } from 'antd';


export default function AddTeacher() {
  const handleSubmitSlider =()=>{

  }
  return (
    <>
    <div className="w-full">
      <div className=" text-center h-100">
      <div className='mt-4 site-card-border-less-wrapper flex justify-center items-center'>
          <Card title="Add Teacher" bordered={true} style={{ width: '500px', padding: '2rem', minWidth: '250px' }} className='bg-gray-50'>
            <Form
              layout='vertical' onFinish={handleSubmitSlider}>
                  <Form.Item label="Add Teacher Name" name="name"
                rules={[{ required: true, message: 'Please input your Teacher name!' }]}>

                <Input placeholder="Enter your Name" id="my-input"  />
              </Form.Item>

              <Form.Item label="Add Teacher Phone" name="name"
                rules={[{ required: true, message: 'Please input your Teacher Phone!' }]}>

                <Input placeholder="Enter your Name" id="my-input"  />
              </Form.Item>
              <Form.Item label="Add Teacher Qualification" name="name"
                rules={[{ required: true, message: 'Please input your Teacher Qualification!' }]}>

                <Input placeholder="Enter your Name" id="my-input"  />
              </Form.Item>
             <Form.Item label="Add Teacher Photo">
                <Upload listType="picture-card"  maxCount={1}>
                  <div>
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
                <Button htmlType='submit'>Submit Teacher Info</Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  </>
  )
}
