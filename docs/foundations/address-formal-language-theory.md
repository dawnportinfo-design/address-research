# Address Formal Language Theory

Surface address expressions are country-relative formal languages. They contain tokens, separators, administrative markers, aliases, optional components, and error patterns.

## Core Question

Can surface address expressions be parsed as formal languages while preserving country-specific conventions and uncertainty?

## Model

An address language is a tuple:

```text
L_c = (Alphabet_c, Grammar_c, Normalizer_c, ErrorModel_c, OutputSchema_c)
```

where `c` is a country or region model.

## Research Tasks

1. Define grammar fragments for administrative hierarchy, roads, blocks, buildings, units, and landmarks.
2. Separate transliteration from translation.
3. Treat incomplete input as a partial parse rather than a failed parse.
4. Preserve ambiguity as candidate sets instead of forcing one result too early.

## Safety Boundary

Use redacted or synthetic strings. Do not publish reconstructable household-level examples.

