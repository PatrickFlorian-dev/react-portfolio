import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const HttpWizard = (data , curBackend , curHttpMethod) => {

    let backendUrl;
    let httpMethod;

    switch (curBackend) {
        case '1':
            backendUrl = 'https://somelocalbackend/someport'
            break;
    
        default:
            backendUrl = '';
            break;
    }

    function handleSwalAlert() {

        const MySwal = withReactContent(Swal)
    
        MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        didOpen: () => {
            // `MySwal` is a subclass of `Swal`
            //   with all the same instance & static methods
            MySwal.clickConfirm()
        }
        }).then(() => {
        return MySwal.fire(<p>Shorthand works too</p>)
        })
    
    }

    console.log( data, curBackend , curHttpMethod );
    handleSwalAlert();

}