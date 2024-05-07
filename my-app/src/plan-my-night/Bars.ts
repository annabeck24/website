export enum NYCNeighborhood {
    Brooklyn = "Brooklyn",
    Manhattan = "Manhattan",
    Queens = "Queens",
    Bronx = "Bronx",
    StatenIsland = "Staten Island"
}

export enum MusicType{
    Rock = "Rock",
    Pop = "Pop",
    HipHop = "Hip-Hop",
    Jazz = "Jazz",
    Country = "Country",
    Electronic = "Electronic",
    Classical = "Classical",
    Reggae = "Reggae",
    Blues = "Blues",
    Latin = "Latin",
    Punk = "Punk",
    Metal = "Metal",
    Folk = "Folk",
    RnB = "R&B",
    Soul = "Soul",
    Funk = "Funk",
    Disco = "Disco",
    Techno = "Techno",
    House = "House",
    Trance = "Trance",
    Dubstep = "Dubstep",
    DrumAndBass = "Drum and Bass",
}
export type BarData = { crowded: boolean, area: NYCNeighborhood, expensive: boolean, dancing: boolean, music: MusicType, type: string };

export const EastVillageBars: Record<string, BarData> = {

};
