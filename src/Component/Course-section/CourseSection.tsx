import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Card} from "antd";

import {
    cardImageOne,
    cardImageTwo,
    cardImageThree,
    cardImageFour,
} from "../../assets";



export default function CourseSection() {

    //////////////////////////// view course Modal work////////////////////
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);

    };

    const gridStyle: React.CSSProperties = {
        width: '50%',
        textAlign: 'left',
    };

    const gridStyle1: React.CSSProperties = {
        width: '50%',
        textAlign: 'left',
    };


    //////////////////////////// view course Modal work////////////////////

    //////////////////////////// card work////////////////////
    type CARDDATA = {
        id: number;
        coursename: string;
        courseImage: string;
        teacher: string;
        coursedes: string;
        coursestartdate: string;
        technologies: string[];
        courseduration: string;
    };

    const CARD_DATA = [
        {
            id: 12,
            courseImage: cardImageOne,
            coursename: "web and mobile app development",
            teacher: "ishaqbhojani",
            coursedes: "web and mobile app development Saylani Welfare is on the ground and",
            coursestartdate: "07-02-2020",
            technologies: [
                "HTML",
                "CSS",
                "JAVASCRIP",
                "REACT",
                "MONGODB",
                "REDUX",
                "EXPRESS JS",
            ],
            courseduration: "12months",
        },
        {
            id: 22,
            courseImage: cardImageTwo,
            coursename: "web and mobile app development",
            teacher: "ishaqbhojani",
            coursedes: "web and mobile app development Saylani Welfare is on the ground and",
            coursestartdate: "07-02-2020",
            technologies: [
                "HTML",
                "CSS",
                "JAVASCRIP",
                "REACT",
                "MONGODB",
                "REDUX",
                "EXPRESS JS",
            ],
            courseduration: "12months",
        },
        {
            id: 32,
            courseImage: cardImageThree,
            coursename: "web and mobile app development",
            teacher: "ishaqbhojani",
            coursedes: "web and mobile app development Saylani Welfare is on the ground and",
            coursestartdate: "07-02-2020",
            technologies: [
                "HTML",
                "CSS",
                "JAVASCRIP",
                "REACT",
                "MONGODB",
                "REDUX",
                "EXPRESS JS",
            ],
            courseduration: "12months",
        },
        {
            id: 42,
            courseImage: cardImageFour,
            coursename: "web and mobile app development",
            teacher: "ishaqbhojani",
            coursedes: "web and mobile app development Saylani Welfare is on the ground and",
            coursestartdate: "07-02-2020",
            technologies: [
                "HTML",
                "CSS",
                "JAVASCRIP",
                "REACT",
                "MONGODB",
                "REDUX",
                "EXPRESS JS",
            ],
            courseduration: "12months",
        },
    ];
    //////////////////////////// card work////////////////////



    return (
        <div className="mt-32">
            <div className="course__heading">
                <h2 className="text-2xl text-center lg:text-4xl lg:text-left font-semibold">
                    Courses we Offered
                </h2>
                <div className="bg-[#0d6db7] w-52 h-1 ml-12 lg:ml-6  mt-2 pl-10"></div>
            </div>

            <div className="course__cardMain mt-6 gap-6 flex flex-col  lg:flex lg:flex-row lg:justify-center items-center">
                {CARD_DATA.map((v: CARDDATA, i: any) => {
                    return (
                        <>
                            <div
                                className="card h-auto min-w-[280px] max-w-[300px] bg-[#eeeeee] p-4 rounded-md"
                                key={v.id}
                            >
                                <img className="w-full rounded-md" src={v.courseImage} alt="card-image" />
                                <div className="p-2">
                                    <p className="text-sm bg-[#8DC63F] w-fit p-1 rounded-md text-white my-2 mx-2">
                                        {v.coursestartdate}
                                    </p>
                                    <h2 className="p-2 text-base font-semibold">{v.coursename}</h2>
                                </div>
                                <div className="flex gap-2 p-2">
                                    <button className="border-none bg-[#0d6db7] text-white w-[140px] p-1 rounded-md flex-auto" onClick={showModal}>
                                        View Details
                                    </button>
                                    <button className="border-none bg-[#8DC63F] text-white w-[140px] p-1 rounded-md flex-auto">
                                       <Link to='/enroll'>Enroll now</Link> 
                                    </button>
                                </div>
                            </div>
                            <Modal
                                open={open}
                                key={i}
                                title="Course Information"
                                onCancel={handleCancel}
                                footer={[
                                    <Button key="back" onClick={handleCancel}>
                                        Close
                                    </Button>]}>
                                <Card key={v.id}>
                                    <Card.Grid style={gridStyle}><p> Course Name</p></Card.Grid>
                                    <Card.Grid style={gridStyle1}>
                                        <p>{v.coursename}</p>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}><p> Course Description</p></Card.Grid>
                                    <Card.Grid style={gridStyle1}>
                                        <p className="overflow-x-hidden overflow-y-scroll h-3/4">{v.coursedes}</p>
                                    </Card.Grid>

                                    <Card.Grid style={gridStyle}><p> Course Duration</p></Card.Grid>
                                    <Card.Grid style={gridStyle1}>
                                        <p >{v.courseduration}</p>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}><p>Technologies</p></Card.Grid>
                                    <Card.Grid style={gridStyle1}>
                                        <p>{`${v.technologies} ,`}</p>
                                    </Card.Grid>
                                </Card>

                            </Modal>
                        </>);
                })}
            </div>
        </div>
    );
}
