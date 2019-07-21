export class ApiResult {
    asset_id_base: string;
    rates: Rates[];
}

export class Rates {
    time: string;
    asset_id_quote: string;
    rate: number;
}