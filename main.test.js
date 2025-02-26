import { jest } from '@jest/globals';

describe('initMap function', () => {
  let mockMap;
  let mockImportLibrary;

  beforeEach(() => {
    mockMap = jest.fn();
    mockImportLibrary = jest.fn().mockResolvedValue({ Map: mockMap });

    global.google = {
      maps: {
        importLibrary: mockImportLibrary
      }
    };

    global.document = {
      getElementById: jest.fn().mockReturnValue({})
    };
  });
});
