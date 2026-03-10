// config.js
const CONFIG = {
    // Contraseña para acceder a la plataforma (cámbiala por una segura)
    PASSWORD: "trading2026",

    // Activos que quieres monitorear (puedes añadir más)
    ACTIVOS: [
        { nombre: "ORO", simbolo: "XAUUSD" },
        { nombre: "PETRÓLEO", simbolo: "WTI" },
        { nombre: "NASDAQ", simbolo: "US100" }
    ],

    // Tokens de Telegram (los obtendremos más adelante)
    TELEGRAM_TOKEN: "poner_aqui_tu_token",
    TELEGRAM_CHAT_ID: "poner_aqui_tu_chat_id",

    // URL del backend (la configuraremos en la Fase 2)
    API_URL: "https://tu-backend.onrender.com" // CAMBIARÁS ESTO DESPUÉS
};