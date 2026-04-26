#!/bin/bash
# Test: arc42-Dokument Strukturvalidierung für Story 0.1
set -e
FILE="docs/arc42/linkwild.adoc"
ERRORS=0

check() {
    if ! grep -q "$1" "$FILE" 2>/dev/null; then
        echo "FAIL: missing '$1'"
        ERRORS=$((ERRORS + 1))
    else
        echo "PASS: found '$1'"
    fi
}

echo "=== Story 0.1: arc42 Structure Tests ==="

# AC-1: Dokument existiert
if [ ! -f "$FILE" ]; then
    echo "FAIL: $FILE does not exist"
    exit 1
else
    echo "PASS: $FILE exists"
fi

# AC-1: Relevante Abschnitte
check "Einführung und Ziele"
check "Randbedingungen"
check "Kontextabgrenzung"
check "Lösungsstrategie"
check "Bausteinsicht"
check "Laufzeitsicht"
check "Architekturentscheidungen"
check "Qualitätsszenarien"

# AC-2: ADRs mit Pugh-Matrix
check "ADR-1"
check "ADR-2"
check "ADR-3"
check "ADR-4"
check "Pugh"

# AC-3: PlantUML-Diagramme
check "@startuml"
check "@enduml"
check "C4Context\|System_Boundary\|System("

echo ""
if [ $ERRORS -gt 0 ]; then
    echo "RESULT: $ERRORS test(s) failed"
    exit 1
else
    echo "RESULT: All tests passed"
fi
