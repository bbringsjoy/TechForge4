class Temperatura {
    private valorCelsius: number;

    constructor(valorCelsius: number) {
        this.valorCelsius = valorCelsius;
    }

    public getCelsius(): number {
        return this.valorCelsius;
    }

    public paraFahrenheit(): number {
        const fahrenheit = (this.valorCelsius * 9/5) + 32;
        return parseFloat(fahrenheit.toFixed(2));
    }

    public paraKelvin(): number {
        const kelvin = this.valorCelsius + 273.15;
        return parseFloat(kelvin.toFixed(2));
    }

    public exibirConversoes(): void {
        console.log(`--- Conversões para ${this.valorCelsius}°C ---`);
        console.log(`Fahrenheit: ${this.paraFahrenheit()}°F`);
        console.log(`Kelvin: ${this.paraKelvin()}K`);
    }
}