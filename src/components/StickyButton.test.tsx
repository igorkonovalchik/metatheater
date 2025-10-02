import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

// Mock the image import
jest.mock('figma:asset/dff4c39d98e475a13ed0f9c43d7c7847b7c09a35.png', () => 'test-file-stub');

// Mock the useIsMobile hook
jest.mock('../components/ui/use-mobile', () => ({
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

// Mock window.scrollY and window.innerHeight
Object.defineProperty(window, 'scrollY', {
  writable: true,
  value: 0,
});

Object.defineProperty(window, 'innerHeight', {
  writable: true,
  value: 800,
});

// Mock addEventListener and removeEventListener
const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();

Object.defineProperty(window, 'addEventListener', {
  writable: true,
  value: mockAddEventListener,
});

Object.defineProperty(window, 'removeEventListener', {
  writable: true,
  value: mockRemoveEventListener,
});

describe('Sticky Button', () => {
  let scrollCallback: Function | null = null;

  beforeEach(() => {
    // Reset mocks
    mockAddEventListener.mockClear();
    mockRemoveEventListener.mockClear();
    
    // Capture the scroll event listener
    mockAddEventListener.mockImplementation((event, callback) => {
      if (event === 'scroll') {
        scrollCallback = callback;
      }
    });
    
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    });
  });

  test('does not show sticky button initially', () => {
    render(<App />);
    const button = screen.queryByText(/анонсы событий/i);
    expect(button).not.toBeInTheDocument();
  });

  test('shows sticky button after scrolling 50% of screen height', () => {
    render(<App />);
    
    // Simulate scrolling 50% of screen height (400px)
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 400,
    });
    
    // Call the scroll callback if it was registered
    if (scrollCallback) {
      scrollCallback();
    }
    
    // Button should now be visible
    const button = screen.getByText(/анонсы событий/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', 'https://t.me/metatselnost/308');
  });

  test('sticky button has correct styling', () => {
    render(<App />);
    
    // Simulate scrolling 50% of screen height
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 400,
    });
    
    // Call the scroll callback if it was registered
    if (scrollCallback) {
      scrollCallback();
    }
    
    const button = screen.getByText(/анонсы событий/i);
    expect(button).toBeInTheDocument();
    
    // Check if it's a link
    expect(button.tagName).toBe('A');
    
    // Check if it opens in a new tab
    expect(button).toHaveAttribute('target', '_blank');
  });
});