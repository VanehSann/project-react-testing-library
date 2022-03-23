import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('Se é exibido na tela a mensagem No favorite pokemon found.', () => {
    renderWithRouter(<App />);
    const favLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favLink);
    const favNotFound = screen.getByText(/No favorite pokemon found/i);
    expect(favNotFound).toBeInTheDocument();
  });
  test('Se é exibido todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);
    // clica em more details
    const moreDetails = screen.getByText(/More details/i);
    userEvent.click(moreDetails);
    // clica em favoritar
    const favoritar = screen.getByLabelText(/Pokémon favoritado?/i);
    userEvent.click(favoritar);
    // clina no link
    const favLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favLink);
    const favFound = screen.getByText(/Pikachu/i);
    expect(favFound).toBeInTheDocument();
  });
});
