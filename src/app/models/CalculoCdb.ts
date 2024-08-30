export class CalculoCdb {
    constructor(
        public valorInvestido: number,
        public prazoMeses: number,
    ) { }
}

export class CalculoCdbResponse {
    constructor(
        public rendimentoBruto: number,
        public rendimentoLiquido: number,
        public valorTotalBruto: number,
        public valorInvestido: number,
        public prazoMeses: number
    ) { }
}