import { Experience } from "./Experience";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    rate?: number;
    city?: string;
    availability?: string;
    workExperience?: Experience[];
    shortDescription?: string;
    longDescription?: string;
    contactNumber?: number;
    showProfile?: boolean;
    title?: string;
    skills?: string[];
}