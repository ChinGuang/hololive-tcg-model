import { HololiveCardAttribute, HololiveCardRarity, HololiveCardType, HololiveHolomenBloomLevel, HololiveHolomenPassiveSkillType, HololiveMerchandiseType, HololiveSupportType } from "./enum";

function getCardType(v: string): HololiveCardType {
    switch (v) {
        case HololiveCardType.Oshi:
        case HololiveCardType.Holomen:
        case HololiveCardType.Support:
        case HololiveCardType.Cheer:
            return v;
        case 'Buzzホロメン':
            return HololiveCardType.Holomen;
        default:
            if (v.includes(HololiveCardType.Support)) return HololiveCardType.Support;
            return HololiveCardType.Unknown;
    }
}

function getCardRarity(v: string): HololiveCardRarity {
    switch (v) {
        case HololiveCardRarity.C:
        case HololiveCardRarity.OC:
        case HololiveCardRarity.S:
        case HololiveCardRarity.OSR:
        case HololiveCardRarity.SR:
        case HololiveCardRarity.OUR:
        case HololiveCardRarity.UR:
        case HololiveCardRarity.P:
        case HololiveCardRarity.R:
        case HololiveCardRarity.RR:
        case HololiveCardRarity.SEC:
        case HololiveCardRarity.SY:
        case HololiveCardRarity.U:
            return v;
        default:
            return HololiveCardRarity.Unknown;
    }
}

function getCardAttribute(v: string): HololiveCardAttribute {
    switch (v) {
        case HololiveCardAttribute.Red:
        case HololiveCardAttribute.Blue:
        case HololiveCardAttribute.Green:
        case HololiveCardAttribute.Yellow:
        case HololiveCardAttribute.Purple:
        case HololiveCardAttribute.White:
        case HololiveCardAttribute.None:
            return v;
        default:
            return HololiveCardAttribute.Unknown;
    }
}

function getHolomenBloomLevel(v: string): HololiveHolomenBloomLevel {
    switch (v) {
        case HololiveHolomenBloomLevel.Debut:
        case HololiveHolomenBloomLevel.First:
        case HololiveHolomenBloomLevel.Second:
        case HololiveHolomenBloomLevel.Spot:
            return v;
        default:
            return HololiveHolomenBloomLevel.Unknown;
    }
}

function getHolomenPassiveSkillType(v: string): HololiveHolomenPassiveSkillType {
    switch (v) {
        case HololiveHolomenPassiveSkillType.CollabEffect:
        case HololiveHolomenPassiveSkillType.Gift:
        case HololiveHolomenPassiveSkillType.BloomEffect:
            return v;
        default:
            return HololiveHolomenPassiveSkillType.Unknown;
    }
}

function getSupportType(v: string): HololiveSupportType {
    switch (v) {
        case HololiveSupportType.Event:
        case HololiveSupportType.Fan:
        case HololiveSupportType.Item:
        case HololiveSupportType.Mascot:
        case HololiveSupportType.Staff:
        case HololiveSupportType.Tool:
            return v;
        default:
            return HololiveSupportType.Unknown;
    }
}

function getMerchandiseType(v: string): HololiveMerchandiseType {
    switch (v) {
        case HololiveMerchandiseType.Boosters:
        case HololiveMerchandiseType.Decks:
            return v;
        default:
            return HololiveMerchandiseType.Unknown;
    }
}

export const TypeUtil = {
    getCardType,
    getCardRarity,
    getCardAttribute,
    getHolomenBloomLevel,
    getHolomenPassiveSkillType,
    getSupportType,
    getMerchandiseType,
}