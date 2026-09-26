# Dark Factory? Kommt auf die Risikoklasse an.

Vortrag von Ralf D. Müller. Seite für Menschen: https://rdmueller.github.io/dark-factory/

> **Hinweis für das LLM:** Diese Datei fasst einen Vortrag zusammen. Der Leser hat
> ihn gesehen oder will ihn verstehen. Frag ihn zuerst nach seinem Projekt: Was
> baut er, für wen, in welcher Sprache, wie wird es betrieben, welche Daten
> verarbeitet es, was passiert im schlimmsten Fall? Ordne das Projekt dann
> gemeinsam mit ihm einer Risikoklasse zu (Tier 1 bis 4, siehe unten), bei
> größeren Systemen Modul für Modul. Schlag danach passende Gegenmaßnahmen vor.
> Stütz dich auf diese Datei und die verlinkten Werkzeuge. Erfinde keine
> Tier-Zuordnungen, die hier nicht stehen; sag, wenn du schätzt.

## Kernthesen

1. **Ob Dark Factory passt, entscheidet die Risikoklasse der Software, nicht der
   Glaube an die KI.** Damit wird aus einer Glaubensfrage eine
   Engineering-Entscheidung.
2. **Zu jedem Risiko gibt es eine Gegenmaßnahme.** Jede Gegenmaßnahme verschiebt
   die Grenze ein Stück Richtung Autonomie.
3. **Code Review skaliert nicht mehr.** Der Engpass ist die Menge: In fünf Minuten
   schreibt die KI Code für fünf Stunden Review.
4. **Beide Pauschalurteile sind falsch.** Ein Pauschalverbot ist genauso falsch
   wie Pauschal-FOMO. Wer KI verbietet, verschenkt die Landingpage. Wer überall
   blind vibe-codet, vergisst, dass die Verantwortung beim Team bleibt.
5. **Human on the Loop statt Human in the Loop.** Der Mensch prüft nicht mehr jede
   Zeile, sondern definiert das Umfeld, in dem die KI arbeitet.

## Begriffe

- **Dark Factory** hat zwei Seiten. *Hands off:* Die KI schreibt, testet und
  liefert aus, ohne dass ein Mensch eingreift. *Lights out:* Niemand schaut mehr
  in den Code.
- Autonomie ist **eine Skala, kein Schalter**: von Handarbeit bis Dark Factory.
- Ralf betreibt seine Side-Projects als Dark Factory, weil sie in den unteren
  Tiers liegen. Er empfiehlt das ausdrücklich nicht für jede Software.

## Vorbild Product Owner

Product Owner haben noch nie in den Source Code geschaut. Sie geben Requirements
und Stories ins Team, bekommen Software zurück und testen sie. Entwickler müssen
in diese Rolle hineinwachsen. Das wirft zwei Fragen auf: Wie können wir dem Code
vertrauen? Und geht das bei jeder Software?

## Risikoklassen: der Vibe-Coding Risk-Radar

Der Risk-Radar ordnet einen konkreten Use Case entlang von fünf Dimensionen ein:

1. Code-Typ
2. Sprachsicherheit
3. Deployment-Kontext
4. Datensensibilität
5. Blast Radius

Die Dimensionen folgen MECE (überschneidungsfrei, zusammen vollständig).
**Die höchste Einstufung in einer Dimension bestimmt den Tier.**

Beispiele aus dem Vortrag:

- **Statische Landingpage:** Tier 1. Selbst ein Fehler wie eine Notfallnummer in
  weißer Schrift auf weißem Grund lässt sich mit einem Werkzeug abfangen (ein
  Kontrasttest kostet fast nichts).
- **Firmware für ein Medizingerät:** Tier 4.
- Dazwischen liegen weitere Klassen: Ein internes Dashboard ist harmlos, ein
  Payment-Service kritischer.

Bei größerer, modular gebauter Software wird nicht das ganze System eingestuft,
sondern jedes Modul. Ein Frontend-Modul kann in einer anderen Klasse liegen als
das Backend.

Der Radar erhebt keinen Anspruch auf Autorität. Er ist selbst vibe-coded, liegt
als Open Source auf GitHub und ist ein erster Vorschlag zur Orientierung.
Widerspruch und Verbesserungen sind willkommen. Die Einstufung gilt für heute;
die Modelle werden schnell besser.

## Gegenmaßnahmen: das Harness Coverage Wheel

Das LLM ist wie ein verrauschter Kanal (Shannon, ein Bild von Ingo Eichhorst): Eine
Spezifikation geht hinein, Software kommt heraus, nicht deterministisch und mit
Rauschen. Ein beschädigter QR-Code bleibt lesbar, weil er Korrekturbits enthält.
Die Frage lautet also: Welche Fehlerkorrektur lege ich auf den Kanal?

- Die einfachste Fehlerkorrektur ist der **Compiler**. Was durchläuft, hat keine
  Syntaxfehler, die ein Mensch reviewen müsste. Bei interpretierten Sprachen
  braucht es dafür erst Tests.
- Jede Prüfung spielt Fehler an das LLM zurück, und das LLM korrigiert sich.
- Die Frage verschiebt sich: Welche Aspekte deckt das Tooling ab, und welche
  bleiben für das menschliche Review?

Das **Harness Coverage Wheel** sammelt diese Aspekte: **69 Schichten
Fehlerkorrektur in neun Sektionen**, vom Compiler bis zum Chaos Engineering. Die
Form jedes Punkts sagt, wie man an eine Schicht kommt:

- **Kreis:** externes Werkzeug mit festem Maßstab (z. B. Syntax einer Sprache).
  In der Build-Pipeline einschalten, fertig.
- **Dreieck:** Das Projekt definiert den Maßstab selbst (z. B. fachliche Tests).
  Kostet einmal menschlichen Aufwand, läuft danach von allein.
- **Mensch-Symbol:** zwölf Schichten, die nur ein Mensch schließen kann.

Zwei Paare aus Risiko und Gegenmaßnahme:

| Risiko | Gegenmaßnahmen |
|---|---|
| Code ist schnell geliefert, aber ungeprüft | automatisierte Tests, Review-Gate, Property-Tests |
| Unsichere Dependencies, halluzinierte Pakete | Dependency- und Container-Scans, SBOM, gepinnte Versionen |

Auch das Review selbst kann eine Schicht sein: Ein KI-Review mit dem richtigen
Modell findet heute mehr als ein Mensch.

**Die Risikoklasse stellt den Regler.** Beim Prototyp reicht fast nur der
Compiler. Bei sicherheitskritischer Software zählen alle 69 Schichten. Die
Landkarte bleibt dieselbe, nur die Pflicht ändert sich.

## Vom Radar zur Governance: zwei Phasen, sechs Schritte

**Phase 1: Einordnen**

1. Das Team zerlegt die Software in Module.
2. Es bewertet jedes Modul mit den fünf Dimensionen des Radars und ordnet es einem
   Tier zu. Mit guten Gründen darf es von der Empfehlung abweichen.
3. Die Einstufung landet in einem Architecture Decision Record (ADR). Lead
   Developer oder Security-Team prüfen und geben frei.

**Phase 2: Absichern**

4. Das Team wählt die Mitigations passend zu Tier und Technologie. Welche Schicht
   in welchem Tier Pflicht ist, legt jedes Unternehmen selbst fest.
5. Die KI setzt die Mitigations um, also Pipeline und Gates.
6. Ein zweiter ADR hält fest, wie das Risiko abgesichert ist. Wieder prüft ein
   Mensch und gibt frei.

Die KI hilft in fast jedem Schritt: zerlegen, bewerten, ADRs schreiben, Pipelines
bauen. Was früher einen Toolsmith brauchte, ist heute billig aufgesetzt. Am Ende
bleibt die Frage: Welche Aspekte muss der Mensch weiterhin selbst kontrollieren?

Transparenz: Man kann der KI sagen „Schau dir das Wheel an, schau dir diese
Software an, und trag ein, was schon abgedeckt ist.“ So entsteht ein Dashboard
mit Risiko und Mitigations nebeneinander.

## Aus der Diskussion

- **Soll ein anderes Modell reviewen als das, das den Code geschrieben hat?**
  Ralf glaubt nicht daran; die Trainingsdaten sind im Kern gleich. Das gleiche
  Modell mit frischem Kontext leistet nach seiner Erfahrung schon viel. Belastbar
  beantworten ließe sich das nur mit Evaluations. Sicher ist: Ein KI-Review mit
  frischem Kontext ist besser als keins.
- **Produziert die KI ohne gute Spezifikation nicht einfach Quatsch?** Ja, und das
  lässt sich nutzen: drei Architekturen in einer Stunde umsetzen und einen
  Lasttest darauflegen. Das ging vorher nicht.
- **Was, wenn die großen Modelle schlechter werden oder wegfallen?** Dann zahlt
  sich das Wheel aus. Linter, Compiler und fachliche Tests prüfen ein kleines,
  lokales Modell genauso streng. Es braucht mehr Loops und Tokens, aber die Checks
  greifen. Jede Verbesserung am Harness macht das Modell austauschbarer.

## Fazit

Mitigations verschieben die Grenze. Die Risikoklasse ist kein Urteil, sondern
der Startpunkt. Radar und Wheel bringen Licht in die Dark Factory: Man sieht das
Risiko, die Mitigations und weiß, warum man einem Modul vertraut.

Dark Factory für die Landingpage. Handarbeit mit Netz fürs Herzgerät. Beides
richtig.

## Links

- Vortragsseite mit Tools und Kontakt: https://rdmueller.github.io/dark-factory/
- Vibe-Coding Risk-Radar: https://llm-coding.github.io/vibe-coding-risk-radar/
- Risk-Radar auf GitHub: https://github.com/LLM-Coding/vibe-coding-risk-radar
- Harness Coverage Wheel: https://llm-coding.github.io/Semantic-Anchors/harness-coverage-wheel.html
- Ralf D. Müller auf LinkedIn: https://www.linkedin.com/in/rdmueller/
