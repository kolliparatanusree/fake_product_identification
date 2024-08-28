import img from "./wrong.jpeg";
function Wrong()
{
    return(
        <div align="center">
            <font color="red" size="50"><i>Fake product</i></font><br></br>
            <img alt="img" src={img} height="30%" width="30%"></img>
        </div>
    );
}
export default Wrong;