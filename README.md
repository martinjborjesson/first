# Inlämning 1 - Martin Börjesson

En app som låter användaren dela med sig och ta del av information om lägerplatser.<br>

## Installation

Om extern enhet andänds är det viktigt att servern och enheten är på samma lokala närverk.

1. Klona projektet
    ```bash
    git clone https://github.com/martinjborjesson/first.git
    ```
2. installera beroenden
    ```bash
    npm install
    ```
3. Ändra IP i API_CONFIG.ts (lokalt, `192.168.x.x`)
4. Starta backend-servern
    ```bash
    cd backend
    dotnet run
    ```
5. Starta Expo-appen (i separat terminal)
    ```bash
    npx expo start --tunnel
    ```

## Krav för inlämningen

- [X] Projektet använder minst 4 stycken RN-komponenter och minst 4 stycken Expo komponenter.
- [X] De utvalda komponenterna MÅSTE antecknas i README filen tillsammans med en lista över genomförda krav.
- [X] React Navigation används för att skapa en bättre upplevelse i appen.
- [X] Git & GitHub har använts
- [X] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [X] Uppgiften lämnas in i tid!
- [X] Muntlig presentation är genomförd.

### Komponenter - React Native

```tsx
<View>
<ScrollView>
<SafeAreaView>
<Image>
<Text>
<Pressable>
<Modal>
```

### Komponenter - Expo SDK

```tsx
- NavigationBar
- Haptics
- Location
- ImagePicker
```

### Krav för väl godkänt:

- [X] Alla punkter för godkänt är uppfyllda
- [X] Ytterligare en valfri extern modul används i projektet (ex. react-hook-form).
    - `React Native Maps`
    - `React Hook Form`
- [X] Appen ska prata med ett Web-API för att hämta data.
- [ ] Appen ska förberedas för lansering till en Appstore (Deadline samma dag som kursen slutar)
