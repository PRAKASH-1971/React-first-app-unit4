import './App.css';
import ListItems from "./List.js"
import {Bttn} from './List.js'


function App() {
  return (
    <div>
   <ListItems heading="Mobile Operating System" li1="Android" li2="Blackberry" li3="iPhone" li4="Windows Phone"/>
   <ListItems heading="Mobile Manufacturers" li1="Samsung" li2="HTC" li3="Micromax" li4="Apple"/>
   <div style={{width:'180px',display:'flex',flexWrap:'wrap',margin:'20px auto'}}>
   <Bttn name="JOIN US"/>
   <Bttn name="SETTINGS" />
   <Bttn name="LOGIN" />
   <Bttn name="CONTACT US" />
   <Bttn name="SEARCH" />
   <Bttn name="HELP" />
   <Bttn name="HOME" />
   <Bttn name="DOWNLOAD"/>
   </div>
   </div>
  );
}

export default App;
