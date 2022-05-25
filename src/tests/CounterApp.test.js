import { shallow } from "enzyme/build";
import CounterApp from "../CounterApp";

describe('Pruebas en el <CounterApp />', () => {
    let wrapper = shallow(<CounterApp value={10} />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp value={10} />);
    });

    test('debe mostrar correctamente  <CounterApp/>', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('debe mostrar el valor de 100 cuando paso la propiedad', () => {
        const wrapper = shallow(<CounterApp value={100} />);
        expect(wrapper.find('h2').text()).toBe('100');
    })
    test('debe de incrementar con el boton de +1', () => {
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.find('h2').text()).toBe('11');
    });

    test('debe de decrementar con el boton de -1', () => {
        wrapper.find('button').at(2).simulate('click');
        expect(wrapper.find('h2').text()).toBe('9');
    });

});
