import VpnKeyIcon from '@material-ui/icons/VpnKey';
import "./LoginStyle.css";

export default function LoginForm ({signinUser, handleInputChange}) {
    return (
        <div id = "login" className = "container d-flex justify-content-center align-items-center mt-5">
<div className = "row">
    <div className = "col-md-6 offset-md-3 col-xl-4 offset-xl-4">
        <div className = "card shadow">
            <div className = "card text-center" style = {{margin: "0 auto", width: "23rem", backgroundColor: "#00b3b3"}}> Log In </div>
            <div style = {{margin: "0 auto", width: "80rem"}} className = "card-body">
                <form onSubmit = {signinUser}>
                    <div style = {{ marginLeft: "30px", width: "20rem"}} className = "mb-3">
                        <label className = "form-label" htmlFor = "user id"> User ID: </label>
                        <input type = "text" id = "user id" onChange = {handleInputChange} className = "form-control" name = "username" autoFocus required />
                    </div>
                    <div style = {{ marginLeft: "30px", width: "20rem"}} className = "mb-3">
                        <label className = "form-label" htmlFor = "password"> Password: </label>
                        <input  type = "password" id = "password" onChange = {handleInputChange} className = "form-control" name = "password" required />
                    </div>
                    <button style = {{width: "23rem", backgroundColor: "#009999"}} className = "mt-5 btn btn-block"> LET's GO <VpnKeyIcon style = {{fontSize: "medium"}} /> </button>
                </form>
                <p style = {{marginLeft : "100px"}} className = "card-text"> Forgot your Password ? </p>
            </div>
        </div>
    </div>
</div>
</div>
    )
}

