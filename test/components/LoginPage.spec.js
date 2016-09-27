import 'jsdom-global/register';
import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../src/components/LoginPage/LoginPage.js';
import { ENTER_KEY } from '../../src/constants/constants.js';

function setup() {
  const props = {
    email: undefined,
    password: undefined,
    isTryingToLogin: false,
    onChange: expect.createSpy(),
    onLogin: expect.createSpy(),
    onForgotPassword: expect.createSpy()
  };

  const enzymeWrapper = shallow(<LoginPage {...props} />);

  return { enzymeWrapper, props };
}

describe('LoginPage component', () => {
  it('header', () => {
    const header = 'My Portal';
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('h3').text()).toEqual(header);
    expect(true).toEqual(true);
  });

  it('email input', () => {
    const { enzymeWrapper } = setup();
    const placeholderText = 'Email Address';
    const textInput = enzymeWrapper.find('input[name="email"]');

    const { name, placeholder } = textInput.props();

    expect(name).toEqual('email');
    expect(placeholder).toEqual(placeholderText);
  });

  it('password input', () => {
    const { enzymeWrapper, props } = setup();
    const placeholderText = 'Password';
    const expectedClassName = 'form-control';
    const passwordInput = enzymeWrapper.find('input[name="password"]');
    const {
      name,
      placeholder,
      type,
      className,
      onChange,
      onKeyUp
    } = passwordInput.props();

    const { onChange: onChangeSpy, onLogin: onLoginSpy } = props;

    const event = {
      target: { name: 'password', value: 'abc123' }
    };

    expect(type).toEqual('password');
    expect(placeholder).toEqual(placeholderText);
    expect(className).toEqual(expectedClassName);

    onChange(event);
    expect(onChangeSpy).toHaveBeenCalledWith(
      event.target.name, event.target.value, event
    );

    onKeyUp(event);
    expect(onLoginSpy).toNotHaveBeenCalled();

    event.keyCode = ENTER_KEY;
    onKeyUp(event);
    expect(onLoginSpy).toHaveBeenCalled();
  });

  it('tooltip & forgot password button', () => {
    const { enzymeWrapper } = setup();
    const tooltip = enzymeWrapper.find('ReactTooltip');
    const passwordButton = enzymeWrapper.find('button');

    const expectedClassName = 'btn btn-default';
    const expectedToolTipText = 'Forgot password?';

    const props = passwordButton.props();
    const className = props.className;
    const toolTipText = props['data-tip'];

    expect(tooltip).toExist();
    expect(passwordButton).toExist();
    expect(className).toEqual(expectedClassName);
    expect(toolTipText).toEqual(expectedToolTipText);
  });

  it('login button', () => {
    const { enzymeWrapper, props } = setup();
    const loginButton = enzymeWrapper.find('LaddaButton');
    const expectedButtonStyle = 'expand-left';
    const expectedClassName = 'btn btn-lg btn-primary btn-block';
    const { onLogin: spy } = props;

    const {
      buttonStyle,
      className,
      onClick
    } = loginButton.props();

    expect(buttonStyle).toEqual(expectedButtonStyle);
    expect(className).toEqual(expectedClassName);
    onClick();
    expect(spy).toHaveBeenCalled();
  });
});
