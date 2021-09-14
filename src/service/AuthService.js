import { accountRepository } from "../di";
import * as Crypto from 'expo-crypto';

export class AuthService {
    async verifyUser(fields) {
        if (fields.name && fields.group) {
            const string = fields.name + fields.group;
            const hash = await Crypto.digestStringAsync(
                Crypto.CryptoDigestAlgorithm.SHA256,
                string,
                { encoding: Crypto.CryptoEncoding.HEX }
            );
            let user = await accountRepository.getUserByHash(hash);
            return { ...user, hash };
        }
        throw new Error("No data");
    }
}