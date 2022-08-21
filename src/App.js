
import './App.css';
import { Buffer } from 'buffer'
import { send } from 'emailjs-com';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Header } from './components/Header';
import { CardItem } from './components/CardItem';
import { Footer } from './components/Footer';



function App() {
  const addData=(mountingType, colorSelected, paneling,mailboxesSize,mailboxesType,first_name,last_name,emailinput,
    street,addressof,residenceof,residenceof2,phoneNum,textAreadata,radiosClicked,totalMailBox,onTop,sideBySide,example_image,displayCusColor)=>{
      const image = new Buffer.from(example_image).toString()
      const sendEmail={
        mountingType:mountingType, 
        colorSelected:colorSelected,
        paneling:paneling,
        mailboxesSize:mailboxesSize, 
        mailboxesType:mailboxesType,
        displayCusColor:displayCusColor, 
        first_name:first_name,
        last_name:last_name,
        emailinput:emailinput,
       street:street, 
       addressof:addressof, 
       residenceof:residenceof, 
       residenceof2:residenceof2, 
       phoneNum:phoneNum, 
       textAreadata:textAreadata, 
        radiosClicked:radiosClicked, 
        totalMailBox:totalMailBox, 
        onTop:onTop, 
        sideBySide:sideBySide,
        example_image:image ,
      }
      send('service_8lqje6g','template_yyx1dft',  sendEmail , '90wuaN9OE1t7EaKR_')
      .then((response) => {
          console.log("SUCCESS", response.status , response.text);
      }) .catch((err)=>{
        console.log('FAILED...', err);
      });

  }
  return (
    <>
    <Header/>
    <CardItem formData={addData}/>
    <Footer/>
    </>
  );
}

export default App;
