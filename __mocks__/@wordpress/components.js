import React from 'react';

// Mock each of the components as you need them. Make sure to pass though all props.
export const Button = jest.fn( props => <button { ...props } /> );
export const Loading = jest.fn( props => <span { ...props } className="loading" /> );
