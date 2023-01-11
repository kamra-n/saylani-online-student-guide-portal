import { Card, Button, Form, Input } from 'antd';

export default function AddNews() {
  const handleSubmitNews = () => {

  }
  return (
    <>
      <div className="w-full">
        <div className=" text-center h-100">
          <div className='mt-4 site-card-border-less-wrapper flex justify-center items-center'>
            <Card title="Add News" bordered={true} style={{ width: '500px', padding: '2rem', minWidth: '250px' }} className='bg-gray-50'>
              <Form
                layout='vertical' onFinish={handleSubmitNews}>
                <Form.Item label="Add Title" name="title"
                  rules={[{ required: true, message: 'Please input your News name!' }]}>

                  <Input placeholder="Enter your Name" id="my-input" />
                </Form.Item>

                <Form.Item label="Add News Description" name="textarea"
                  rules={[{ required: true, message: 'Please input your News Description!' }]}>
                  <Input.TextArea rows={4} placeholder='Add your News Description! ' />             
                </Form.Item>
                <Button htmlType='submit'>Submit News Info</Button>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </>

  )
}
