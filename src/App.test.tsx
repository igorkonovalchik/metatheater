import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock the image import
jest.mock('figma:asset/dff4c39d98e475a13ed0f9c43d7c7847b7c09a35.png', () => 'test-file-stub');

// Mock the useIsMobile hook to control its behavior in tests
jest.mock('./components/ui/use-mobile', () => ({
  useIsMobile: () => true,
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/пространство твоей/i)).toBeInTheDocument();
  });

  test('renders main sections', () => {
    render(<App />);
    
    // Check if main sections are rendered
    expect(screen.getByText(/что такое метатеатр/i)).toBeInTheDocument();
    expect(screen.getByText(/нас выбирают/i)).toBeInTheDocument();
    // Look for the specific header with both "Кто" and "мы"
    expect(screen.getByRole('heading', { name: /Кто мы/i })).toBeInTheDocument();
    expect(screen.getByText(/что мы проводим/i)).toBeInTheDocument();
  });
});