import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o app.js', () => {
  test('Se contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    // O primeiro link deve possuir o texto Home.
    const home = screen.getByText(/Home/i);
    expect(home).toBeInTheDocument();

    // O segundo link deve possuir o texto About.
    const about = screen.getByText(/About/i);
    expect(about).toBeInTheDocument();

    // O terceiro link deve possuir o texto Favorite Pokémons.
    const favorite = screen.getByText(/Favorite Pokémons/i);
    expect(favorite).toBeInTheDocument();
  });
  test('Se ao clicar no link "Home" é redirecionado para a página inicial.', () => {
    const { history } = renderWithRouter(<App />);

    const HomeLink = screen.getByRole('link', { name: 'Home' });
    expect(HomeLink).toBeInTheDocument();
    userEvent.click(HomeLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test('Se ao clicar no link "About" é redirecionado para a /about.', () => {
    const { history } = renderWithRouter(<App />);

    const AboutLink = screen.getByRole('link', { name: 'About' });
    expect(AboutLink).toBeInTheDocument();
    userEvent.click(AboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
  test('Se ao clicar no link "Favorite" é redirecionado para a /favorites.', () => {
    const { history } = renderWithRouter(<App />);

    const favLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(favLink).toBeInTheDocument();
    userEvent.click(favLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
  test('Se ao clicar no link "*" é redirecionado para a /notfound.', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/*');

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Page requested not found Crying emoji' });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
