# Semantische Anker für LLMs
Page: https://rdmueller.github.io/pages/blog/semantic-anchors.html

DE
 7. November 2025
 

 

# Semantische Anker: Warum "TDD London School" besseren Code generiert als lange Erklärungen

 LLMs machen Pattern-Completion, kein logisches Denken

 

 
 
 

 
 Warum generieren LLMs manchmal exzellenten Code und manchmal schlechten? Die Antwort liegt in "semantischen Ankern" — kompakten, etablierten Begriffen, die umfassende Wissensmuster in Sprachmodellen aktivieren.

 

## Das Problem

 Vergleiche diese zwei Prompts:

 
 
 ❌ Verbose
 "Implementiere Test-Driven Development mit Mocks, teste Interfaces zuerst, arbeite outside-in..."

 

 
 ✅ Semantic Anchor
 "TDD, London School"

 

 

 

## Warum funktioniert das?

 LLMs machen Pattern-Completion, kein logisches Denken. Wenn ein Begriff konsistent mit bestimmten Mustern in den Trainingsdaten erscheint, aktiviert dieser Begriff genau diese Muster.

 

## Weitere Beispiele

 
 
- "ADRs nach Nygard" → Architecture Decision Records im Originalformat
 
- "Pugh-Matrix" → Strukturierte Entscheidungsfindung
 
- "EARS Syntax" → Easy Approach to Requirements Syntax
 
- "C4 Model" → Context, Container, Component, Code Diagramme
 

 

## Der Katalog

 Ich habe einen Katalog mit 21+ Semantic Anchors erstellt, der fünf Bereiche abdeckt:

 
 
- 🏛️ Software-Architektur (DDD, Clean Architecture, C4)
 
- 🧪 Testing-Methodologien (TDD Schools, Property-Based Testing)
 
- 📋 Requirements & Kommunikation (EARS, Impact Mapping, JTBD)
 
- 🎯 Entscheidungsfindung (Pugh-Matrix, Wardley Mapping)
 
- 📚 Dokumentation (Docs-as-Code, Diátaxis)
 

 → Semantic Anchors auf GitHub

 

## Praktischer Tipp

 
 Etablierte Domain-Terminologie übertrifft lange Erklärungen beim Prompting von LLMs für Code-Generierung.

 

 

 
 

## LinkedWild
