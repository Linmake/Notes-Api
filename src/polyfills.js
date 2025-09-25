import { Buffer } from 'buffer'
import process from 'process'

// Polyfills globales para compatibilidad
window.Buffer = Buffer
window.process = process
window.global = window

// Para módulos que necesitan global
if (typeof global === 'undefined') {
    window.global = window
}