import { Card, Button, Form, Input,Upload, UploadFile } from 'antd';

export default function AddSlider() {
  const handleSubmitSlider =()=>{

  }
  return (
    <>
    <div className="w-full">
      <div className=" text-center h-100">
      <div className='mt-4 site-card-border-less-wrapper flex justify-center items-center'>
          <Card title="Add Slider" bordered={true} style={{ width: '500px', padding: '2rem', minWidth: '250px' }} className='bg-gray-50'>
            <Form
              layout='vertical' onFinish={handleSubmitSlider}>
                  <Form.Item label="Add Slider Name" name="name"
                rules={[{ required: true, message: 'Please input your slider name!' }]}>

                <Input placeholder="Enter your Name" id="my-input"  />
              </Form.Item>
              <Form.Item label="Add Slider" valuePropName="fileList" className='flex justify-center my-3 text-2xl'  >
                <Upload listType="picture-card"  maxCount={1}>
                  <div>
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
                <Button htmlType='submit'>Upload Slider</Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  </>
  )
}
