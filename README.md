# Projekt Klassenbuch mit Angular
Grundlage ist die Basisumsetzung mit Angular im Rahmen der Projektvorlesungen an Pfingsten.
Der Zustand der Applikation muss in localstorage gespeichert werden, so dass nach einem Neustart des Browsers weitergearbeitet werden kann.
Die Schuldaten müssen also dieses Mal in localstorage gespeichert werden.
Die Daten müssen bei einem Neuladen der  Applikation resp. des Browser oder auch kompletter Reboot wieder vorhanden sein.
# Funktionalität
* Login
* Lehrer auflisten, anlegen, bearbeiten, löschen  
  Attribute: Vorname, Nachname, Mail, Passwort
* Klassen auflisten,anlegen, bearbeiten, löschen  
  Attribute: Stufe, Name
* Schüler auflisten,anlegen, bearbeiten, löschen  
  Attribute: Vorname, Nachname, Verweis auf Klasse
* Notizen für einen Schüler auflisten, anlegen, bearbeiten, löschen  
  Attribute: Text, Zeitstempel, Verweis auf Lehrer (der die Notiz angelegt hat), Verweis auf Schüler
* Logout

Die obigen Funktionalitäten sind Mindestfunktionen.  
Man darf kreativ sein, aber am Thema bleiben.
## Folgende zusätzliche Funktionalität
1. Dashboard / Klassenübersicht
2. Schnelle Möglichkeit, nach dem Login zunächst die Klasse auszuwählen
   und direkt in der Schülerübersicht eine neue Notiz zu einem Schüler anzulegen resp. anzustoßen.
3. Jeder Lehrer muss sich anmelden können (Passwort)

# Abgabe
Eine lokale Angular Applikation komplett als Zip-Archiv.
Bitte entfernt das node_modules Verzeichnis vor oder aus dem Ziparchiv, damit dieses nicht zu groß wird.
Ich werde auf Kommandozeile in dieses Verzeichnis wechseln und dort:
npm install
npm start
ausführen und dann muss die Applikation laufen.
Falls ihr das abweichend konfiguriert habt, dann bitte im Text schreiben. Danke.

---

# Notizen
```
1. das Speichern der Kurse je Student im LocalStorage ist Fehlerhaft
beim neu laden der Seite werden diese nicht mehr automatisch ausgewählt


Lösung (nicht das komplette Objekt sondern nur den Namen bei ngValue
verwenden), Achtung Nachteil wird ein Kurs umbenannt geht die Verbindung
verloren, normalerweise würde man hier eine eindeutige ID verwenden und
diese verwenden wenn vorhanden.

<select style="width: 300px;" multiple [(ngModel)]="current.courses"
size="5">

 <option *ngFor="let c of dataService.courses"
_[NGVALUE]=__"C.NAME"_>{{c.name}}</option>

</select>

2. Optional für das Speichern im LocalStorage nur ein Objekt verwenden
(vermeidet eventuell vorkommende nullpointer beim Aufruf):

CONSTRUCTOR() {

 IF (_LOCALSTORAGE_.getItem("DATA") == NULL) {

 LET s = NEW Student("HANS", "MÜLLER", 123456);

 THIS.STUDENTS.push(s);

 THIS.COURSES.push(NEW Course("INF16A"));

 } ELSE {

 THIS.get();

 }

}

save() {

 LET s = {STUDENTS: THIS.STUDENTS, COURSES: THIS.COURSES};

 _LOCALSTORAGE_.setItem("DATA", _JSON_.stringify(s));

}

get() {

 LET data = _JSON_.parse(_LOCALSTORAGE_.getItem("DATA"));

 THIS.COURSES = data.COURSES;

 THIS.STUDENTS = data.STUDENTS;

}

3. Eigenes HTML verwenden

in der src/index.html sowie app/app.component.html darf auch ein anderes
template verwendet werden, zu beachten ist hier:

im head wird

<BASE HREF="/">

benötigt

bilder/ css files etc.. im Ordner assets ablegen und natürlich darauf
Verlinken

und innerhalb des Bodys

<APP-ROOT></APP-ROOT>

hier wird die app.component.html

geladen

in dieser ist es wichtig

<ROUTER-OUTLET></ROUTER-OUTLET>

dort zu verwenden wo der Inhalt der einzelnen components angezeigt
werden soll.
```

---
---

# Classbook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
