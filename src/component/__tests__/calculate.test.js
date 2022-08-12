import renderer from 'react-test-renderer';
import Calculator from '../calculator';
import Home from '../../pages/Home';
import Quote from '../../pages/Quote';

describe('App component testing with snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Home />);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Quote />);
    expect(tree).toMatchSnapshot();
  });
});
