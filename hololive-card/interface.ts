import { HololiveCardAttribute, HololiveCardRarity, HololiveCardType, HololiveHolomenBloomLevel, HololiveHolomenPassiveSkillType, HololiveMerchandiseType, HololiveOshiSkillType, HololiveSupportType } from "./enum";

export interface HololiveMerchandiseInfo {
    name: string,
    startDate: Date | undefined,
    merchandiseType: HololiveMerchandiseType
}

interface HololiveCardBase {
    id: number;
    name: string;
    type: HololiveCardType;
    rarity: HololiveCardRarity;
    source: HololiveMerchandiseInfo[];
    illustrator: string;
    cardNumber: HololiveCardNumber;
    image: string;
}

interface HololiveOshiCard extends HololiveCardBase {
    type: HololiveCardType.Oshi;
    attribute: HololiveCardAttribute;
    life: number;
    oshiSkill: HololiveOshiSkill[];
    spOshiSkill: HololiveSpOshiSkill[];
}

interface HololiveOshiSkillBase {
    name: string;
    cost: number;
    type: HololiveOshiSkillType;
    effectText: string;
}

export interface HololiveOshiSkill extends HololiveOshiSkillBase {
    type: HololiveOshiSkillType.Oshi;
}

export interface HololiveSpOshiSkill extends HololiveOshiSkillBase {
    type: HololiveOshiSkillType.SpOshi;
}

interface HololiveHolomenCard extends HololiveCardBase {
    type: HololiveCardType.Holomen;
    alternativeName: string[];
    attribute: HololiveCardAttribute;
    alternativeAttribute: HololiveCardAttribute[];
    tags: string[];
    hp: number;
    bloomLevel: HololiveHolomenBloomLevel;
    batonTouch: HololiveCardAttribute[];
    passiveSkills: HololiveHolomenPassiveSkill[];
    arts: HololiveHolomenArts[];
    isBuzz: boolean;
    isInfinite: boolean;
}

export interface HololiveHolomenPassiveSkill {
    name: string,
    effectText: string,
    type: HololiveHolomenPassiveSkillType
}

export interface HololiveHolomenArts {
    name: string,
    effectText: string,
    baseDamage: number,
    attributeExtraDamage: {
        [key in Exclude<HololiveCardAttribute, HololiveCardAttribute.Unknown>]?: number;
    }
    attributeNeed: HololiveCardAttribute[],
}

interface HololiveSupportCard extends HololiveCardBase {
    type: HololiveCardType.Support;
    supportType: HololiveSupportType;
    ability: string;
    isLimited: boolean;
}

interface HololiveCheerCard extends HololiveCardBase {
    type: HololiveCardType.Cheer;
    attribute: HololiveCardAttribute;
}

export interface HololiveCardNumber {
    series: string;
    number: string;
}

export type HololiveCard = HololiveHolomenCard | HololiveOshiCard | HololiveSupportCard | HololiveCheerCard;

