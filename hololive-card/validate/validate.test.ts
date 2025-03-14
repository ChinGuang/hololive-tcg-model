import { HololiveCardType } from '..';
import { isHololiveCard } from '.';

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

    test('returns false for objects with correct type but missing type-specific fields', () => {
        expect(isHololiveCard({
            id: 1,
            name: 'Test Card',
            type: HololiveCardType.Holomen,
            rarity: 'SSR',
            source: ['Stream'],
            illustrator: 'Artist',
            cardNumber: 'H001',
            image: 'image.jpg'
            // Missing all Holomen-specific fields
        })).toBe(false);
    });

    test('validates oshi card correctly', () => {
        const validOshiCard = {
            id: 2,
            name: 'Test Oshi',
            type: HololiveCardType.Oshi,
            rarity: 'SR',
            source: ['Stream'],
            illustrator: 'Artist',
            cardNumber: 'O001',
            image: 'oshi.jpg',
            attribute: '青',
            life: 5,
            oshiSkill: ['Skill1'],
            spOshiSkill: ['SPSkill1']
        };
        expect(isHololiveCard(validOshiCard)).toBe(true);
    });

    test('validates support card correctly', () => {
        const validSupportCard = {
            id: 3,
            name: 'Test Support',
            type: HololiveCardType.Support,
            rarity: 'R',
            source: ['Stream'],
            illustrator: 'Artist',
            cardNumber: 'S001',
            image: 'support.jpg',
            supportType: 'イベント',
            ability: 'Boost attack',
            isLimited: false
        };
        expect(isHololiveCard(validSupportCard)).toBe(true);
    });

    test('rejects support card with invalid supportType', () => {
        const invalidSupportCard = {
            id: 3,
            name: 'Test Support',
            type: HololiveCardType.Support,
            rarity: 'R',
            source: ['Stream'],
            illustrator: 'Artist',
            cardNumber: 'S001',
            image: 'support.jpg',
            supportType: 'InvalidType', // Invalid value
            ability: 'Boost attack',
            isLimited: false
        };
        expect(isHololiveCard(invalidSupportCard)).toBe(false);
    });

    test('validates cheer card correctly', () => {
        const validCheerCard = {
            id: 4,
            name: 'Test Cheer',
            type: HololiveCardType.Cheer,
            rarity: 'R',
            source: ['Stream'],
            illustrator: 'Artist',
            cardNumber: 'C001',
            image: 'cheer.jpg',
            attribute: '青'
        };
        expect(isHololiveCard(validCheerCard)).toBe(true);
    });

    test('return true for this real card', () => {
        const card = JSON.parse(`{ "id": 1, "type": "推しホロメン", "rarity": "OSR", "life": 5, "attribute": "白", "source": [{ "name": " スタートデッキ「ときのそら＆AZKi」", "startDate": "2024-09-19T16:00:00.000Z", "merchandiseType": "Decks" }], "name": "ときのそら", "illustrator": "でいりー", "image": "hSD01-001_OSR.png", "cardNumber": { "series": "hSD01", "number": "001" }, "oshiSkill": [{ "name": "リプレイスメント", "cost": 1, "type": "推しスキル", "effectText": "自分のステージのエール１枚を、自分のホロメンに付け替える。" }], "spOshiSkill": [{ "name": "じゃあ敵だね？", "cost": 2, "type": "SP推し スキル", "effectText": "相手のセンターホロメンとバックホロメン１人を交代させる。その後、このターンの間、自分の白センターホロメンのアーツ+50。" }] }`);
        expect(isHololiveCard(card)).toBe(true);
    })
});