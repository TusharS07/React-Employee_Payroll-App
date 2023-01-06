import React, { Component, Profiler } from 'react';
import './RegisterEmployee.css';
import Profil1 from '../Assets/men-1.png'
import Profil2 from '../Assets/women-1.png'
import Profil3 from '../Assets/men-2.png'
import Profil4 from '../Assets/women-2.png'

class RegisterEmployee extends Component {
    render() {
        return (
            <div className= 'RegisterEmployee'>
                <h1>Employee Payroll Form</h1>
                <form>
                    <div>
                    <label>Name &nbsp; &#160;</label>
                    <input type="text" size="50"></input>
                    <br></br>
                    <br></br>
                    </div>

                    <div>
                    <label>Profile image &nbsp; &#160; &#160;</label>
                    <input type="radio" size="4" name="profile pic"/> <img className="profile" src={Profil1}></img> &#160; &#160;
                    <input type="radio" size="4" name="profile pic"/> <img className="profile" src={Profil2}></img> &#160; &#160;
                    <input type="radio" size="4" name="profile pic"/> <img className="profile" src={Profil3}></img> &#160; &#160;
                    <input type="radio" size="4" name="profile pic"/> <img className="profile" src={Profil4}></img> &#160; &#160;
                    <br></br>
                    <br></br>
                    </div>

                    <label>Gender &nbsp; &nbsp; &#160; </label>
                    <input type="radio" size="4" name="gender" value="male"/> Male &#160; &#160;
                    <input type="radio" size="4" name="gender" value="female"/> Female
                    <br></br>
                    <br></br>

                    <label>Department &nbsp; &#160; </label>
                    <input type="checkbox" size= "5" name="department" value="hr"/> HR &#160; &#160;
                    <input type="checkbox" size= "5" name="department" value="sales"/> Sales &#160; &#160;
                    <input type="checkbox" size= "5" name="department" value="finance"/> Finance &#160; &#160;
                    <input type="checkbox" size= "5" name="department" value="engineer"/> Engineer &#160; &#160;
                    <input type="checkbox" size= "5" name="department" value="others"/> Others &#160; &#160;
                    <br></br>
                    <br></br>

                    <label>Salary &nbsp; &#160; </label>
                    <select className='selectBox' name="salary">
                        <option value=" ">Select Salary</option>
                        <option value="30,000">30,000₹</option>
                        <option value="30,000">60,000₹</option>
                        <option value="30,000">90,000₹</option>
                        <option value="30,000">1,20,000₹</option>
                        <option value="30,000">1,50,000₹</option>
                    </select>
                    <br></br>
                    <br></br>

                    <label>Start Date &nbsp; &#160; </label>
                    <select name="day">
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

                    <select name="month">
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

                    <select name="year" id="year">
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
                    <br></br>
                    <br></br>

                    <label>Nodes &nbsp; &#160; </label>
                    <textarea className='input' name='nodes' value=" "></textarea>
                </form>
            </div>
        );
    }
}

export default RegisterEmployee;