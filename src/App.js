import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <>
      <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
        <a className="navbar-brand" href="#"><b>RFID Attendance System</b></a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">Attendance Record</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">More</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#scrollspyHeading3">Our Team</a></li>
              <li><a className="dropdown-item" href="#scrollspyHeading4">Contact us</a></li>
              {/* <li><hr className="dropdown-divider"></li> */}
              <li><a className="dropdown-item" >Log out</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
        <br />
        <u><h3 id="scrollspyHeading1" style={{textAlign: "center"}}>Profile</h3></u>
        <br />
        <center><img src="blank profile 2.jpeg" alt="Profile" width="150" height="150" style={{borderRadius: "100px"}} /></center>
        <br /><b>
          <center>Username: NeerajJM</center>
          <center>Name: Neeraj J Manurkar</center>
          <center>Registration Number: 20BRS1597</center></b>
        <br /><br />
        <u><center><h4 id="scrollspyHeading2">Attendance Record</h4></center></u>
        <br />
        <center>
          <div className="dropdown" style={{display: "inline-block"}}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Choose Semester
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Winter Semester 2021-22</a></li>
              <li><a className="dropdown-item" href="#">Fall Semester 2021-22</a></li>
              <li><a className="dropdown-item" href="#">Winter Semester 2020-21</a></li>
            </ul>
          </div>

          <div className="dropdown" style={{display: "inline-block",paddingLeft: "20px"}}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Choose Subject
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">CSE2006</a></li>
              <li><a className="dropdown-item" href="#">ECE2036</a></li>
              <li><a className="dropdown-item" href="#">CSE2012</a></li>
              <li><a className="dropdown-item" href="#">CSE2038</a></li>
              <li><a className="dropdown-item" href="#">STS2202</a></li>
              <li><a className="dropdown-item" href="#">CSE2039</a></li>
              <li><a className="dropdown-item" href="#">MAT2010</a></li>
              <li><a className="dropdown-item" href="#">MGT1022</a></li>
            </ul>
          </div>
          <br /><br />
          <table className="table table-striped table-dark" style={{textAlign: "center",width: "90%"}}>
            <thead>
              <tr >
                <th scope="col">Sr. No.</th>
                <th scope="col">Date</th>
                <th scope="col">In-time</th>
                <th scope="col">Temperature recorded</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>05-04-22</td>
                <td>07:56</td>
                <td>98.9 F</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>12-04-22</td>
                <td>08:10</td>
                <td>97.5 F</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>19-04-22</td>
                <td>08:01</td>
                <td>99 F</td>
              </tr>
            </tbody>
          </table>
        </center>
        <br /><br />
        <u><center><h3 id="scrollspyHeading3">Our Team</h3></center></u>
        <center>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{height: "700px", width: "1200px"}}>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="Neeraj.jpeg" height="720px" width="300" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Neeraj J Manurkar </h5>

                </div>
              </div>
              <div className="carousel-item">
                <img src="Rishikesh 2.jpeg" height="720" width="300" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Rishikesh Raj Nair </h5>

                </div>
              </div>
              <div className="carousel-item">
                <img src="Nirav 2.jpeg" height="720" width="300" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Nirav Sanjay Bhatt </h5>

                </div>
              </div>
              <div className="carousel-item">
                <img src="Vidhi.jpeg" height="720" width="300" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Vidhi Bhagwandas Ajbani</h5>

                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </center>
        <br /><br />
        <center>
          <div style={{backgroundColor:"rgb(172, 215, 255)"}}>
            <h4 id="scrollspyHeading4">Contact Us</h4>
            Mobile No.: 12234567890<br />
            Email: rfidsystem@gmail.com<br />
            <p>Address: VIT Chennai Campus,<br />
              Vandalur-Kelambakkam Road,<br />
              Chennai-600127,<br />
              Tamil Nadu, India.</p>
          </div></center>


      </div>
    </>
  );
}

export default App;
