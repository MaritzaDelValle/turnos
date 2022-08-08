import Navbar from '../Navbar/Navbar'
const Principal = (props) => {
    return (
    <>
        <Navbar></Navbar>
        {props.children}
    </>
    )
}
export default Principal; 