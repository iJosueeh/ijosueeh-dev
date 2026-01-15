import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// Cleanup after each test case
afterEach(() => {
  cleanup();
});

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Type definitions for mocked observers
interface MockIntersectionObserver {
  new (): {
    disconnect: () => void;
    observe: () => void;
    takeRecords: () => never[];
    unobserve: () => void;
  };
}

interface MockResizeObserver {
  new (): {
    observe: () => void;
    unobserve: () => void;
    disconnect: () => void;
  };
}

// Mock IntersectionObserver
(
  globalThis as typeof globalThis & {
    IntersectionObserver: MockIntersectionObserver;
  }
).IntersectionObserver = class IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "0px";
  readonly thresholds: ReadonlyArray<number> = [];

  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

// Mock ResizeObserver (needed for React Three Fiber)
(
  globalThis as typeof globalThis & { ResizeObserver: MockResizeObserver }
).ResizeObserver = class ResizeObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};
