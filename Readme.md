# Wordle solver

A solver for https://www.powerlanguage.co.uk/wordle !

(quick and dirty)

## Data
Dictionary from aspell http://aspell.net/

```aspell -d en dump master > dict.txt```

(replace en for other language)

## Usage

```node main.js``` you need node js

`Input > *u*re+ `

- \* : unknown letter
- e+ : misplaced letter
- u : good letter at good place

## Example :

Example for the 10 Jan 2022

1. `*****` => 7391 results
2. `****y` => 687 results
3. `*u**y` => 105 results
4. `e+u**y` => QUERY, CUTEY, PUSEY, SUETY
5. `e+u*ry` => QUERY
