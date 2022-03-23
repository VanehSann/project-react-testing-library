import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokemon.js />', () => {
  test('Se é renderizado um card com as informações', () => {
    renderWithRouter(<App />);
    // checando info
    // check pokemon
    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
    // check nome
    const pikachuName = screen.getByTestId('pokemon-name');
    expect(pikachuName).toHaveTextContent(/Pikachu/i);
    // check tipo
    const pikachuType = screen.getByTestId('pokemon-type');
    expect(pikachuType).toHaveTextContent(/Electric/i);
    // check peso
    const pikachuWeight = screen.getByTestId('pokemon-weight');
    expect(pikachuWeight).toHaveTextContent(/Average weight: 6.0 kg/i);
    // check img
    const pikachuImage = screen.getByAltText(/Pikachu sprite/i);
    const url = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(pikachuImage.src).toContain(url);
  });
  test('Ao clicar no link de navegação do Pokémon', () => {
    const { history } = renderWithRouter(<App />);

    const moreLink = screen.getByRole('link', { name: 'More details' });
    expect(moreLink).toBeInTheDocument();
    userEvent.click(moreLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });
  test('Se existe um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);

    const moreLink = screen.getByRole('link', { name: 'More details' });
    expect(moreLink).toBeInTheDocument();
    userEvent.click(moreLink);
    // favorita
    const favoritar = screen.getByLabelText(/Pokémon favoritado?/i);
    userEvent.click(favoritar);
    // check star
    const pikachuImageStar = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(pikachuImageStar).toBeInTheDocument();
    expect(pikachuImageStar.src).toContain('/star-icon.svg');
  });
});
