import JWT from 'jsonwebtoken';
import { TokenSettings } from '../../config/Token';


export const token = (UserId: string | null, LastPasswordChangeDate: string | null) => JWT.sign({
    UserId: UserId,
    LastPasswordChangeDate: LastPasswordChangeDate,
    Issuer: TokenSettings.Issuer,
    Audience: TokenSettings.Audience,
    Expiration: TokenSettings.Expiration
}, TokenSettings.SecurityKey);