import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
  test('Se página contém um texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const Encountered = screen.getByRole('heading',
      { name: 'Encountered pokémons' });
    expect(Encountered).toBeInTheDocument();
  });
  test('Se é exibido o próximo Pokémon da lista quando o botão - com filtro', () => {
    renderWithRouter(<App />);
    // filtrar
    const Fire = screen.getByText(/Fire/i);
    userEvent.click(Fire);
    // Primeiro 1 (length 2)
    const Charmander = screen.getByText(/Charmander/i);
    expect(Charmander).toBeInTheDocument();
    // Proximo
    const ProxPokemon = screen.getByText(/Próximo pokémon/i);
    userEvent.click(ProxPokemon);
    // Segundo 2 (length 2)
    const Rapidash = screen.getByText(/Rapidash/i);
    expect(Rapidash).toBeInTheDocument();
    // Proximo
    userEvent.click(ProxPokemon);
    // Primeiro 1 (length 2)
    expect(Charmander).toBeInTheDocument();
  });
  test('Se é exibido o próximo Pokémon da lista quando o botão', () => {
    renderWithRouter(<App />);

    const ProxPokemon = screen.getByText(/Próximo pokémon/i);
    // 0
    const Pikachu = screen.getByText(/Pikachu/i);
    expect(Pikachu).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 1
    const Charmander = screen.getByText(/Charmander/i);
    expect(Charmander).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 2
    const Caterpie = screen.getByText(/Caterpie/i);
    expect(Caterpie).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 3
    const Ekans = screen.getByText(/Ekans/i);
    expect(Ekans).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 4
    const Alakazam = screen.getByText(/Alakazam/i);
    expect(Alakazam).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 5
    const Mew = screen.getByText(/Mew/i);
    expect(Mew).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 6
    const Rapidash = screen.getByText(/Rapidash/i);
    expect(Rapidash).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 7
    const Snorlax = screen.getByText(/Snorlax/i);
    expect(Snorlax).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 8
    const Dragonair = screen.getByText(/Dragonair/i);
    expect(Dragonair).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 0
    expect(Pikachu).toBeInTheDocument();
    userEvent.click(ProxPokemon);
  });
  test('Se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    // const Fire = screen.getByText(/Fire/i);
    // corrigindo commit
    const sete = 7;
    const data = screen.getAllByTestId('pokemon-type-button');
    expect(data).toHaveLength(sete);
    const All = screen.getByRole('button', { name: 'All' });
    const Electric = screen.getByRole('button', { name: 'Electric' });
    const Fire = screen.getByRole('button', { name: 'Fire' });
    const Bug = screen.getByRole('button', { name: 'Bug' });
    const Posion = screen.getByRole('button', { name: 'Poison' });
    const Psychic = screen.getByRole('button', { name: 'Psychic' });
    const Normal = screen.getByRole('button', { name: 'Normal' });
    const Dragon = screen.getByRole('button', { name: 'Dragon' });

    expect(All).toBeInTheDocument();
    expect(Electric).toBeInTheDocument();
    expect(Fire).toBeInTheDocument();
    expect(Bug).toBeInTheDocument();
    expect(Posion).toBeInTheDocument();
    expect(Psychic).toBeInTheDocument();
    expect(Normal).toBeInTheDocument();
    expect(Dragon).toBeInTheDocument();

    const ProxPokemon = screen.getByText(/Próximo pokémon/i);
    // Criar mock?
    userEvent.click(All);
    // 0
    const Pikachu = screen.getByText(/Pikachu/i);
    expect(Pikachu).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 1
    const Charmander = screen.getByText(/Charmander/i);
    expect(Charmander).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 2
    const Caterpie = screen.getByText(/Caterpie/i);
    expect(Caterpie).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 3
    const Ekans = screen.getByText(/Ekans/i);
    expect(Ekans).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 4
    const Alakazam = screen.getByText(/Alakazam/i);
    expect(Alakazam).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 5
    const Mew = screen.getByText(/Mew/i);
    expect(Mew).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 6
    const Rapidash = screen.getByText(/Rapidash/i);
    expect(Rapidash).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 7
    const Snorlax = screen.getByText(/Snorlax/i);
    expect(Snorlax).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 8
    const Dragonair = screen.getByText(/Dragonair/i);
    expect(Dragonair).toBeInTheDocument();
    userEvent.click(ProxPokemon);
    // 0
    expect(Pikachu).toBeInTheDocument();
    userEvent.click(ProxPokemon);
  });
});
