import React, { useState } from 'react'
import './Form.css';
import Profil1 from '../Assets/men-1.png'
import Profil2 from '../Assets/women-1.png'
import Profil3 from '../Assets/men-2.png'
import Profil4 from '../Assets/women-2.png'
import axios from 'axios';

function Form() {
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("")
    const [gender, setGender] = useState("")
    const [department, setDepartment] = useState("")
    const [salary, setSalary] = useState("")
    const [day, setDay] = useState(0)
    const [month, setMonth] = useState("")
    const [year, setYear] = useState(0)
    const [notes, setNotes] = useState("")



    let employee = {
      name: name,
      gender: gender,
      //profileImage: profilePic,
      department: department,
      salary: salary,
      startDate: `${day} ${month} ${year}`,
      notes: notes
    }

    function handleSubmit(e){
      e.preventDefault()
      console.log("Submited");
      axios.post("http://localhost:8082/Emplyoee_Payroll/Register_Employee",employee)
      .then(responce => alert(responce.data.message))
      .catch(error => console.log(error))
      window.location.reload();
    }


  return (
    <div className='form-content'>
        <form className='form'>
          <div className='form-head'>
              <h1>Employee Payroll form</h1>
          </div>
          <div className="row-content">
            <label  className="label text">Name</label>
            <input type="text" className="input" name="name"
            placeholder="Your name.." 
            pattern='^[A-Z]{1}[a-zA-Z]{1,}$'
            onChange={(event) => {
            console.log(event.target.value) 
            setName(event.target.value)}}  />
          </div>

          <div className="row-content">
            <label className="label text">Profile image</label>
            <div className="profile-radio-content">
            <label>
            <input type="radio" name="profilePic" onChange={() => setProfilePic(Profil1)} />
            <img className="profile" src={Profil1}></img>
            </label>

            <label>
            <input type="radio" name="profilePic" onChange={() => setProfilePic(Profil2)} />
            <img className="profile" src={Profil2}></img>
            </label>

            <label>
            <input type="radio" name="profilePic" onChange={() => setProfilePic(Profil3)} />
            <img className="profile" src={Profil3}></img>
            </label>

            <label>
            <input type="radio" name="profilePic" onChange={() => setProfilePic(Profil4)} />
            <img className="profile" src={Profil4}></img>
            </label>
            </div>
            </div>

            <div className="row-content">
            <label className="label text">Gender</label>
            <div className="gender-radio-content">
            <div>
            <input type="radio" className='input-content' name="gender" value="male" onChange={() => setGender("male")} />
            <label className="text">Male</label>&#160;&#160; &#160;
            <input type="radio" name="gender" value="female" onChange={() => setGender("female")} />
            <label className="text">Female</label>
            </div>
            </div>
            </div>

            <div className="row-content">
            <label className="label text"> Department </label>
            <div >
            <input type="checkbox" className='input-content' size= "5" name="department" onChange={() => setDepartment("HR")} /> HR &#160; &#160;
            <input type="checkbox" size= "5" name="department" onChange={() => setDepartment("Sales")} /> Sales &#160; &#160;
            <input type="checkbox" size= "5" name="department" onChange={() => setDepartment("Finance")} /> Finance &#160; &#160;
            <input type="checkbox" size= "5" name="department"  onChange={() => setDepartment("Engineer")} /> Engineer &#160; &#160;
            <input type="checkbox" size= "5" name="department" onChange={() => setDepartment("Others")} /> Others &#160; &#160;
            </div>
            </div>

            <div className="row-content">
            <label>Salary &#160; &#160; &#160;</label>

            <div className='selectBox'>
                    <select name="salary" onChange={(event) => setSalary(event.target.value)}>
                        <option value=" ">Select Salary</option>
                        <option>₹ 25,000</option>
                        <option>₹ 30,000</option>
                        <option>₹ 60,000</option>
                        <option>₹ 90,000</option>
                        <option>₹ 1,20,000</option>
                        <option>₹ 1,50,000</option>
                        <option>₹ 2,00,000</option>
                    </select>
                    </div>
                    </div>

                    <div className="row-content">
                    <label>Start Date</label>
                    <div className='selectBox'>
                    <select name="day" onChange={(event) => setDay(event.target.value)}>
                        <option>Day</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>                                
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select> &#160;
                    </div>
                    
                    <select name="month" onChange={(event) => setMonth(event.target.value)}>
                        <option value="" >Month</option>
                        <option>January</option>
                        <option>Febuary</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select> &#160;
                    

                    <select name="year" id="year" onChange={(event) => setYear(event.target.value)}>
                        <option value="" >Year</option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                    </select>
                    </div>

            <div className="row-content">
            <label className="label text">Notes</label>
            <textarea className="input" name="notes" placeholder="" onChange={(event) => setNotes(event.target.value)}></textarea>
            </div>

            <div className="buttonParent">
              <button type='cancel' className='cancelButton'>Cancel</button>
              <button type='submit' className='submitButton' onClick={(e) => handleSubmit(e)}>Submit</button>  
              <button type='reset' className='resetButton'>Reset</button>    
            </div>
            </form>
        </div >
  )
}

export default Form