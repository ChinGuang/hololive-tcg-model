import { HololiveCardType } from '..';
import { isHololiveCard } from './validate';

describe('isHololiveCard', () => {
    test('returns false for null or non-object values', () => {
        expect(isHololiveCard(null)).toBe(false);
        expect(isHololiveCard(undefined)).toBe(false);
        expect(isHololiveCard(123)).toBe(false);
        expect(isHololiveCard('string')).toBe(false);
    });

    test('returns false for objects missing required fields', () => {
        expect(isHololiveCard({})).toBe(false);
        expect(isHololiveCard({ id: 1 })).toBe(false);
        expect(isHololiveCard({ id: 1, name: 'Test Card' })).toBe(false);
    });

    test('validates holomen card correctly', () => {
        const validHolomenCard = {
            id: 1,
            name: 'Test Holomen',
            type: HololiveCardType.Holomen,
            rarity: 'SSR',
            source: ['Stream'],
            illustrator: 'Artist',
            cardNumber: 'H001',
            image: 'image.jpg',
            alternativeName: ['Alt Name'],
            attribute: '青',
            alternativeAttribute: ['赤'],
            tags: ['Tag1', 'Tag2'],
            hp: 1000,
            bloomLevel: 3,
            batonTouch: ['Effect1'],
            passiveSkills: ['Skill1'],
            arts: ['Art1'],
            isBuzz: false,
            isInfinite: false
        };
        expect(isHololiveCard(validHolomenCard)).toBe(true);
    });
});