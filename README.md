# Aufgabe - Publish/Subscribe

Die folgenden Aufgaben wurde aus dem [Repository von Koll. Schletz](https://github.com/schletz/Wmc/blob/main/31_JavaScript/40_FunctionsCallback.md#%C3%BCbung-1-das-publishsubscribe-pattern) übernommen und um Tests ergänzt.

Durch den Umstand, Funktionen auch in einem Array speichern zu können, kann ein Publish/Subscribe
Pattern leicht implementiert werden. Komponenten können durch eine Subscribe Methode eine Callback
Funktion übergeben. Diese Funktion wird aufgerufen, wenn mit *publish()* Daten gesendet werden.
Implementiere die Funktion *messageBus()*, sodass sie dieses Feature besitzt.

## Aufgabe 1

### Publish/Subscribe Pattern

1. Bearbeite die Datei *aufgabe1.mjs*<br>Die Datei kann mit `npm run aufgabe1` ausgeführt werden.
2. Es ist nur Code innerhalb der Funktion *messageBus()* zu schreiben. Der Rest darf nicht
   verändert werden.

Beachte folgende Hinweise:

- Verwende intern ein Array, welches die subscriptions speichert. Mit *push()* können Elemente zu
  einem Array hinzugefügt werden.
- Überlege dir, wie die Funmtion *messageBus()* ein Objekt, welches 3 Methoden (nämlich *subscribe()*, *publish()*
  und *unsubscribe()* hat), zurückgeben kann. Beachte, dass das Objekt auf die Variablen in der Funktion zugreifen
  kann (closures).
- Als id kannst du den eingefügten Index in *subscribe()* zurückgeben. Das macht das Löschen in *unsubscribe()*
  besonders einfach.
- Mit *splice(index, 1)* kann ein Element in einem Array an der Position *index* gelöscht werden. Beachte aber, dass
  dadurch die zurückgegebene id (Array Index) ungültig wird!

### Ausgabe

```text
Subscriber1 received Hello!
Subscriber2 received Hello!
Subscriber1 received Hello again!
```

## Aufgabe 2

### Publish/Subscribe Pattern mit Eventtyp

Im vorigen Beispiel empfing jede registrierte Callback Funktion die Daten. Nun soll anhand eines
Typs differenziert werden können.

1. Bearbeite die Datei *aufgabe2.mjs*<br>Die Datei kann mit `npm run aufgabe2` ausgeführt werden.
2. Es ist nur Code innerhalb der Funktion *messageBus()* zu schreiben. Der Rest darf nicht
   verändert werden.

Beachte dabei die folgenden Hinweise:

- Es ist weiterhin nur ein Array zur Speicherung der Callback Funktionen notwendig.
- Füge in der Funktion *on()* ein JSON Object mit den Properties *type* und *callback* hinzu.
- Rufe in der Funktion *publish()* nur die Callback Funktionen auf, die den richtigen subscription
  Typ haben.

### Ausgabe

```text
Subscriber 1 received x = 10 and y = 20.
Subscriber 2 received x = 10 and y = 20.
Subscriber 3 received key h.
Subscriber 1 received x = 30 and y = 40.
```

## Testsetup

Es wird *jest* zum Testen verwendet. Das Setup erfolgt:

```sh
npm install
```

Das Programm selber kann mit folgendem Befehl gestartet werden:

```sh
npm run start

# für Aufgabe 1
npm run aufgabe1
node aufgabe1.mjs

# für Aufgabe 2
npm run aufgabe2
node aufgabe2.mjs
```

Anschließend können die Tests mit folgendem Befehl durchlaufen werden:

```sh
npm run test
```
