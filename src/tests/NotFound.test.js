import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <NotFound.js />', () => {
  test('Se aparece o texto especificado', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/*');

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Page requested not found Crying emoji' });
    expect(notFoundTitle).toBeInTheDocument();
  });
  test('Se página mostra a imagem especificada', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/*');
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const img = screen
      .getByAltText('Pikachu crying because the page requested was not found');
    expect(img.src).toContain(url);
  });
});
