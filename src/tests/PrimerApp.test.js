import { render } from "@testing-library/react";
import { shallow } from "enzyme/build";
import PrimeraApp from "../PrimeraApp";

describe('pruebas en nuestro componente <PrimeraApp />', () => {
     test('debe de mostrar el mensaje "Hola soy un saludo"', () => {
        const saludo = "Hola soy un saludo";
        const { getByText } = render(<PrimeraApp saludo={saludo} />);
        expect(getByText(saludo)).toBeInTheDocument();
    }); 
    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = "Hola soy un saludo!!!";
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    });

    //comproar elementos dentro de un componente 
    test('debe de mostrar el subtitulo enviado por argumentos', () => {
        const saludo = "Hola soy un saludo!!!";
        const wrapper = shallow(<PrimeraApp
            subtitulo="este es el subtitulo"
            saludo={saludo} />);
        expect(wrapper.find('p').text()).toBe('este es el subtitulo');
    })

});
