import { Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div>
          <ul className="p-8 flex flex-col justify-around h-full">
            <Dropdown
              label="Manage Slider"
              dismissOnClick={false}
            >
              <Dropdown.Item>
                <Link to='add-slider'>Add Slider</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='view-slider'>
                  View Slider
                </Link>
              </Dropdown.Item>
            </Dropdown>

            <Dropdown
              label="Manage News"
              dismissOnClick={false}
            >
              <Dropdown.Item>
                <Link to='add-news'>Add News</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='view-news'>View News</Link>
              </Dropdown.Item>
            </Dropdown>

            <Dropdown
              label="Manage Course"
              dismissOnClick={false}
            >
              <Dropdown.Item>
                <Link to='add-course'>Add Course</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='view-course'>View Course</Link>
              </Dropdown.Item>
            </Dropdown>

            <Dropdown
              label="Manage Teacher"
              dismissOnClick={false}
            >
              <Dropdown.Item>
                <Link to='add-teacher'>
                  Add Teacher
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='view-teacher'>
                  View Teacher
                </Link>
              </Dropdown.Item>
            </Dropdown>


            <Dropdown
              label="Manage Certification"
              dismissOnClick={false}
            >
              <Dropdown.Item>
                <Link to='add-certification'>
                  Add Certification
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='manage-certification'>

                  Manage Certification
                </Link>
              </Dropdown.Item>
            </Dropdown>


            <Dropdown
              label="Manage Registration"
              dismissOnClick={false}
            >
              <Dropdown.Item>
                <Link to='add-registration'>
                  Add Registration

                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='manage-registration'>
                  Manage Registration
                </Link>
              </Dropdown.Item>
            </Dropdown>
          </ul>
        </div>
  )
}
