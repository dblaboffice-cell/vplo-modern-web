# Konfiguracja menu VPLO z panelu Joomla

Zainstaluj archiwum komponentu przez **System → Zainstaluj → Rozszerzenia**. Następnie zaloguj się jako **Super User** i przejdź do **Komponenty → Konfiguracja VPLO**.

Najpierw wybierz **Podgląd zmian**. Jest to żądanie zabezpieczone tokenem CSRF i nie zapisuje żadnych danych. Komponent sprawdza dokładnie istniejące menu `Menu główne PL` typu `mainmenu` i istniejący moduł o tej samej nazwie korzystający z `mainmenu`.

Jeśli walidacja jest poprawna, kliknij **Zastosuj zmiany**. Komponent doda tylko brakujące najwyższe pozycje: Aktualności, Szkoła, Uczeń, Edukacja, Rekrutacja, Galeria i Kontakt. Pozycje są typu `heading`, zatem mogą zostać później powiązane z widokami Joomla. Ponowne uruchomienie nie dubluje pozycji.

Komponent nigdy nie tworzy `vplo-main-pl`, nie tworzy drugiego modułu, nie zmienia Home ani nie usuwa istniejących danych. Jeśli oczekiwane menu lub moduł nie istnieją albo moduł ma inne kluczowe ustawienia, przycisk zapisu pozostaje zablokowany.
