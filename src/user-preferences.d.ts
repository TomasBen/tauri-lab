/* !!! All preference types have to be in uppercase since the rust side enums are as well,
and transforming the strings on every update call isn't ideal */

export enum Language {
  English = 'english',
  Spanish = 'spanish',
}

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export type UserPreferencesContextType = {
  preferences: UserPreferences;
  updatePreferences: (updates: Partial<UserPreferences>) => void;
};

export interface UserPreferences {
  Language: Language;
  Theme: Theme;
  ScaleFactor: number;
  Fullscreen: boolean;
}