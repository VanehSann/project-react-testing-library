import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
// import App from '../App';
import About from '../components/About';
// import renderWithRouter from '../renderWithRouter';

describe('Teste se a página contém as informações sobre a Pokédex', () => {
  test('Se a página contém um heading h2 com o texto About Pokédex', () => {
    render(<About />);
    const h2 = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(h2).toBeInTheDocument();
  });
  test('Se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    render(<About />);
    const p = screen.getAllByText(/Pokémons/i);
    expect(p).toHaveLength(2);
  });
  test('Se a página contém a seguinte imagem de uma Pokédex', () => {
    render(<About />);
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const img = screen.getByAltText('Pokédex');
    expect(img.src).toContain(url);
  });
});
