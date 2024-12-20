import ruTranslation from '../locales/ru.json';
import enTranslation from '../locales/en.json';
import { deepKeysEqual } from '../../objectUtils';

describe('i18n test', () => {
  test('Json locales must have the same keys', () => {
    expect(deepKeysEqual(ruTranslation, enTranslation)).toEqual(true);
  });
});
