// src/App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Calculadora', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('deve renderizar a calculadora corretamente', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(17);
  });

  test('deve exibir números corretamente', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    expect(screen.getByRole('textbox').value).toBe('123');
  });

  test('deve permitir números negativos', () => {
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox').value).toBe('-5');
  });

  test('deve permitir números decimais', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox').value).toBe('1.5');
  });

  test('deve realizar operações de soma corretamente', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox').value).toBe('3');
  });

  test('deve realizar operações de subtração corretamente', () => {
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox').value).toBe('2');
  });

  test('deve realizar operações de multiplicação corretamente', () => {
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox').value).toBe('6');
  });

  test('deve realizar operações de divisão corretamente', () => {
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox').value).toBe('2');
  });

  test('deve exibir erro para divisao por zero', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox').value).toBe('Erro');
  });

  test('deve limpar a entrada ao clicar em "C"', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('C'));
    expect(screen.getByRole('textbox').value).toBe('');
  });

  test('deve permitir operações encadeadas', () => {
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox').value).toBe('20');
  });

  test('deve lidar com números flutuantes com precisão', () => {
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox').value).toBe('0.3');
  });
});
