'use strict'

export default function loggerMiddleware(req, res, next) {
    const usuarioCodeMasters = req.headers['usuariocodemasters'];
    console.log(`UsuarioCodeMasters: ${usuarioCodeMasters}`);
    req.logged = true;
    next();
}