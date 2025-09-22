
# Count Guessr

Eine Next.js-WebApp für Schätzspiele, bei denen Nutzer die Anzahl eines bestimmten Objekts, z. B. Nudeln in einem Glas, schätzen können. Sie geben ihre Schätzung zusammen mit ihrem Namen ein, und am Ende wird ausgewertet, wer am nächsten an der tatsächlichen Anzahl liegt.


## Features

- Dark Mode
- Einfache Eingabe der Schätzung
- <domain>/results für eine Rangliste
- Auf jedem Gerät benutzbar





## Usage

User eingabe (<domain>/)

![Logo](https://github.com/simondevx/count-guessr/blob/main/public/eingabe.png)

Rangliste (<domain>/results)

![Logo](https://github.com/simondevx/count-guessr/blob/main/public/results.png)

## Installation

Repository Clonen
```
git clone https://github.com/simondevx/count-guessr
```


Git Folder löschen
```
//im Projektfolder folgenden Command ausführen
rmdir /s /q .git
```

Gehe auf Github und erstelle eine neue private Repository (nur Kleinbuchstaben benutzen)

Neue Repository initialisieren
```
git init
git remote add origin https://github.com/<USERNAME>/<REPO-NAME>.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

Vercel aufsetzen:
- Jetzt gehe zu [Vercel](https://vercel.com) und melde dich an
- Erstell ein neues Projekt und wähle deine erstellte Github Repository aus.
- Gehe unter dem Projekt auf storage und erstelle eine neue PostgreSQL Database.
- kopiere .env.local aus dem dashboard
- füge die Datei .env.local zum main Folder hinzu

Datenbank vorbereiten
```
npm run setup-db
```

Locally benutzen
```
npm install //um dependencies herunterzuladen
npm run dev //um die WebApp zu starten
// gehe zu localhost:3000, um die Website zu benutzen
```

Online benutzen
```
// gehe zu <projektname>.vercel.app
```



## License

[MIT](https://choosealicense.com/licenses/mit/)

