export interface User {
    firstName: string;
    lastName: string;
    email: string;
    rate: number;
    city?: string;
    availability?: string;
    shortDescription?: string;
    longDescription?: string;
    jobDescription?: string;
    experienceYears: number;
    experience?: string;
    contactNumber: number;
    showProfile: boolean;
    title?: string;
}