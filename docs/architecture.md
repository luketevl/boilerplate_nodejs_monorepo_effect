# Architecture

This boilerplate follows Hexagonal Architecture / Clean Architecture / Ports and Adapters.

## Dependency direction

- `domain`: business entities and pure rules.
- `ports`: contracts required by application use cases.
- `application`: use cases orchestrated with Effect.
- `adapters`: concrete implementations for ports.
- `apps/*`: composition roots.

Apps compose Effect Layers and run programs. Domain never imports adapters or apps.
