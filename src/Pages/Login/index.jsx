import { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
//style
import './style.css'
//components 
import { data } from '../../Components/Data'
import { LoginContext } from '../../Components/Context'
export const Login = () => {
    
    const location = useLocation()
    const nav = useNavigate()

    const context = useContext(LoginContext)

    const validate = (email,password) =>{
        
        const truePass = data.find(
            (val) => val.userName === email && val.password === password
        )
        if(truePass !== undefined){
            context.setValue(true)
            nav(location.state.from.pathname)
        } else {
            context.setValue(false)
        }
    }
    return(
        <div className = 'page-wrapper'>   
            <div className = 'form-wrapper'>
                <form 
                    className = 'login-form'
                    onSubmit = {(e) => {
                        e.preventDefault();
                        console.log(e)
                        validate(e.target[0].value,e.target[1].value)
                    }}
                >
                    <div className = 'input-wrapper'>
                        <input type = 'email' />
                        <label>Email</label>
                    </div>
                    <div className ='input-wrapper'>
                        <input type = 'password' />
                        <label>Password</label>
                    </div>
                    <button className = 'login-button'>Log In</button>
                    <hr/>
                    <div>
                        <button className = 'registration-button'>Create new account</button>
                    </div>
                    
                </form>   
            </div>
            
        </div>
        
    )
}