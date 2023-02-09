import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  it('should be defined', () => {
    expect(Loader).toBeDefined()
  })

  it('should render in the dom', () => {
    const { getByRole } = render(<Loader />);

    expect(getByRole('alert')).toBeInTheDocument();
  })
});
