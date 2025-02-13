import QRCode from 'qrcode';

export const generateQRCode = async (restaurantId) => {
    try {
        const qrCodeData = `https://localhost:${process.env.PORT}/restaurant/${restaurantId}`;
        return await QRCode.toDataURL(qrCodeData);
    } catch (error) {
        console.error('QR Code Generation Failed:', error);
        throw error;
    }
};
