import React, { useState } from 'react'
import './Form.css';
import Profil1 from '../Assets/men-1.png'
import Profil2 from '../Assets/women-1.png'
import Profil3 from '../Assets/men-2.png'
import Profil4 from '../Assets/women-2.png'

function Form() {
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("")
    const [gender, setGender] = useState("")
    const [hr, setHr] = useState(false);
    const [sales, setSales] = useState(false);
    const [finance, setFinace] = useState(false);
    const [engineer, setEngineer] = useState(false);
    const [others, setOhers] = useState(false);
    const [salary, setSalary] = useState("")
    const [day, setDay] = useState(0)
    const [month, setMonth] = useState(0)
    const [year, setYear] = useState(0)
    const [notes, setNotes] = useState("")



  return (
    <div className='form-content'>
        <form className='form'>
          <div className='form-head'>
              <h1>Employee Payroll form</h1>
          </div>
          <div className="row-content">
            <label className="label text">Name</label>
            <input type="text" className="input" name="name"
            placeholder="Your name.." onChange={() => setName(name)} />
          </div>

          <div className="row-content">
            <label className="label text">Profile image</label>
            <div className="profile-radio-content">
            <label>
            <input type="radio" name="profilePic" onChange={() => setProfilePic(profilePic)} />
            <img className="profile" src={Profil1}></img>&#160;
            </label>

            <label>
            <input type="radio" name="profilePic" onChange={() => setProfilePic(profilePic)} />
            <img className="profile" src={Profil2}></img>&#160;
            </label>

            <label>
            <input type="radio" name="profilePic" onChange={() => setProfilePic(profilePic)} />
            <img className="profile" src={Profil3}></img>&#160;
            </label>

            <label>
            <input type="radio" name="profilePic" onChange={() => setProfilePic(profilePic)} />
            <img className="profile" src={Profil4}></img>&#160;
            </label>
            </div>
            </div>

            <div className="row-content">
            <label className="label text">Gender</label>
            <div className="gender-radio-content">
            <div>
            <input type="radio" className='input-content' name="gender" value="male" onChange={() => setGender(gender)} />
            <label className="text">Male</label>&#160;
            <input type="radio" name="gender" value="female" onChange={() => setGender(gender)} />
            <label className="text">Female</label>
            </div>
            </div>
            </div>

            <div className="row-content">
            <label className="label text"> Department </label>
            <div >
            <input type="checkbox" className='input-content' size= "5" name="hr" onChange={() => setHr(!hr)}/> HR &#160; &#160;
            <input type="checkbox" size= "5" name="department" value="sales" onChange={() => setSales(!sales)} /> Sales &#160; &#160;
            <input type="checkbox" size= "5" name="department" value="finance" onChange={() => setFinace(!finance)} /> Finance &#160; &#160;
            <input type="checkbox" size= "5" name="department" value="engineer" onChange={() => setEngineer(!finance)} /> Engineer &#160; &#160;
            <input type="checkbox" size= "5" name="department" value="others" onChange={() => setOhers(!finance)} /> Others &#160; &#160;
            </div>
            </div>

            <div className="row-content">
            <label>Salary &#160; &#160; &#160;</label>

            <div className='selectBox'>
                    <select name="salary" onChange={() => setSalary(salary)}>
                        <option value=" ">Select Salary</option>
                        <option value="30,000">30,000₹</option>
                        <option value="60,000">60,000₹</option>
                        <option value="90,000">90,000₹</option>
                        <option value="1,20,000">1,20,000₹</option>
                        <option value="1,50,000">1,50,000₹</option>
                    </select>
                    </div>
                    </div>

                    <div className="row-content">
                    <label>Start Date</label>
                    <div className='selectBox'>
                    <select name="day" onChange={() => setDay(day)}>
                        <option value=" ">Day</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>                                
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select> &#160;
                    </div>
                    
                    <select name="month" onChange={() => setMonth(month)}>
                        <option value="" >Month</option>
                        <option value="01">January</option>
                        <option value="02">Febuary</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select> &#160;
                    

                    <select name="year" id="year" onChange={() => setYear(year)}>
                        <option value="" >Year</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                    </select>
                    </div>

            <div className="row-content">
            <label className="label text">Notes</label>
            <textarea className="input" name="notes" placeholder="" onChange={() => setNotes(notes)}></textarea>
            </div>

            <div className="buttonParent">
              <button type='cancel'>Cancel</button>
              <button type='submit'>Submit</button>  
              <button type='reset'>Reset</button>    
            </div>
            </form>
        </div >
  )
}

export default Form