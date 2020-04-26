import React from 'react'
import './post-1.css'

const Post=()=>{
return(
    <div>
    <div className="image">
    <img src={"../image/ramda.png"} alt="photo" className="picture"></img>
    </div>
    <div className="source">
            <p>Lorem ipsum — классическая панграмма, условный, зачастую бессмысленный текст-заполнитель, 
                вставляемый в макет страницы. Используется в качестве заполнителя по крайней мере с XVI века.
                 Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», 
                 написанного в 45 году до н. э. на латинском языке, обнаружение сходства атрибутируется Ричарду МакКлинтоку.</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
)
}
export default Post