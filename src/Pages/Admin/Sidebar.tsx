import { Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className='flex justify-center items-center'>
      <ul className="p-8 flex flex-col justify-around h-full">
        <Dropdown
          label="Slider"
          dismissOnClick={true}
        >
          <Link to='add-slider'>
            <Dropdown.Item>
              Add Slider
            </Dropdown.Item>
          </Link>
          <Link to='view-slider'>
            <Dropdown.Item>
              View Slider
            </Dropdown.Item>
          </Link>
        </Dropdown>

        <Dropdown
          label="News"
          dismissOnClick={true}
        >
          <Link to='add-news'>
            <Dropdown.Item>
              Add News
            </Dropdown.Item>
          </Link>
          <Link to='view-news'>
            <Dropdown.Item>
              View News
            </Dropdown.Item>
          </Link>
        </Dropdown>

        <Dropdown
          label="Course"
          dismissOnClick={true}
        >
          <Link to='add-course'>
            <Dropdown.Item>
              Add Course
            </Dropdown.Item>
          </Link>
          <Link to='view-course'>
            <Dropdown.Item>
              View Course
            </Dropdown.Item>
          </Link>
        </Dropdown>

        <Dropdown
          label="Teacher"
          dismissOnClick={true}
        >
          <Link to='add-teacher'>
            <Dropdown.Item>
              Add Teacher
            </Dropdown.Item>
          </Link>
          <Link to='view-teacher'>
            <Dropdown.Item>
              View Teacher
            </Dropdown.Item>
          </Link>
        </Dropdown>


        <Dropdown
          label="Certification"
          dismissOnClick={true}
        >
          <Link to='add-certification'>
            <Dropdown.Item>
              Add Certification
            </Dropdown.Item>
          </Link>
          <Link to='view-certification'>
            <Dropdown.Item>

              Manage Certification
            </Dropdown.Item>
          </Link>
        </Dropdown>


        <Dropdown
          label="Registration"
          dismissOnClick={true}
        >
          <Link to='view-registration'>
            <Dropdown.Item>
              Manage Registration
            </Dropdown.Item>
          </Link>
        </Dropdown>
      </ul>
    </div>
  )
}
