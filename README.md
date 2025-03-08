# Hololive TCG Model

A TypeScript/Node.js interface for the Hololive Official Card Game, providing utilities, data structures, and game mechanics for developers.

## Features

- Complete type definitions for all card types (Oshi, Holomen, Support, and Cheer cards)
- Enums for card attributes, rarities, and other game-specific values
- Utility functions for type checking and validation
- Full TypeScript support with type declarations

## Installation

```bash
npm install hololive-tcg-model
# or
yarn add hololive-tcg-model
```

## Usage

```typescript
import { 
  HololiveCard, 
  HololiveCardType, 
  HololiveCardAttribute,
  TypeUtil 
} from 'hololive-tcg-model';

// Check card types
const cardType = TypeUtil.getCardType("ホロメン");
if (cardType === HololiveCardType.Holomen) {
  // Handle Holomen card
}

// Work with card attributes
const attribute = TypeUtil.getCardAttribute("赤");
if (attribute === HololiveCardAttribute.Red) {
  // Handle red attribute
}
```

## Type System

### Card Types

- **Oshi Cards** (推しホロメン): Main character cards with life points and special skills
- **Holomen Cards** (ホロメン): Character cards with HP, bloom levels, and arts
- **Support Cards** (サポート): Various support effects including events, fans, and items
- **Cheer Cards** (エール): Attribute-based cheer cards

### Enums

- `HololiveCardType`: Different card types
- `HololiveCardRarity`: Card rarities (OSR, UR, SR, etc.)
- `HololiveCardAttribute`: Card attributes (Red, Blue, Green, etc.)
- `HololiveHolomenBloomLevel`: Bloom levels for Holomen cards
- `HololiveSupportType`: Types of support cards
- And more...

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Author

RainbowBird