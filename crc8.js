'use strict';
/**
 * Calculates the buffers CRC8.
 *
 * @param {Buffer} buffer the data buffer.
 * @return {number} the calculated CRC8.
 */
module.exports = function crc8(buffer) {
    var crc = 0;
    var odd;

    for (var i = 0; i < buffer.length; i++) {
        crc = crc ^ buffer[i];

        for (var j = 0; j < 8; j++) {
            odd = crc & 0x80;
            crc = crc << 1;
            if (odd) {
                crc = crc ^ 0x07%256;
            }else {
                crc=crc%256;
            }
        }
    }

    return crc;
};
