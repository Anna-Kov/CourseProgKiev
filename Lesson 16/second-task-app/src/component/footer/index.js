import React from 'react'
import './footer.css'

const Footer=(props)=>{
const {menu}=props
const listInfo=menu.map((element,index)=>{
    return(
        <li key={index+"r"}className="info">{element}</li>
    )
})
    return(
        <div className="end">
            <ul className="link">
                {listInfo}
            </ul>
            <p>Copyright &copy;2020</p>
        </div>
    )
}
export default Footer