// CSS files
import '../styles/style.css';


if(module.hot){
    module.hot.accept();
}

// Third Party libraries 
import $ from 'jquery';
import 'select2';
import slick from 'slick-carousel';


// Modules 
import Demo from "./frontpage/demo";



// Instantiate a new object using our modules/classes
var demo = new Demo();
