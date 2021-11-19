/* eslint-disable no-unused-vars */
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import React from "react"


// cors prevents random requests from different localhost and port from taking place
// This is a web browser to increase security
const Members = ()=>{
    const [Searchname, setSearchname] = useState('')

    // member data states
   /* const [Loading , setLoading] = useState(true)
    const [data , setData] = useState(null)
    const[error, setError] = useState(null)*/

    // Dummy user database
    const members_DB = [
        {
            id:0,
            name:'nimrod',
            age:18,
            speciality:'web design and data analysis'
        },
        {
            id:1,
            name:'James',
            age:19,
            speciality:'Game design with UNITY'
        },
        {
            id:1,
            name:'James',
            age:19,
            speciality:'Game design with UNITY'
        },
        {
            id:1,
            name:'James',
            age:19,
            speciality:'Game design with UNITY'
        },
        {
            id:1,
            name:'James',
            age:19,
            speciality:'Game design with UNITY'
        },
        {
            id:1,
            name:'James',
            age:19,
            speciality:'Game design with UNITY'
        }
    ]
    // selecting childnodes of a html tag
    // use innerHTML to change the contents of a HTML element
    /* var i = document.getElementsByClassName('user-wrapper').childNodes
    i[1].innerHTML = "HELLO NIMROD" */

    return(
        <div className="specialists_wrapper">
            <div className="intro-image">
                <div className="title">MEMBERS PAGE</div>
            </div>
            <hr/>
            <div className="search-wrapper">
                <form  onSubmit={(e)=>{setSearchname(e.target.value)}}>
                    <input type="text" placeholder="Enter name" className="form-control"
                    onChange={(e)=>{setSearchname(e.target.value)}}></input>
                    <button type="submit" className="btn btn-primary">SEARCH</button>
                </form>
            </div>
            <div className="count-wrapper">
                <p><b>{members_DB.length}</b> Members in the club</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="user-wrapper">
                        {Searchname === ''? members_DB.map((member)=>{
                            var i = 0
                            for(i=0;i<3;i++){
                                return (
                                    <div className="user-info">
                                        <div className="user-description">
                                            im an interesting programmer
                                        </div>
                                        <div className="profile-image"></div>
                                        <p> NAME: {member.name }</p>
                                        <p>AGE: {member.age}</p>
                                        <p>SKILLSET: {member.speciality}</p>
                                </div>
                                )
                            }
                            return "error 404"
                        }): members_DB.map((member)=>{
                                var i = 0
                                const Searchname = setSearchname('nimrod')
                                for(i=0;i<members_DB.length;i++){
                                    if(member.name.toLowerCase === Searchname.toLowerCase){
                                        return(
                                            <div className="user-info">
                                                <div className="user-description">
                                                    im an interesting programmer
                                                </div>
                                                <div className="profile-image"></div>
                                                    <p> NAME: {member.name }</p>
                                                    <p>AGE: {member.age}</p>
                                                    <p>SKILLSET: {member.speciality}</p>
                                            </div>
                                        )
                                    }
                                    return 'user not registered'
                                }
                            return 'error 404'
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Members;