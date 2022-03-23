import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <PokemonDetails.js />', () => {
  test('Se as informações detalhadas do Pokémon selecionado', () => {
    renderWithRouter(<App />);
    // clica
    const MoreDetails = screen.getByText(/More details/i);
    userEvent.click(MoreDetails);
    // check nome
    const pikachuName = screen.getByText(/Pikachu Details/i);
    expect(pikachuName).toBeInTheDocument();
    // check se more details sumiu
    expect(MoreDetails).not.toBeInTheDocument();
    // check outros
    const headingH2 = screen.getByRole('heading', { name: 'Summary' });
    expect(headingH2).toBeInTheDocument();
    const summaryContent = screen.getAllbyText(/roasts hard berries with electricity/i);
    expect(summaryContent).toHaveLength(1);
  });
  test('Se existe na página uma seção com os mapas', () => {
    renderWithRouter(<App />);
    // clica
    const MoreDetails = screen.getByText(/More details/i);
    userEvent.click(MoreDetails);
    const mapPokemon = screen.getByText(/Game Locations of Pikachu/i);
    expect(mapPokemon).toBeInTheDocument();

    const pikachuLocation = screen.getAllByAltText('Pikachu location');
    expect(pikachuLocation).toHaveLength(2);

    const url1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const url2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
    expect(pikachuLocation[0].src).toContain(url1);
    expect(pikachuLocation[1].src).toContain(url2);

    const pikachuText = screen
      .getByText(/with electricity to make them tender enough to eat./i);
    expect(pikachuText).toBeInTheDocument();

    const textoLocation = screen.getByText(/Kanto Viridian Forest/i);
    expect(textoLocation).toBeInTheDocument();
    const textoLocation2 = screen.getByText(/Kanto Power Plant/i);
    expect(textoLocation2).toBeInTheDocument();
  });
  test('Se o usuário pode favoritar um pokémon', () => {
    renderWithRouter(<App />);

    const moreLink = screen.getByRole('link', { name: 'More details' });
    expect(moreLink).toBeInTheDocument();
    userEvent.click(moreLink);
    // favorita
    const favoritar = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(favoritar).toBeInTheDocument();
    userEvent.click(favoritar);
    // check star
    const pikachuImageStar = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(pikachuImageStar).toBeInTheDocument();
    userEvent.click(favoritar);
    expect(pikachuImageStar).not.toBeInTheDocument();
  });
});
