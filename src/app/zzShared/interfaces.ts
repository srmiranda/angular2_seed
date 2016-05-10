export interface IClub {
    id: string;
    clName: string;
    courseID: string;
    currentYear: string;
    climage: string;
    eventYears: IEventYears[];
}

export interface IEventYears {
    evYear: string;
}