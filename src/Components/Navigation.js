import { Link } from "react-router-dom";
function Navigation()
{
    return(
        <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-between',background: '#e5e5e5',padding:'20px'}}>
        <div style={{display:'flex',gap:'10px',cursor:'pointer'}}>
            <Link to="/">Home</Link>
            <Link to="/instructions">Instructions</Link>
        </div>
        <div style={{display:'flex',gap:'10px',cursor:'pointer'}}>
         <Link to="/register">Add manufacturer</Link>
         </div>
        </div>
    );                                                              
}
export default Navigation;