import "./css/Course.css"
import { FaCode, FaServer, FaDatabase, FaLaptopCode,FaMobileAlt, FaChartLine} from "react-icons/fa";
function Course(){

    let course = [
        {title:"Full Stack", icon: <FaServer size={40} color="blue" /> },
        {title:"AI&ML", icon:<FaLaptopCode size={40} color="blue"/> },
        {title:"MERN Stack" ,icon: <FaDatabase size={40} color="blue" /> },
        {title:"Mobile App Development", icon:<FaMobileAlt size={40} color="blue" /> },
        {title:"Digital Marketing", icon:<FaChartLine size={40} color="blue"/> },
        {title:"Java, Python, C", icon:<FaCode size={40} color="blue" /> },
        
]

    return (
        <>
        <div className="Main">
            <div className="heading"> Course </div>
            <div className="whole">
            {course.map(course=>{
                return(
                    <>
                    <div className="Box">
                        <div className="icon">
                    {course.icon}
                        </div>
                        <div className="sub">
                        {course.title}
                        </div>
                        
                    </div>
                    </>
                )
            })}
            </div>
            
        </div>
        </>
    )

}

export default Course;