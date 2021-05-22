import { IValidation } from '..';
const BitcoreBte = require('bitcore-lib-bte');

export class BteValidation implements IValidation {
  validateAddress(network: string, address: string): boolean {
    const Address = BitcoreBte.Address;
    // Regular Address: try Bitcoin
    return Address.isValid(address, network);
  }

  validateUri(addressUri: string): boolean {
    // Check if the input is a valid uri or address
    const URI = BitcoreBte.URI;
    // Bip21 uri
    return URI.isValid(addressUri);
  }
}
