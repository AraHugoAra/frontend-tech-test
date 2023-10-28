export type UrlType = {
    type?: string,
    url?: string
}

export type ImageType = {
    path?: string,
    extension?: string
}

export type ComicSummary = {
    ressourceURI?: string,
    name?: string
}

export type ComicList = {
    available?: number,
    returned?: number,
    collectionURI?: string,
    items?: ComicSummary[],
}

export type StorySummary = {
    ressourceURI?: string,
    name?: string,
    type?: string
}

export type StoryList = {
    available?: number,
    returned?: number,
    collectionURI?: string,
    items?: StorySummary[],
}

export type EventSummary = {
    ressourceURI?: string,
    name?: string,
    type?: string
}

export type EventList = {
    available?: number,
    returned?: number,
    collectionURI?: string,
    items?: EventSummary[],
}

export type SeriesSummary = {
    ressourceURI?: string,
    name?: string,
}

export type SeriesList = {
    available?: number,
    returned?: number,
    collectionURI?: string,
    items?: SeriesSummary[],
}

export type CharacterType = {
id?: number,
name?: string,
description?: string,
modified?: Date,
resourceURI?: string,
urls?: UrlType[],
thumbnail?: ImageType,
comics?: ComicList,
stories?: StoryList,
events?: EventList,
series?: SeriesList
}