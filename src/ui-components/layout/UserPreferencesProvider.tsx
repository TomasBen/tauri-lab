import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import useDebounce from '../../hooks/useDebounce';
import UserPreferencesContext from '../../contexts/UserPreferencesContext';

import { UserPreferences } from '../../user-preferences';

// Definition of the UserPreferencesContext.Provider component

export default function UserPreferencesProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<UserPreferences>({} as UserPreferences);
  const [pendingChanges, setPendingChanges] = useState<Partial<UserPreferences>>({});

  // get preferences from tauri on app startup
  useEffect(() => {
    async function loadPreferences() {
      const userPrefs = await invoke<UserPreferences>('get_preferences');
      setPreferences(userPrefs);
      console.log('[UserPreferencesProvider] Preferences loaded from Tauri: \n\n', userPrefs);
    }
    loadPreferences();
  }, []);

  // saves preferences
  const savePreferences = async (updates: Partial<UserPreferences>) => {
    console.log('[UserPreferencesProvider::SavePreferences] Trying to save preferences to Tauri: \n\n', updates);
    try {
      await invoke('update_preferences', { newPreferences: updates });
      setPendingChanges({});
      console.log('[UserPreferencesProvider::SavePreferences] Preferences updated to Tauri: \n\n', preferences);
    } catch (error) {
      console.error('[UserPreferecesProvider::SavePreferences] Error updating preferences to Tauri: \n\n', error);
    }
  };

  // Debounces given function to only be called once every 30s
  const debouncedSave = useDebounce(savePreferences, 5000);

  const updatePreferences = async (updates: Partial<UserPreferences>) => {
    setPreferences((prev) => ({ ...prev, ...updates }));
    setPendingChanges((prev) => ({ ...prev, ...updates }));
    console.log('[UserPreferencesProvider::SavePreferences] Updates queued: \n\n', updates);
    debouncedSave(updates);
  };

  /* TODO: add call to tauri that saves preferences on gracefull exit

  Pass pendingChanges variable so that it checks wether save_preferences function should be called
  one more time before exiting

  FOR FUTURE REFERENCE: could add a loading state that returns a skeleton of the main app or dashboard
  while the preferences are being loaded if they happen to take too much time. Like so:

  const [loading, setLoading] = useState(true); and then:

  setLoading(false) <- after the useEffect finished loading the preferences

  if (loading) {
    return <DashboardSkeleton />
  }

  */

  return (
    <UserPreferencesContext.Provider value={{ preferences, updatePreferences }}>
      {children}
    </UserPreferencesContext.Provider>
  );
}
