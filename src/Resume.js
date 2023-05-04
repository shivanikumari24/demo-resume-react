import '../componentCSS/resume.css'
export default function Resume() {
    return (
        < div>
            <h1 className='info1'>Shivani Jha</h1>
            <p className='info'><strong> Contact : </strong> 629900000</p>
            <p className='info'><strong> Email : </strong> shivani@gmail.com</p>
            <p className='info'><strong> Address :</strong>H No. 13 ,Dhulkoot <br></br>Dehradun,248007</p>

            <hr></hr>

            <h3 className='obj'>CAREER OBJECTIVE</h3>
            <p className='detail'> <b>• </b>To obtain a challenging career in the IT industry and put all my efforts into the growth of the organization and have a great working environment.</p>
            <h3 className='obj'>EDUCATION</h3>
            <p className='detail'><b>• </b>Tula's Institute,Dehradun - Bachelor of Technology in computer science and Engineering</p>
            <p className='pree'>(2020-2024)</p>
            <p className='detail'><b>• </b>Satyam International School,Patna — Higher secondary education | CBSE </p>
            <p className='pree'>(2018-2020)</p>
            <p className='detail'><b>• </b>Shivam convent, Patna — Secondary Education | CBSE </p>
            <p className='pree'>(2016-2018)</p>
            <p className='detail'><b>• </b>HTML</p>


            <h3 className='obj'>Technical skills</h3>
            <p className='detail'><b>• </b>Iot</p>
            <p className='detail'><b>• </b>HTML</p>
            <p className='detail'><b>• </b>CSS</p>
            <p className='detail'><b>• </b>Java Script</p>
            <p className='detail'><b>• </b>Photoshop</p>

            {/* <h3 className='obj'>Project</h3>
            <p className='detail'><b>• </b><a href='https://github.com/shivanikumari24/my-grocery'>My-Grocery </a> </p>
            <p className='pree'>(Static website)</p>
            <p className='detail'><b>• </b> Attendance Mangement System</p>
            {/* <p className='detail'><b>• </b></p> */}
            {/* <p className='detail'><b>• </b>E-commerce website</p>
            <p className='pree'>(using HTML,CSS & JavaScript)</p> */}
        </div>
    )
}

export function Objective() {
    return (
        <>
            <h3 className='obj'>Project</h3>
            <p className='detail'><b>• </b><a href='https://github.com/shivanikumari24/my-grocery'>My-Grocery </a> </p>
            <p className='pree'>(Static website)</p>
            <p className='detail'><b>• </b> Attendance Mangement System</p>
            {/* <p className='detail'><b>• </b></p> */}
            <p className='detail'><b>• </b>E-commerce website</p>
            <p className='pree'>(using HTML,CSS & JavaScript)</p>

        </>

    );
}

