//import { useHistory } from 'react-router-dom';

import '../styles/_button.scss';

const Button = ({ label, history, routeName }) =>{

    //const history = useHistory();

    const pushNewContact = () =>{
        history.push(routeName)
      }

    return (
        <button className="button" onClick={() => { pushNewContact() }}>{label}</button>
    )
}

export default Button