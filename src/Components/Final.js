import img from "./th.jpeg";
import './Final.css';
function Final()
{
    return(
        <div align="center" background='#fffff'>
            <font color="green" size="50"><i>Valid Product</i></font><br></br>
            <img className = "button" alt="img" src={img} height="300" width="300"></img>
        </div>
    );
}
export default Final;