import { HololiveCard, HololiveCardAttribute, HololiveCardBase, HololiveCardType, HololiveCheerCard, HololiveHolomenCard, HololiveOshiCard, HololiveSupportCard, HololiveSupportType } from "..";

export function isHololiveCard(v: unknown): v is HololiveCard {
    if (typeof v !== 'object' || v === null) {
        return false;
    }

    const card = v as Partial<HololiveCardBase>;

    // Check base card properties
    if (typeof card.id !== 'number' ||
        typeof card.name !== 'string' ||
        !card.type ||
        !card.rarity ||
        !Array.isArray(card.source) ||
        typeof card.illustrator !== 'string' ||
        !card.cardNumber ||
        typeof card.image !== 'string') {
        return false;
    }

    // Check specific card type
    switch (card.type) {
        case HololiveCardType.Holomen:
            return isHolomenCard(v as Partial<HololiveHolomenCard>);
        case HololiveCardType.Oshi:
            return isOshiCard(v as Partial<HololiveOshiCard>);
        case HololiveCardType.Support:
            return isSupportCard(v as Partial<HololiveSupportCard>);
        case HololiveCardType.Cheer:
            return isCheerCard(v as Partial<HololiveCheerCard>);
        default:
            return false;
    }
}

function isHolomenCard(card: Partial<HololiveHolomenCard>): boolean {
    return Array.isArray(card.alternativeName) &&
        card.alternativeName.every(name => typeof name === 'string') &&
        card.attribute !== undefined &&
        Object.values(HololiveCardAttribute).includes(card.attribute) &&
        Array.isArray(card.alternativeAttribute) &&
        card.alternativeAttribute.every(attr => Object.values(HololiveCardAttribute).includes(attr)) &&
        Array.isArray(card.tags) &&
        typeof card.hp === 'number' &&
        card.bloomLevel !== undefined &&
        Array.isArray(card.batonTouch) &&
        Array.isArray(card.passiveSkills) &&
        Array.isArray(card.arts) &&
        typeof card.isBuzz === 'boolean' &&
        typeof card.isInfinite === 'boolean';
}

function isOshiCard(card: Partial<HololiveOshiCard>): boolean {
    return card.attribute !== undefined &&
        Object.values(HololiveCardAttribute).includes(card.attribute) &&
        typeof card.life === 'number' &&
        Array.isArray(card.oshiSkill) &&
        Array.isArray(card.spOshiSkill);
}

function isValidSupportType(value: any): value is HololiveSupportType {
    return Object.values(HololiveSupportType).includes(value);
}

function isSupportCard(card: Partial<HololiveSupportCard>): boolean {
    return card.supportType !== undefined &&
        isValidSupportType(card.supportType) &&
        typeof card.ability === 'string' &&
        typeof card.isLimited === 'boolean';
}

function isCheerCard(card: Partial<HololiveCheerCard>): boolean {
    return card.attribute !== undefined &&
        Object.values(HololiveCardAttribute).includes(card.attribute);
}


export const ValidateUtil = {
    isHololiveCard,
    isHolomenCard,
    isOshiCard,
    isSupportCard,
    isCheerCard
}