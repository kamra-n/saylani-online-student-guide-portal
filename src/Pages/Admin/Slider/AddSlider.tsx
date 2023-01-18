import { useEffect, useState } from 'react';
import { Card, Button, Form, Input } from 'antd';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../../firebase.config';
import { doc, setDoc } from "firebase/firestore";

export default function AddSlider() {

  const [name, setName] = useState<string>('')

  const [file, setFile] = useState<any>('')

  const [imageUrl, setImageUrl] = useState<string>()

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed',
        (snapshot) => {

          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error)
        },
        () => {

          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            setImageUrl(downloadURL)
          });
        }
      );

    }
    file && uploadFile();


  }, [file])

  const handleSubmitSlider = async () => {
    const sliderID = new Date().getTime();
    try {
      await setDoc(doc(db, "sliders", `${sliderID}`), {
        name,
        imageUrl,
        id: sliderID
      });
      alert('data upload successfully')
      setName('');
      setFile('');
    }
    catch (e) {
      console.log(e)
    }


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
                  <Input placeholder="Enter your Name" id="my-input" value={name} onChange={(e) => { setName(e.target.value) }} />
                </Form.Item>
                <Form.Item>
                  <input type='file' onChange={(e) => { setFile(e.target.files![0]) }} />
                </Form.Item>
                <Button htmlType='submit' disabled={!imageUrl}>Upload Slider</Button>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
