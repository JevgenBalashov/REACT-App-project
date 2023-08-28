import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from 'src/UI/Button/Button';

const text = 'Click me';
const backgroundColor = '#333';
const onClick = jest.fn();

describe('Button component', () => {
  it('should render a button', () => {
    const view = render(<Button text={text} />);
    expect(view).toMatchSnapshot();
  });

  it('should call the onClick function when clicked', () => {
    render(<Button text={text} onClick={onClick} />);
    
    const button = screen.getByText(text);
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('renders with backgroundColor prop', () => {
    render(<Button text={text} backgroundColor={backgroundColor} />);

    const button = screen.getByText(text);
    expect(button).toHaveStyle({ backgroundColor });
  });
});
