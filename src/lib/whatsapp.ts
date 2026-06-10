export const WHATSAPP_NUMBER = "918220169470";
export const WHATSAPP_MESSAGE = "Hello Skola Aari World! I would like to get in touch regarding your Aari embroidery classes and bridal works.";
export const getWhatsAppUrl = () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
