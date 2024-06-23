# Úkolníček v React Native

## Osnova projektu

### Úvodní obrazovka

- Zobrazí logo aplikace a uvítací zprávu.
- Přesměruje uživatele na hlavní stránku počkáním několika sekund.

### Hlavní stránka úkolů

- **Komponenty:**
  - Seznam úkolů s názvem, stavem (hotový/nehotový) a možností označení jako hotový.
  - Tlačítko pro přidání nového úkolu, otevírá formulář pro zadání názvu úkolu.
  - Možnost smazání úkolu přetažením nebo dlouhým stisknutím.
  - Možnost filtrování úkolů podle stavu (hotové/nehotové).

### Detaily úkolu

- Zobrazí detaily vybraného úkolu (název, stav, popis, termín splnění).
- Možnost úpravy detailů úkolu.
- Možnost označení úkolu jako hotového.
- Možnost návratu na hlavní stránku úkolů.

### Funkcionality

- **Interakce s internetem:**
  - Synchronizace úkolů pomocí online úložiště (např. Firebase Realtime Database).

- **Použití úložiště:**
  - Ukládání úkolů do lokálního úložiště (AsyncStorage).
  - Načítání uložených úkolů při startu aplikace.

### Struktura projektu

- **Komponenty:**
  - `App.js`: Úvodní obrazovka s animací a navigací na hlavní stránku úkolů.
  - `TasksScreen.js`: Hlavní stránka s komponentami pro zobrazení, přidání a filtrování úkolů.
  - `TaskDetailScreen.js`: Detailní stránka s detaily vybraného úkolu a možnostmi úprav.
  - `TaskService.js`: Modul pro práci s úložištěm úkolů (AsyncStorage).
  - `FirebaseService.js` (volitelně): Modul pro synchronizaci úkolů s online úložištěm (Firebase).

- **Navigace:**
  - Použití React Navigation pro navigaci mezi obrazovkami.

### Časový plán

1. **Den 1:** Inicializace projektu, vytvoření úvodní obrazovky.
2. **Den 2-3:** Implementace hlavní stránky úkolů s komponentami pro zobrazení, přidání a filtrování úkolů, integrace úložiště.
3. **Den 4:** Implementace detailní stránky úkolu s možnostmi úprav, testování aplikace.
4. **Den 5:** Ladění, oprava chyb, implementace online synchronizace (pokud vybráno) a finální úpravy.
5. **Den 6:** Finální úpravy, dokumentace projektu, příprava na prezentaci.

Tento projekt je ideální pro praktické porozumění základních konceptů React Native a jeho možností. Obsahuje práci s komponentami, úložištěm, navigací a případnou implementaci synchronizace dat s online službou.
