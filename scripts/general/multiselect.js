import $ from 'jquery'
import 'select2';

class makeMultiSelect{
    constructor(){
        $(document).ready(function(){
            $('.make-multiselect').select2({
                placeholder: 'Select an option'
            });
        })
    }
}

export default makeMultiSelect;