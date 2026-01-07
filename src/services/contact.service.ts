import type { ContactFormData } from "../types/contact.types";

export const sendContact = async (data: ContactFormData) => {
    // EmailJS o backend futuro
    console.log("Sending contact", data);
};
