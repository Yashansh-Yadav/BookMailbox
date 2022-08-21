// All imports........................................
import React from 'react'
import info from '../media/info.png'
import steel from '../media/steel-bg.jpg'
import canclePop from '../media/cancel-popup.png'
import selectMore from '../media/color-picker.png'
import pron1 from "../media/pron-new1.jpg"
import pron2 from "../media/pron-new2.jpg"
import pron3 from "../media/pron-new3.jpg"
import pron4 from "../media/pro-new4.jpg"
import pron5 from "../media/pro-new5.jpg"
import pron6 from "../media/pro-new-6.jpg"
import perpendicular from "../media/senkrecht.jpg"
import horizontal from "../media/waagerecht.jpg"
import boxSmall from "../media/small-img.png"
import boxMedium from "../media/medium-img.png"
import boxLarge from "../media/Large-img.png"
import tight from "../media/tight.jpeg"
import applying from "../media/applying.jpeg"
import { BsCheckLg } from 'react-icons/bs'
import { FaStreetView } from 'react-icons/fa'
import { FaUserAlt } from "react-icons/fa"
import { MdLocationCity } from "react-icons/md"
import { ImLocation2 } from "react-icons/im"
import { MdEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { useState } from 'react'
//.......................................................

// Global intialisation..................................
let checkPresence1 = false, checkPresence2 = false, checkPresence3 = false,
  checkPresence4 = false, checkPresence5 = false, checkPresence6 = false, checkPresence7 = false;

// mail function .............. ..........................
export const CardItem = (props) => {
// All useState variables....................................  
  const [mountingType, setmountingType] = useState("")
  const [colorCheck, setColorCheck] = useState("")
  const [ShowPop, setShowPop] = useState(false)
  const [colorSelected, setColorSelected] = useState("white")
  const [paneling, setPaneling] = useState("")
  const [mailboxesSize, setMailboxesSize] = useState("")
  const [mailboxesType, setMailboxesType] = useState("")
  const [radiosClicked, setRadiosClicked] = useState([])
  const [first_name, setFirst_name] = useState("")
  const [last_name, setLast_name] = useState("")
  const [addressof, setAddresspf] = useState("")
  const [residenceof, setresidenceof] = useState("")
  const [residenceof2, setresidenceof2] = useState("")
  const [emailinput, setEmailInput] = useState("")
  const [phoneNum, setPhoneNum] = useState("")
  const [textAreadata, setTextAreaData] = useState("")
  const [street, setStreet] = useState("")
  const [totalMailBox, setTotalMailBox] = useState("")
  const [onTop, setOntop] = useState("")
  const [sideBySide, setSidebySide] = useState("")
  const [example_image, setExample_image] = useState("")
  const [customRALColor, setCustomRALColor] = useState("")
  const [displayErr, setDisplayErr] = useState(false)
  const [reloadBtn, setReloadBtn] = useState(false)
  const [displayCusColor, setDisplayCusColor] = useState("")

// color catalog controler...........................
  const colorCon = (Colorcode, color) => {
    setColorCheck(Colorcode);
    setColorSelected(color);
    setDisplayCusColor("");
  }

  // handling files..............................

  const exampleImage = (e) => {
    let image = e.target.files
    let reader = new FileReader();
    reader.readAsDataURL(image[0])
    reader.onload = (e) => {
      setExample_image(e.target.result);
    }
  }

  //handeling all radios...................

  const handelCheck1 = (e) => {
    const val = "Video - inklusive Videomodul1"
    if (checkPresence1 === false && e.target.checked === true) {
      setRadiosClicked([...radiosClicked, val])
      checkPresence1 = true
    }
    else {
      setRadiosClicked(radiosClicked.filter((t) => {
        return t !== val;
      }))
      checkPresence1 = false
    }

  }
  const handelCheck2 = (e) => {
    const val = "Video - nur Aussparung, ohne Modul"
    if (checkPresence2 === false && e.target.checked === true) {
      setRadiosClicked([...radiosClicked, val])
      checkPresence2 = true;
    }
    else {
      setRadiosClicked(radiosClicked.filter((t) => {
        return t !== val;
      }))
      checkPresence2 = false
    }

  }
  const handelCheck3 = (e) => {
    const val = "Sprechsieb - nur Lochstanzung, ohne Modul"
    if (checkPresence3 === false && e.target.checked === true) {
      setRadiosClicked([...radiosClicked, val])
      checkPresence3 = true;
    }
    else {
      setRadiosClicked(radiosClicked.filter((t) => {
        return t !== val;
      }))
      checkPresence3 = false
    }

  }
  const handelCheck4 = (e) => {
    const val = "Sprechsieb - inklusive Audiomodul"
    if (checkPresence4 === false && e.target.checked === true) {
      setRadiosClicked([...radiosClicked, val])
      checkPresence4 = true
    }
    else {
      setRadiosClicked(radiosClicked.filter((t) => {
        return t !== val;
      }))
      checkPresence4 = false;
    }

  }
  const handelCheck5 = (e) => {
    const val = "mit Klingeltaster"
    if (checkPresence5 === false && e.target.checked === true) {
      setRadiosClicked([...radiosClicked, val])
      checkPresence5 = true
    }
    else {
      setRadiosClicked(radiosClicked.filter((t) => {
        return t !== val;
      }))
      checkPresence5 = false
    }
  }
  const handelCheck6 = (e) => {
    const val = "mit Lichttaster"
    if (checkPresence6 === false && e.target.checked === true) {
      setRadiosClicked([...radiosClicked, val])
      checkPresence6 = true
    }
    else {
      setRadiosClicked(radiosClicked.filter((t) => {
        return t !== val;
      }))
      checkPresence6 = false
    }
  }
  const handelCheck7 = (e) => {
    const val = "mit 2tem Namensschild und Einlage „Keine Werbung“ bzw. ,Werbung, ja bitte"
    if (checkPresence7 === false && e.target.checked === true) {
      setRadiosClicked([...radiosClicked, val])
      checkPresence7 = true
    }
    else {
      setRadiosClicked(radiosClicked.filter((t) => {
        return t !== val;
      }))
      checkPresence7 = false;
    }
  }


 // handeling submits and Validation.......................

  const submitCustomColor = (e) => {
    e.preventDefault();
    setDisplayCusColor(customRALColor);
    setColorCheck("")
    setColorSelected("white")
    setCustomRALColor("");
  }

  const submit = (e) => {
    e.preventDefault();
    if (mountingType === "" || colorSelected === "" || paneling === "" ||
     mailboxesSize === "" || mailboxesType === "" ||
      first_name === "" || last_name === "" || emailinput === ""
       || totalMailBox === "" || onTop === "" || sideBySide === ""){
      setDisplayErr(true);
      alert("Please Fill all the required fields correctly")
    }
    else {
      props.formData(mountingType, colorSelected, paneling,
        mailboxesSize, mailboxesType, first_name, last_name, emailinput,
        street, addressof, residenceof, residenceof2, phoneNum, textAreadata,
        radiosClicked, totalMailBox, onTop, sideBySide, example_image, displayCusColor)


      setmountingType(""); setColorSelected("white"); setColorCheck(""); setPaneling(""); setMailboxesSize("")
      setMailboxesType(""); setFirst_name(""); setLast_name(""); setEmailInput(""); setStreet(""); setAddresspf("")
      setresidenceof(""); setresidenceof2(""); setPhoneNum(""); setTextAreaData(""); setRadiosClicked([]); setTotalMailBox("");
      setOntop(""); setSidebySide(""); setExample_image(""); setDisplayErr(false); setDisplayCusColor("")

      setReloadBtn(true);
      setTimeout(function () {
        window.location.reload(1);
      }, 3000);
    }
  }

  return (

    <div className='container-fluid nav_bg' >
      <div className='row'>
        <div className='col-10 mx-auto' >
          <div className='text-center text-dark mt-5'>
            <h1><b>Configure your mailbox system now</b></h1>
          </div>
          <nav className="navbar navbar-light  bg-primary mt-3">
            <div className="container-fluid">
              <h4 className='text-light'>Choose a mounting type*</h4>
            </div>
          </nav>

          <form onSubmit={submit} encType="multipart/form-data">
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 ">

              <div className="col">
                <div className="card card-hover border border-primary" onClick={() => setmountingType("detached")}>

                  <span className="hover_s"><img src={info} />
                    <label className="hover_s1">Free-standing letterbox systems can be set up both indoors and outdoors.
                      The stand is installed by setting it in concrete or screwing it on. <br />
                    </label>
                  </span>

                  <div className="card-body" >
                    <h5 className="card-title">detached</h5>
                    <p className="card-text">Mailbox system on stands for setting in concrete or screwing on</p>

                    <div className='CardImg'>
                      <img src={pron1} className="card-img-top " alt="..." />
                    </div>
                    <div className='box '>
                      {(mountingType === "detached") ? <BsCheckLg color='green' size="3vh" className='mt-2' /> : <></>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-hover border border-primary" onClick={() => setmountingType("On the wall")} >
                  <span className="hover_s"><img src={info} />
                    <label className="hover_s1"> Surface-mounted mailbox systems are screwed onto the wall.
                      This can be done both indoors and on the outside wall.<br />
                    </label>
                  </span>

                  <div className="card-body" >
                    <h5 className="card-title">On the wall</h5>
                    <p className="card-text">Mailbox system including casing, for wall mounting</p>

                    <div className='CardImg'>
                      <img src={pron2} className="card-img-top " alt="..." />
                    </div>
                    <div className='box '>
                      {(mountingType === "On the wall") ? <BsCheckLg color='green' size="3vh" className='mt-2' /> : <></>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-hover border border-primary" onClick={() => setmountingType("In the wall")} >


                  <span className="hover_s"><img src={info} />
                    <label className="hover_s1">Flush-mounted letterbox systems are embedded in the wall and form one
                      surface with the wall. The mail is removed, like the mail, on the front.<br />
                    </label>
                  </span>

                  <div className="card-body" >
                    <h5 className="card-title">In the wall</h5>
                    <p className="card-text">Letterbox system for installation in the wall with post removal at the front</p>

                    <div className='CardImg'>
                      <img src={pron3} className="card-img-top " alt="..." />
                    </div>
                    <div className='box '>
                      {(mountingType === "In the wall") ? <BsCheckLg color='green' size="3vh" className='mt-2' /> : <></>}
                    </div>

                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-hover border border-primary" onClick={() => setmountingType("Fence")} >


                  <span className="hover_s"><img src={info} />
                    <label className="hover_s1">Fence mailbox systems are integrated into the existing fence.
                      This can be done, for example, using a rod mat frame.
                      Mail is thrown in at the front and removed at the back.<br />
                    </label>
                  </span>

                  <div className="card-body" >
                    <h5 className="card-title">Fence</h5>
                    <p className="card-text">Mailbox system for mounting in the fence</p>

                    <div className='CardImg'>
                      <img src={pron4} className="card-img-top " alt="..." />
                    </div>
                    <div className='box '>
                      {(mountingType === "Fence") ? <BsCheckLg color='green' size="3vh" className='mt-2' /> : <></>}
                    </div>

                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-hover border border-primary" onClick={() => setmountingType("door panel")} >


                  <span className="hover_s"><img src={info} />
                    <label className="hover_s1">Door side panel letterbox systems are built into the existing element
                      (often glass windows) right next to the actual door. They consist of a front panel in
                      which the letter box flaps are built in and behind them boxes from which
                      the mail can be removed from the inside.<br />
                    </label>
                  </span>

                  <div className="card-body" >
                    <h5 className="card-title">Door panel</h5>
                    <p className="card-text">Mailbox system as part of the door element</p>

                    <div className='CardImg'>
                      <img src={pron5} className="card-img-top " alt="..." />

                    </div>
                    <div className='box '>
                      {(mountingType === "door panel") ? <BsCheckLg color='green' size="3vh" /> : <></>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-hover border border-primary" onClick={() => setmountingType("through the wall")} >


                  <span className="hover_s"><img src={info} />
                    <label className="hover_s1">Through-wall letterbox systems are built
                      into a wall as a through-hole box. The post is delivered from the
                      front (street) and the post is removed from the back (garden).
                      These systems are suitable for clinker brick pillars,
                      but can also be integrated into a house wall in order to be able to remove the mail from the inside.<br />
                    </label>
                  </span>

                  <div className="card-body" >
                    <h5 className="card-title">Through the wall</h5>
                    <p className="card-text">Letterbox system for installation in the wall with post removal at the rear</p>

                    <div className='CardImg'>
                      <img src={pron6} className="card-img-top " alt="..." />
                    </div>
                    <div className='box '>
                      {(mountingType === "through the wall") ? <BsCheckLg color='green' size="3vh" /> : <></>}
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {(displayErr === true && mountingType === "") ? <h5 className='mt-2 text-danger' >Please selecet mounting type*</h5> : <></>}

{/* chose mounting type color */}

            <nav className="navbar navbar-light  bg-primary mt-5">
              <div className="container-fluid">

                <h4 className='text-light'>Your color choice*</h4>
              </div>
            </nav>

            <div className="row row-cols-1 row-cols g-4 mt-4 ">
              <div className="col-md-2">
                <div className='colorCard' onClick={() => colorCon("V2A", "grey")}>
                  <div className="card Colorbox ">
                    <img src={steel} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                      {(colorCheck === "V2A") ? <BsCheckLg className=' checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}
                    </div>
                  </div>
                  <div className='contant text-center'>
                    Edelstahl
                    <h6>V2A</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className='colorCard' onClick={() => colorCon("RAL 7016", "#383E42")}>

                  <div className='card Colorbox' style={{ background: "#383E42" }}>
                    {(colorCheck === "RAL 7016") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}
                  </div>

                  <div className='contant text-center'>
                    Anthracite
                    <h6>RAL 7016</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className='colorCard' onClick={() => colorCon("RAL 9006", "#A1A1A0")}>

                  <div className='card Colorbox' style={{ background: "#A1A1A0" }}>
                    {(colorCheck === "RAL 9006") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}

                  </div>
                  <div className='contant text-center'>
                    white aluminum
                    <h6>RAL 9006</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className='colorCard' onClick={() => colorCon("RAL 9007", "#878581")}>

                  <div className='card Colorbox' style={{ background: "#878581" }}>
                    {(colorCheck === "RAL 9007") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}

                  </div>
                  <div className='contant text-center'>
                    Gray aluminum
                    <h6>RAL 9007</h6>
                  </div>
                </div>
              </div>


              <div className="col-md-2">
                <div className='colorCard' onClick={() => colorCon("RAL 90016", "#F1F0EA")}>

                  <div className='card Colorbox' style={{ background: "#F1F0EA" }}>
                    {(colorCheck === "RAL 90016") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}

                  </div>
                  <div className='contant text-center'>
                    Traffic woman
                    <h6>RAL 90016</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className='colorCard' onClick={() => colorCon("Db 703", "#61666A ")}>

                  <div className='card Colorbox' style={{ background: "#61666A " }}>
                    {(colorCheck === "DB 703") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}

                  </div>
                  <div className='contant text-center'>
                    Iron mica
                    <h6>DB 703</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className='colorCard' onClick={() => colorCon("RAL 7035", "#C5C7C4")}>

                  <div className='card Colorbox' style={{ background: "#C5C7C4" }}>
                    {(colorCheck === "RAL 7035") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}

                  </div>
                  <div className='contant text-center'>
                    Light grey
                    <h6>RAL 7035</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className='colorCard' onClick={() => colorCon("RAL 8017", "#442F29")}>

                  <div className='card Colorbox' style={{ background: "#442F29" }}>
                    {(colorCheck === "RAL 8017") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}

                  </div>
                  <div className='contant text-center'>
                    Chocolate brown
                    <h6>RAL 8017</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className='colorCard' onClick={() => colorCon("RAL 6005", "#114232")}>

                  <div className='card Colorbox' style={{ background: "#114232" }}>
                    {(colorCheck === "RAL 6005") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}

                  </div>
                  <div className='contant text-center'>
                    Moss green
                    <h6>RAL 6005</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className='colorCard' onClick={() => colorCon("RAL 9005", "#0E0E10")}>

                  <div className='card Colorbox' style={{ background: "#0E0E10" }}>
                    {(colorCheck === "RAL 9005") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}

                  </div>
                  <div className='contant text-center'>
                    Jet black
                    <h6>RAL 9005</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <button type="button" className="btn btn-secondary btn-lg" onClick={() => setShowPop(true)} width="140px">
                  <img src={selectMore} width="25px" /><strong className='fs-6 text-center'>Choose other color</strong>
                </button>
              </div>
            </div>

            <div className='colorIdicator mt-4'>

              {displayCusColor}

              {(colorCheck === "V2A") ? <svg width="20" height="20">
                <rect width="15" height="15" fill='grey' />
              </svg> : <svg width="20" height="20">
                <rect width="15" height="15" fill={colorSelected} />
              </svg>}
              {colorCheck}
            </div>

{/* Color catalogue popup */}

            {(ShowPop === true) ? <div className="info-popup">
              <div className="info-inner-popup"> <span className="close-pop"><img src={canclePop} width="30px" onClick={() => setShowPop(false)} /></span>
                <h2 className="popup-heading text-center"><strong>Choose your favorite color</strong></h2>
                <p className='text-center'>At GETMAILBOX you can choose from 200 colors or enter your desired color as a RAL color code yourself. Please note that the colors shown may differ from the actual ones depending on the monitor and screen resolution
                  Colors may vary. </p>

                <nav class="navbar mt-4 navbar-light ">
                  <div class="container-fluid justify-content-center">
                    <strong className='fs-6 mx-2'  >Other RAL color: </strong>
                    <form onClick={submitCustomColor} class="d-flex">
                      <input class="form-control me-2" type="text" aria-label="Search" value={customRALColor} onChange={(e) => setCustomRALColor(e.target.value)} />
                      <button class="btn btn-warning" type='click' onClick={() => setShowPop(false)}>Submit</button>
                    </form>
                  </div>
                </nav>

                <div className='container-fluid ' >
                  <div className='row'>
                    <div className='col-13 mx-auto' >
                      <h4 className='mt-4'>Standard colors at no extra charge</h4>
                      <div className="row row-cols-1 row-cols g-4 mt-1 ">
                        <div className="col-md-2">
                          <div className='colorCard' onClick={() => colorCon("RAL 8028", "#513A2A")}>

                            <div className='card Colorbox' style={{ background: "#513A2A" }}>
                              {(colorCheck === "RAL 8028") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}
                            </div>

                            <div className='contant text-center'>
                              Terra brown
                              <h6>RAL 8028</h6>
                            </div>
                          </div>
                        </div>
                      </div>


                      <h2 className='mt-4'><strong>Choose your favorite color</strong></h2>
                      <div className="row row-cols-1 row-cols g-4 mt-1 ">
                        <div className="col-md-2">
                          <div className='colorCard' onClick={() => colorCon("RAL 1023", "#F7B500")}>

                            <div className='card Colorbox' style={{ background: "#F7B500" }}>
                              {(colorCheck === "RAL 1023") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}
                            </div>

                            <div className='contant text-center'>
                              Traffic yellow
                              <h6>RAL 1023</h6>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-2">
                          <div className='colorCard' onClick={() => colorCon("RAL 7037", "#7A7B7A")}>

                            <div className='card Colorbox' style={{ background: "#7A7B7A" }}>
                              {(colorCheck === "RAL 7037") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}
                            </div>

                            <div className='contant text-center'>
                              Dusty grey
                              <h6>RAL 7037</h6>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-2">
                          <div className='colorCard' onClick={() => colorCon("RAL 9004", "#2A2B2C")}>

                            <div className='card Colorbox' style={{ background: "#2A2B2C" }}>
                              {(colorCheck === "RAL 9004") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}
                            </div>

                            <div className='contant text-center'>
                              Signal black
                              <h6>RAL 9004</h6>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-2">
                          <div className='colorCard' onClick={() => colorCon("RAL 9011", "#27292B")}>

                            <div className='card Colorbox' style={{ background: "#27292B" }}>
                              {(colorCheck === "RAL 9011") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}
                            </div>

                            <div className='contant text-center'>
                              Graphit black
                              <h6>RAL 9011</h6>
                            </div>
                          </div>
                        </div>


                        <div className="col-md-2">
                          <div className='colorCard' onClick={() => colorCon("RAL 6011", "#6C7C59")}>

                            <div className='card Colorbox' style={{ background: "#6C7C59" }}>
                              {(colorCheck === "RAL 6011") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}
                            </div>

                            <div className='contant text-center'>
                              Reseda green
                              <h6>RAL 6011</h6>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-2">
                          <div className='colorCard' onClick={() => colorCon("RAL 7001", "#8C969D")}>

                            <div className='card Colorbox' style={{ background: "#8C969D" }}>
                              {(colorCheck === "RAL 7001") ? <BsCheckLg className='checkColor position-absolute bottom-0 start-0' size="3vh" /> : <></>}
                            </div>

                            <div className='contant text-center'>
                              Silver gray
                              <h6>RAL 7001</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> : <></>}

            {(displayErr === true && colorSelected === "white") ? <h5 className='mt-2 text-danger' >please selecet your color*</h5> : <></>}

{/* selecet paneling ............*/}

            <nav className="navbar navbar-light  bg-primary mt-5">
              <div className="container-fluid">

                <h4 className='text-light'>Paneling (similar to illustration)</h4>
              </div>
            </nav>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 ">

              <div className="col">
                <div className="card card-hover border border-dark" onClick={() => setPaneling("tight")} >
                  <div className='CardImg'>
                    <img src={tight} className="card-img-top " alt="..." />
                    <h5 className="card-title text-center">Tight</h5>
                    {(paneling === "tight") ? <BsCheckLg color='green' size="3vh" className='mb-4' /> : <></>}
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-hover border border-dark" onClick={() => setPaneling("applying")} >
                  <div className='CardImg'>
                    <img src={applying} className="card-img-top " alt="..." />
                    <h5 className="card-title text-center">Applying</h5>
                    {(paneling === "applying") ? <BsCheckLg color='green' size="3vh" className='mb-4' /> : <></>}
                  </div>
                </div>
              </div>
            </div>

            {(displayErr === true && paneling === "") ? <h5 className='mt-2 text-danger' >please selecet paneling*</h5> : <></>}

{/* selecet mailbox arrangements................... */}

            <nav className="navbar navbar-light  bg-primary mt-5">
              <div className="container-fluid">

                <h4 className='text-light'>Arrangement of mailboxes*</h4>
              </div>
            </nav>

            <div className='col'>
              <div class=" row mb-3  mt-4">
                Total number of mailboxes
                <input type="number" min="0" class="form-control form-control-lg mx-2" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ maxWidth: "8rem" }}
                  value={totalMailBox} onChange={(e) => setTotalMailBox(e.target.value)} />
              </div>
              <div class="row mb-3">
                Arrangement of mailboxes
                <input type="number" min="0" class="form-control form-control-lg mx-4" id="exampleInputPassword1" style={{ maxWidth: "8rem" }}
                  value={onTop} onChange={(e) => setOntop(e.target.value)} />
                on top of each other
              </div>
              <div class="row mb-3">
                <input type="number" min="0" class="form-control form-control-lg mx-4" id="exampleInputPassword1" style={{ maxWidth: "8rem" }}
                  value={sideBySide} onChange={(e) => setSidebySide(e.target.value)} />
                side by side
              </div>
            </div>
            {(displayErr === true && totalMailBox === "" && onTop === "" && sideBySide === "") ?
              <h5 className='mt-2 text-danger' >Please select all mailbox arrangements*</h5> : <></>}

{/* select maillbbox size................. */}

            <nav className="navbar navbar-light  bg-primary mt-5">
              <div className="container-fluid">
                     <h4 className='text-light'>Size of mailboxes*</h4>
              </div>
            </nav>


            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 ">

              <div className="col">
                <div className="card card-hover border border-dark" onClick={() => setMailboxesSize("klein")} >
                  <div className='CardImg'>
                    <img src={boxSmall} className="card-img-top " alt="..." />
                  </div>

                  <div className="card-body " >
                    <h5 className="card-title text-center">Small</h5>
                    <div className='box '>
                      {(mailboxesSize === "klein") ? <BsCheckLg color='green' size="3vh" /> : <></>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-hover border border-dark" onClick={() => setMailboxesSize("normal")} >
                  <div className='CardImg'>
                    <img src={boxMedium} className="card-img-top " alt="..." />
                  </div>

                  <div className="card-body " >
                    <h5 className="card-title text-center">Normal</h5>
                    <div className='box '>
                      {(mailboxesSize === "normal") ? <BsCheckLg color='green' size="3vh" /> : <></>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-hover border border-dark" onClick={() => setMailboxesSize("grob")} >
                  <div className='CardImg'>
                    <img src={boxLarge} className="card-img-top " alt="..." />
                  </div>

                  <div className="card-body " >
                    <h5 className="card-title text-center">Large</h5>
                    <div className='box '>
                      {(mailboxesSize === "grob") ? <BsCheckLg color='green' size="3vh" /> : <></>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {(displayErr === true && mailboxesSize === "") ? <h5 className='mt-2 text-danger' >please selecet mailbox size*</h5> : <></>}
            
{/* selecet mailbox type.................  */}

            <nav className="navbar navbar-light  bg-primary mt-5">
              <div className="container-fluid">
                <h4 className='text-light'>Type of mailboxes*</h4>
              </div>
            </nav>

            <div className="row  row-cols-md-4  mt-4">
              <div className="col">
                <div className="card card-hover border border-dark" onClick={() => setMailboxesType("Perpandicular")} >
                  <div className='CardImg'>
                    <img src={perpendicular} className="card-img-top " alt="..." style={{ width: "170px", height: "170px" }} />
                  </div>

                  <div className="card-body " >
                    <h5 className="card-title text-center mt-5">Perpandicular</h5>
                    <div className='box '>
                      {(mailboxesType === "Perpandicular") ? <BsCheckLg color='green' size="3vh" /> : <></>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-hover border border-dark" onClick={() => setMailboxesType("horizontal")} >
                  <div className='CardImg'>
                    <img src={horizontal} className="card-img-top " alt="..." style={{ width: "170px", height: "170px" }} />
                  </div>

                  <div className="card-body " >
                    <h5 className="card-title text-center mt-5">Horizontal</h5>
                    <div className='box '>
                      {(mailboxesType === "horizontal") ? <BsCheckLg color='green' size="3vh" /> : <></>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {(displayErr === true && mailboxesType === "") ? <h5 className='mt-2 text-danger' >Please selecet mailbox type*</h5> : <></>}
            
{/* selecet functional elements (Radios).............  */}

            <nav className="navbar navbar-light  bg-primary mt-5">
              <div className="container-fluid">
                <h4 className='text-light'>functional elements</h4>
              </div>
            </nav>

            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" id="flexCheckPresence1"
                value={radiosClicked} onChange={handelCheck1} />
              <label class="form-check-label" for="flexCheckDefault">

                Video - only recess, without module
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="flexCheckPresence"
                value={radiosClicked} onChange={handelCheck2} />
              <label class="form-check-label" for="flexCheckChecked">

                Video - including video module
              </label>1
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="flexCheckPresence"
                value={radiosClicked} onChange={handelCheck3} />
              <label class="form-check-label" for="flexCheckChecked">
                Intercom screen - only punched hole, without module
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="flexCheckPresence"
                value={radiosClicked} onChange={handelCheck4} />
              <label class="form-check-label" for="flexCheckChecked">
                Intercom screen - including audio module
                Intercom screen - including audio module
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="flexCheckPresence"
                value={radiosClicked} onChange={handelCheck5} />
              <label class="form-check-label" for="flexCheckChecked">
                With bell button
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="flexCheckPresence"
                value={radiosClicked} onChange={handelCheck6} />
              <label class="form-check-label" for="flexCheckChecked">
                With light button
              </label>
            </div>
            <div class="form-check mt-3">
              <input class="form-check-input" type="checkbox" id="flexCheckPresence"
                value={radiosClicked} onChange={handelCheck7} />
              <label class="form-check-label" for="flexCheckChecked">
                With 2nd name tag and insert "No advertising" or "Advertising, yes please".
              </label>
            </div>

            <div className='check-Note mt-4'>
              <p>By default, we plan your functional elements on the right or at the top, depending on the system. If you already know exactly
                where the elements should be placed, please let us know in the note field.</p>
            </div>

{/* enter request (textarea) ......................*/}

            <nav className="navbar navbar-light  bg-primary mt-5">
              <div className="container-fluid">
                <h4 className='text-light'>further requests and information</h4>
              </div>
            </nav>

            <div className='check-Note mt-3'>
              <p>If you have any requests or comments, please send them to us using the text field.</p>
            </div>
            <div class="form-floating mt-2">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={textAreadata} onChange={(e) => setTextAreaData(e.target.value)} style={{ height: "200px", maxWidth: "45rem" }}></textarea>
              <label for="floatingTextarea2">Comments</label>
            </div>

{/* file upload......................... */}

            <nav className="navbar navbar-light  bg-primary mt-5">
              <div className="container-fluid">
                <h4 className='text-light'>Upload file</h4>
              </div>
            </nav>

            <div className='check-Note mt-4'>
              <p>Do you have pictures of a facility that you like? Or would
                you like an offer for your own entrance? Then just upload suitable image material here.</p>
            </div>

            <div class="card text-dark bg-light mb-3" style={{ maxWidth: "45rem", height: "150px" }}>

              <div class="card-body d-flex align-items-center">
                <input class="form-control form-control-lg " id="formFileLg" type="file" onChange={exampleImage} />
              </div>
              <p className='mx-3 position-absolute bottom-0 start-0'>Please only upload images in pdf or jpg format.</p>
            </div>

{/* contact information............................ */}

            <nav className="navbar navbar-light  bg-primary mt-5">
              <div className="container-fluid">
                <h4 className='text-light'>contact information</h4>
              </div>
            </nav>

            <div className='check-Note mt-4'>
              <p>In order to make you an offer, we need the opportunity
                To contact You. Please let us know at least your name and email address.</p>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text"><FaUserAlt color=' #0c007a' size="3vh" /></span>
              <input type="text" class="form-control" placeholder="First name" aria-label="firma"
                value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
              <span class="input-group-text" style={{ marginLeft: "30px" }}><FaUserAlt color=' #0c007a' size="3vh" /></span>
              <input type="text" class="form-control" placeholder="Last name" aria-label="Server"
                value={last_name} onChange={(e) => setLast_name(e.target.value)} />
            </div>

            <nav className="navbar  ">
              <div className="container-fluid">
                {(displayErr === true && first_name === "") ? <h5 className=' text-danger' >Please enter first name*</h5> : <></>}
                {(displayErr === true && last_name === "") ? <h5 className=' d-flex justify-content-evenly text-danger' >Please enter last name*</h5> : <></>}
              </div>
            </nav>

            <div class="input-group mb-3">
              <span class="input-group-text"><MdLocationCity color=' #0c007a' size="4vh" /></span>
              <input type="text" class="form-control" placeholder="Company" aria-label="firma" aria-describedby="basic-addon1"
                value={addressof} onChange={(e) => setAddresspf(e.target.value)} />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><FaStreetView size="4vh" color=" #0c007a" /></span>
              <input type="text" class="form-control" placeholder="Street + no." aria-label="Strabe + Nr." aria-describedby="basic-addon1"
                value={street} onChange={(e) => setStreet(e.target.value)} />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><ImLocation2 size="3vh" color='#0c007a' /></span>
              <input type="text" class="form-control" placeholder="Residence" aria-label="Residence"
                value={residenceof} onChange={(e) => setresidenceof(e.target.value)} />
              <span class="input-group-text" style={{ marginLeft: "30px" }}><ImLocation2 size="3vh" color='#0c007a' /></span>
              <input type="text" class="form-control" placeholder="Postcode" aria-label="Postcode"
                value={residenceof2} onChange={(e) => setresidenceof2(e.target.value)} />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><MdEmail size="3vh" color="#0c007a" /></span>
              <input type="email" class="form-control" placeholder="E-mail" aria-label="Email"
                value={emailinput} onChange={(e) => setEmailInput(e.target.value)} />
              <span class="input-group-text" style={{ marginLeft: "30px" }}><BsFillTelephoneFill size="3vh" color="#0c007a" /></span>
              <input type="phone" class="form-control" placeholder="Phone Number" aria-label="Telefon"
                value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />
            </div>
            {(displayErr === true && emailinput === "") ? <h5 className='mt-2 text-danger' >Please enter your email*</h5> : <></>}
            <div className='check-Note mt-5'>
              <p>I have taken note of the data protection declaration. I hereby agree that
                my details and data will be collected and stored electronically to answer my request.</p>
            </div>

            {reloadBtn === false ? <button type="submit" class="btn btn-lg btn-primary">
              Send request</button> :
              <button class="btn btn-lg btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                Sending your request
              </button>}
            <p>* This is a mandatory field</p>
          </form>
        </div>
      </div>
    </div>
  )
}
