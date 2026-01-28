import helmet from 'helmet'

const helmentConfig = {
    contentSecurityPolicy: {
        useDefaults: true,
        directives: {
            // allow assets from self + trusted CDNs
            "default-src": ["'self'"],
            "script-src": ["'self'"],
            "style-src": ["'self'", "'unsafe-inline'"],
            "img-src": ["'self'", "data:", "https:"],
            "connect-src": ["'self'"],
            "font-src": ["'self'", "https:", "data:"],
            "object-src": ["'none'"],
            "frame-ancestors": ["'none'"],
            "upgrade-insecure-requests": [],
        },
    },
    referrerPolicy: { policy: "no-referrer" },
    crossOriginEmbedderPolicy: false, // avoids breaking images/fonts
}

export default helmentConfig;